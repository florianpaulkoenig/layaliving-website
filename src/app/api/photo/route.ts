import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Server-side proxy for Google Places Photos (v1 API).
 *
 * We fetch the image binary server-side and stream it back, rather than 302ing
 * the browser to Google. Two reasons:
 *   1. The API key has HTTP-referrer restrictions (only www.layaliving.ch/*).
 *      A browser-follow-redirect strips Referer, so Google would return 403.
 *   2. Hiding the googleapis URL + key from the client is a nice bonus.
 *
 * Flow: client → /api/photo?ref=places/<pid>/photos/<photoId>&w=1200
 *        → our server calls Google with Referer header (gets JSON with photoUri)
 *        → our server fetches the lh3.googleusercontent.com binary
 *        → we stream bytes back to the browser
 */

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

  // Step 1: resolve the photo → get the googleusercontent.com URL as JSON.
  const metaUrl = `https://places.googleapis.com/v1/${ref}/media?maxHeightPx=${maxHeight}&skipHttpRedirect=true&key=${apiKey}`;
  const metaRes = await fetch(metaUrl, {
    headers: { Referer: "https://www.layaliving.ch/" },
    cache: "no-store",
  });

  if (!metaRes.ok) {
    return NextResponse.json(
      { error: "Upstream photo lookup failed", status: metaRes.status },
      { status: 502 }
    );
  }

  const meta = (await metaRes.json()) as { photoUri?: string };
  if (!meta.photoUri) {
    return NextResponse.json({ error: "No photoUri in response" }, { status: 502 });
  }

  // Step 2: fetch the actual image bytes and stream them back.
  const imgRes = await fetch(meta.photoUri, { cache: "no-store" });
  if (!imgRes.ok || !imgRes.body) {
    return NextResponse.json(
      { error: "Image fetch failed", status: imgRes.status },
      { status: 502 }
    );
  }

  const contentType = imgRes.headers.get("content-type") ?? "image/jpeg";

  return new Response(imgRes.body, {
    status: 200,
    headers: {
      "Content-Type": contentType,
      // Google's signed URL is short-lived but the `name` ref is stable —
      // cache aggressively at the edge, moderately in the browser.
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
