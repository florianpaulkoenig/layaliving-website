import type { Recommendation } from "@/types/recommendation";

/**
 * Returns the best image URL for a recommendation:
 *   1. Google Places photo (via our /api/photo proxy)
 *   2. image_url if manually set (local or external)
 *   3. null (caller should show a placeholder)
 */
export function photoFor(
  r: Pick<Recommendation, "image_reference" | "image_url">,
  width = 1200
): string | null {
  if (r.image_reference) {
    return `/api/photo?ref=${encodeURIComponent(r.image_reference)}&w=${width}`;
  }
  return r.image_url ?? null;
}
