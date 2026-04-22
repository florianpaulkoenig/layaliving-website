-- Phase C — Google Places Photo integration.
-- Adds columns to store the Places API photo reference + attribution.
-- Photos themselves aren't stored — the site proxies them live via
-- /api/photo?ref=<image_reference> using a server-side API key.

alter table recommendations
  add column if not exists google_place_id text,
  add column if not exists image_reference text,
  add column if not exists image_attribution text;

comment on column recommendations.google_place_id is
  'Google Places (New) place_id for this venue; stable identifier.';
comment on column recommendations.image_reference is
  'Google Places photo_reference string. Feed into /api/photo?ref=... to serve the image.';
comment on column recommendations.image_attribution is
  'Plain-text attribution from the Places API (html_attributions[0]).';

create index if not exists recommendations_place_id_idx
  on recommendations (google_place_id);
