-- Sample entries so the UI has something to render on first load.
-- Replace / extend via Phase C content curation.

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values
(
  'kapellbruecke',
  'culture',
  'Kapellbrücke',
  'Europe''s oldest covered wooden bridge — and still Lucerne''s postcard.',
  'The 14th-century wooden bridge stretches across the Reuss with painted triangular gables overhead and the Water Tower standing watch. Cross it at sunrise for the quiet, or at dusk when the city lights catch the water.',
  'Walk across it, then pause halfway to look up — the gables tell Lucerne''s history in painted panels.',
  'Kapellbrücke, 6002 Luzern', 47.0516, 8.3075, 'https://www.luzern.com/en/see-do/kapellbruecke',
  1, null, 10, '1',
  array['spring','summer','autumn','winter'],
  array['romantic','photo-spot','sunset','evening','view','walk-in'],
  1
),
(
  'rigi-sunrise',
  'hike',
  'Rigi Sunrise',
  'Queen of the Mountains — Mark Twain&rsquo;s favourite sunrise.',
  'Take the first cogwheel train of the day up from Vitznau or Arth-Goldau, step onto the summit plateau, and wait for the Alps to catch fire. Clear mornings are unforgettable; cloudy ones still deliver a sea of fog.',
  'Book the earliest train — you&rsquo;ll be one of ten people up there, not a hundred.',
  'Rigi Kulm, 6410 Rigi Kaltbad', 47.0535, 8.4853, 'https://www.rigi.ch/en',
  3, null, null, 'Train from Luzern → Vitznau (boat) → cogwheel',
  array['summer','autumn','winter'],
  array['sunrise','view','photo-spot','mountain','romantic','splurge'],
  1
),
(
  'wirtshaus-galliker',
  'eat',
  'Wirtshaus Galliker',
  'A five-generation Luzerner Stube. No fuss, all comfort.',
  'Beloved family-run tavern since 1856, serving Lucerne classics in a cosy, wood-panelled room. Their Chügelipastetli (vol-au-vent) and Kalbsleberli are the stuff local legend is made of.',
  'Ask for the daily special and order whatever the old ladies at the next table are having. Reserve — always full.',
  'Schützenstrasse 1, 6003 Luzern', 47.0494, 8.3007, 'https://www.wirtshaus-galliker.ch',
  3, null, 8, '1, 6, 7, 8',
  array['autumn','winter'],
  array['romantic','reservation','hidden-gem','splurge','evening','rainy-day'],
  1
);
