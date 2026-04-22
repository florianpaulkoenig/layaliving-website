/**
 * Fetch Google Places photo references (+ attribution, place_id) for all
 * recommendations and store them in Supabase.
 *
 * Usage:
 *   npm run fetch-photos
 *
 * Requires:
 *   GOOGLE_PLACES_API_KEY             — server-only (Places API (New) enabled)
 *   NEXT_PUBLIC_SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY         — bypasses RLS to write
 *
 * Skips rows that already have image_reference set, unless --force is passed.
 * Run again any time (idempotent except for `--force`).
 */

import { createClient } from "@supabase/supabase-js";

type Row = {
  id: number;
  category: string;
  slug: string;
  name: string;
  address: string | null;
  image_reference: string | null;
  google_place_id: string | null;
};

const FORCE = process.argv.includes("--force");

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!API_KEY) throw new Error("Missing GOOGLE_PLACES_API_KEY");
if (!SUPABASE_URL || !SERVICE_KEY)
  throw new Error("Missing Supabase env vars");

const supabase = createClient(SUPABASE_URL, SERVICE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

// ---------- Places API (v1) ----------

async function findPlaceId(name: string, address: string | null): Promise<{
  placeId: string;
  photoName: string | null;
  attribution: string | null;
} | null> {
  // Text Search — matches "Name, Address" → best place
  const query = address ? `${name}, ${address}` : `${name}, Luzern, Switzerland`;
  const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": API_KEY!,
      "X-Goog-FieldMask": "places.id,places.displayName,places.photos",
    },
    body: JSON.stringify({ textQuery: query, languageCode: "en" }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Places searchText ${res.status}: ${text.slice(0, 200)}`);
  }
  const data = (await res.json()) as {
    places?: Array<{
      id: string;
      displayName?: { text?: string };
      photos?: Array<{ name: string; authorAttributions?: Array<{ displayName?: string; uri?: string }> }>;
    }>;
  };
  const p = data.places?.[0];
  if (!p) return null;

  const photo = p.photos?.[0];
  let attribution: string | null = null;
  if (photo?.authorAttributions && photo.authorAttributions.length > 0) {
    attribution = photo.authorAttributions
      .map((a) =>
        a.uri
          ? `<a href="${a.uri}" target="_blank" rel="noreferrer">${a.displayName ?? "Photographer"}</a>`
          : a.displayName ?? ""
      )
      .filter(Boolean)
      .join(", ");
  }
  return {
    placeId: p.id,
    photoName: photo?.name ?? null,
    attribution,
  };
}

// ---------- Main ----------

async function main() {
  let query = supabase
    .from("recommendations")
    .select("id, category, slug, name, address, image_reference, google_place_id")
    .eq("published", true)
    .order("category")
    .order("sort_order");

  if (!FORCE) {
    query = query.is("image_reference", null);
  }

  const { data, error } = await query;
  if (error) throw error;
  const rows = (data ?? []) as Row[];

  console.log(`Fetching photos for ${rows.length} recommendations${FORCE ? " (forced)" : " (skipping those already populated)"}.`);

  let success = 0;
  let noMatch = 0;
  let errors = 0;

  for (const r of rows) {
    try {
      const found = await findPlaceId(r.name, r.address);
      if (!found) {
        console.log(`  ✗ no match for ${r.category}/${r.slug} (${r.name})`);
        noMatch++;
        continue;
      }
      const update: Record<string, unknown> = {
        google_place_id: found.placeId,
      };
      if (found.photoName) {
        update.image_reference = found.photoName;
        update.image_attribution = found.attribution;
      }
      const { error: uErr } = await supabase
        .from("recommendations")
        .update(update)
        .eq("id", r.id);
      if (uErr) throw uErr;

      console.log(
        `  ✓ ${r.category}/${r.slug}: place_id=${found.placeId.slice(0, 18)}… photo=${found.photoName ? "yes" : "no"}`
      );
      success++;
    } catch (e) {
      console.error(`  ! ${r.category}/${r.slug}:`, (e as Error).message);
      errors++;
    }
    // Gentle pace — 200ms between calls keeps us well under Google's rate limit.
    await new Promise((r) => setTimeout(r, 200));
  }

  console.log(
    `\nDone. ${success} updated, ${noMatch} no-match, ${errors} errors.`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
