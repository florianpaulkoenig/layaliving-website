import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Server-side proxy for Google Places Photos (v1 API).
 *
 * Client calls `/api/photo?ref=places/<place_id>/photos/<photo_id>&w=1200`.
 * We attach the server-only GOOGLE_PLACES_API_KEY and 302 to Google, which in
 * turn redirects to the final `googleusercontent.com` image URL. The API key
 * never reaches the browser.
 *
 * Cache hint: Google's final URL is short-lived (hours) but stable enough
 * for an hour of browser caching and a day on Vercel Edge. Keeps our Places
 * API bill low even under traffic.
 */

// Place photo `name` format is: `places/<placeId>/photos/<photoId>`.
// Example: `places/ChIJXXXX/photos/AdCG2DPYYY`
const REF_SHAPE = /^places\/[A-Za-z0-9_-]+\/photos\/[A-Za-z0-9_-]+$/;

export async function GET(req: Request) {
  const url = new URL(req.url);
  const ref = url.searchParams.get("ref");
  const w = url.searchParams.get("w") ?? "1200";

  if (!ref) {
    return NextResponse.json({ error: "Missing ref" }, { status: 400 });
  }
  if (!REF_SHAPE.test(ref)) {
    return NextResponse.json({ error: "Invalid ref format" }, { status: 400 });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "GOOGLE_PLACES_API_KEY not configured" },
      { status: 500 }
    );
  }

  const maxHeight = Math.min(Math.max(parseInt(w, 10) || 1200, 200), 1600);

  // Places API v1 photo endpoint. The `name` goes directly in the path.
  const googleUrl = `https://places.googleapis.com/v1/${ref}/media?maxHeightPx=${maxHeight}&key=${apiKey}`;

  return NextResponse.redirect(googleUrl, {
    status: 302,
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
