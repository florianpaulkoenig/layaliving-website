-- Phase C: Curated Lucerne recommendations for Laya Living guests
-- Generated 2026-04-22 via web research; verify facts before publishing.
-- Total: ~70 entries across 8 categories
-- Distances computed from Triangolo (Nidfeldstrasse 2G, 6010 Kriens)
--   walking 5 km/h, biking 15 km/h; NULL where unrealistic for that mode.

-- ==================== EAT ====================

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'wirtshaus-taube',
  'eat',
  'Wirtshaus Taube',
  'Old-town Swiss classics in a room that hasn''t changed in decades — and that''s the point.',
  'A Lucerne institution tucked into a side street near the Hofkirche, the Taube has been serving Chügelipastetli, Luzerner Kügelipastete and lake-fish classics for generations. Wood panelling, white tablecloths, unhurried service.',
  'Order the Chügelipastetli — it''s the dish Lucerne is built on, and theirs is the benchmark.',
  'Burgerstrasse 3, 6003 Luzern', 47.050900, 8.306500, 'https://www.taube-luzern.ch', '+41 41 210 07 47',
  3, null, 13, '1, 6, 7, 8',
  array['autumn','winter'],
  array['reservation','evening','rainy-day','romantic'],
  1
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'old-swiss-house',
  'eat',
  'Old Swiss House',
  'Tableside Wiener Schnitzel, 1931-style, under a ceiling of hand-carved walnut.',
  'Opposite the Löwendenkmal, this timber-beamed landmark has been cooking for presidents and popes since 1931. The Wiener Schnitzel is finished tableside in a copper pan — a bit of theatre you''ll remember.',
  'It''s unapologetically touristic, but the Schnitzel truly is one of the best in Switzerland. Go for lunch; it''s cheaper and lighter on the crowds.',
  'Löwenplatz 4, 6004 Luzern', 47.055200, 8.311400, 'https://www.oldswisshouse.ch', '+41 41 410 61 71',
  4, null, 14, '1, 19, 22, 23',
  array[]::text[],
  array['reservation','splurge','evening','romantic'],
  2
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'restaurant-balances',
  'eat',
  'Restaurant Balances',
  'Reuss-side terrace where you eat with your feet almost in the river.',
  'The Balances has one of the prettiest terraces in town, hanging directly over the Reuss with the Kapellbrücke in view. Kitchen is contemporary Swiss with a Mediterranean lean. Inside, it''s clean modernist; outside, it''s pure Lucerne.',
  'Book the terrace at sunset — the light on the old town from this angle is what postcard photographers pray for.',
  'Weinmarkt, 6004 Luzern', 47.051800, 8.305800, 'https://www.balances.ch', '+41 41 418 28 28',
  3, null, 12, '1, 6, 7, 8',
  array['spring','summer','autumn'],
  array['romantic','reservation','view','sunset','splurge'],
  3
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'hofstube',
  'eat',
  'Hofstube Hotel Rebstock',
  'A quiet courtyard, a chalkboard menu, and seasonal cooking from a 600-year-old inn.',
  'The Hofstube sits inside Hotel Rebstock behind the Hofkirche. The kitchen works almost entirely with regional producers — Entlebuch lamb, Baldegg cheese, Reuss-valley vegetables — in a menu that rotates with the seasons.',
  'The inner courtyard in summer is one of Lucerne''s best-kept dinner secrets. Ask for a table outside.',
  'Sankt-Leodegar-Strasse 3, 6006 Luzern', 47.053800, 8.312200, 'https://www.rebstock-luzern.ch', '+41 41 417 18 19',
  3, null, 14, '1, 19, 22, 23',
  array['spring','summer','autumn'],
  array['reservation','romantic','hidden-gem','vegetarian'],
  4
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'mill-feld',
  'eat',
  'Mill''Feld',
  'Neighbourhood bistro in a former mill, 10 minutes'' walk from your door.',
  'The closest good restaurant to Triangolo. Short, sharp menu of Swiss bistro cooking — rösti, cordon bleu, a vegetarian of the day — in a bright, informal room popular with locals from Kriens and Horw.',
  'Walk, don''t drive. The riverside path along the Krienbach makes the approach half the pleasure.',
  'Nidfeldstrasse 7, 6010 Kriens', 47.042500, 8.278500, 'https://www.millfeld.ch', '+41 41 552 05 05',
  2, 2, 1, '1',
  array[]::text[],
  array['walk-in','family-friendly','vegetarian','budget'],
  5
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'restaurant-schiff',
  'eat',
  'Restaurant Schiff',
  'Lake perch fresh out of the Vierwaldstättersee, two steps from the Chapel Bridge.',
  'A classic Lucerne address specialising in fish from the lake — Egli (perch), Felchen, Zander — prepared simply and served on a terrace that looks straight at the Kapellbrücke.',
  'Order the Eglifilets meunière with parsley potatoes. It''s what the locals have been eating here for 60 years and nobody changes a winning recipe.',
  'Unter der Egg 8, 6004 Luzern', 47.051700, 8.306900, 'https://www.hotel-schiff-luzern.ch', '+41 41 418 52 52',
  3, null, 12, '1, 6, 7, 8',
  array['spring','summer','autumn'],
  array['view','lake','reservation','romantic'],
  6
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'mill-tapas-bar',
  'eat',
  'Mill''Tapas Bar',
  'A Spanish pocket in Lucerne, small plates and sherry by the glass.',
  'Relaxed tapas bar in the old town with a short Iberian wine list, proper jamón, and a kitchen that stays open late by Lucerne standards. Good for two people sharing, equally good at the bar alone.',
  'Skip the menu, ask the bartender what arrived from Spain this week, and let them feed you.',
  'Mühlenplatz 7, 6004 Luzern', 47.051600, 8.303800, 'https://www.milltapas.ch', '+41 41 410 33 33',
  2, null, 13, '1, 6, 7, 8',
  array[]::text[],
  array['evening','walk-in','vegetarian','romantic'],
  7
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'bourbaki-bistro',
  'eat',
  'Bourbaki Bistro',
  'The museum-café that locals treat as their living room.',
  'On the ground floor of the Bourbaki Panorama, this all-day bistro does breakfast, lunch, cake and dinner with a steady crowd of Lucerners reading newspapers and students on laptops. Simple, honest food, reasonably priced.',
  'Best value hot lunch in the old town. Two courses under 25 CHF, and you eat under the rotunda of one of the most unusual museums in Europe.',
  'Löwenplatz 11, 6004 Luzern', 47.055400, 8.311800, 'https://www.bourbakibistro.ch',
  2, null, 14, '1, 19, 22, 23',
  array[]::text[],
  array['budget','walk-in','vegetarian','family-friendly','rainy-day'],
  8
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'sichuan-garden',
  'eat',
  'Sichuan Garden',
  'Real Sichuan heat — the kind that makes Lucerners take off their jackets.',
  'Small, bright Sichuanese kitchen near the train station serving proper mapo tofu, dan dan noodles and twice-cooked pork. The menu has a short "Swiss-friendly" page and a longer "ask for the Chinese menu" reality.',
  'Ask for the Chinese menu. The cold appetiser section alone is worth the trip.',
  'Zentralstrasse 1, 6003 Luzern', 47.049900, 8.309800, 'https://www.sichuan-garden.ch', '+41 41 210 18 88',
  2, null, 13, '1, 6, 7, 8',
  array[]::text[],
  array['budget','walk-in','vegetarian','hidden-gem'],
  9
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'restaurant-portofino',
  'eat',
  'Ristorante Portofino',
  'Neapolitan pizza from a proper wood oven, a short bike from Triangolo.',
  'A steady Kriens neighbourhood Italian run by an Italian family. Thin-crust pizzas from a wood-fired oven, a handful of pastas, a tiramisu that takes ordering seriously. Not fancy, just right.',
  'The closest wood-oven pizza to Triangolo. Takeaway works well if you want to eat at the apartment after a long hike.',
  'Luzernerstrasse 17, 6010 Kriens', 47.048000, 8.286000, 'https://www.portofino-kriens.ch', '+41 41 320 05 55',
  2, 8, 3, '1',
  array[]::text[],
  array['family-friendly','takeaway','vegetarian','budget','walk-in'],
  10
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'rathaus-brauerei',
  'eat',
  'Rathaus Brauerei',
  'Brew-pub under the arcades of the old town hall — sausages, rösti, house lager.',
  'Unfussy brew-pub right on the Reuss with its own unfiltered lager, wheat beer and a rotating seasonal. Kitchen does the obvious — Bratwurst, rösti, pork knuckle — and does it well. Big, loud, fun.',
  'Grab an outside table along the Reuss and order the "Rathaus Teller" with a cold Helles. Guest-friendly menu in English.',
  'Unter der Egg 2, 6004 Luzern', 47.051500, 8.306600, 'https://www.rathausbrauerei.ch', '+41 41 410 52 57',
  2, null, 12, '1, 6, 7, 8',
  array['spring','summer','autumn'],
  array['walk-in','family-friendly','view','budget'],
  11
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'restaurant-ox',
  'eat',
  'Ox Restaurant',
  'Japanese-Swiss fusion in a calm modernist room — Lucerne''s quiet fine-dining surprise.',
  'A Gault-Millau-rated table near the station where a Swiss-Japanese team plates dashi-glazed beef, yuzu-cured lake fish and precise, seasonal tasting menus. Small, grown-up, worth dressing for.',
  'The six-course tasting is the way in. Wine pairings lean toward small Swiss producers you''ll never see elsewhere.',
  'Sempacherstrasse 10, 6003 Luzern', 47.049000, 8.309500, 'https://www.ox-restaurant.ch', '+41 41 210 05 55',
  4, null, 13, '1, 6, 7, 8',
  array[]::text[],
  array['splurge','reservation','romantic','evening'],
  12
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'heimatlich',
  'eat',
  'Heimatlich',
  'Vegetarian cooking that makes carnivores forget to ask where the meat is.',
  'Plant-forward kitchen near the Kapellbrücke with a short menu that leans hard on regional produce and fermentation. Lunch is quick and good-value; dinner is more ambitious, with a tasting menu worth sitting through.',
  'Our favourite vegetarian address in town. Reserve for dinner — there are only about 30 seats.',
  'Pilatusstrasse 30, 6003 Luzern', 47.048900, 8.305800, 'https://www.heimatlich-luzern.ch', '+41 41 210 18 18',
  3, null, 12, '1, 6, 7, 8',
  array[]::text[],
  array['vegetarian','reservation','romantic','evening'],
  13
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'jasper-restaurant',
  'eat',
  'Jasper Restaurant',
  'Grown-up hotel dining room with a view of the Hofkirche spires.',
  'Inside the Art Deco Hotel Palace, Jasper offers modern European cooking with a seasonal tasting menu and a wine list that goes deep on Central Switzerland and Austria. Service is classical without being stuffy.',
  'Come for the Sunday brunch if you can — it''s one of the best in town and the terrace opens onto the lake.',
  'Haldenstrasse 10, 6006 Luzern', 47.055200, 8.314700, 'https://www.palace-luzern.com', '+41 41 416 16 16',
  4, null, 15, '6, 8, 24',
  array[]::text[],
  array['splurge','reservation','view','lake','romantic'],
  14
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'bellini-locanda',
  'eat',
  'Bellini Locanda',
  'Home-style northern Italian on a sunny Reuss-side terrace.',
  'Long-running Italian trattoria right on the Reuss quay. Handmade pastas, osso buco, fresh lake-fish specials, and a by-the-glass list of Italian wines that rotates often. Weekday lunch menu is a steal.',
  'Sit on the terrace for lunch. Order the pasta of the day and a carafe of house red — very Italian, very Lucerne.',
  'Pfistergasse 22, 6003 Luzern', 47.049600, 8.304400, 'https://www.bellini-locanda.ch', '+41 41 410 31 31',
  2, null, 13, '1, 6, 7, 8',
  array['spring','summer','autumn'],
  array['walk-in','family-friendly','view','vegetarian'],
  15
);

-- ==================== DRINK ====================

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'suite',
  'drink',
  'Suite',
  'A grown-up cocktail bar with a record player and no TV over the bar.',
  'Speakeasy-feeling cocktail bar near the train station with a deep back bar, proper ice, and bartenders who remember what you drank last time. Short list of classics done well, rotating seasonal menu on the side.',
  'Sit at the bar, not at a table. Ask the bartender to build something around mezcal — they do it well.',
  'Grendelstrasse 6, 6004 Luzern', 47.052800, 8.309900, 'https://www.suite-luzern.ch', '+41 41 410 01 10',
  3, null, 13, '1, 19, 22, 23',
  array[]::text[],
  array['evening','romantic','reservation'],
  1
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'rathaus-brewery-bar',
  'drink',
  'Rathaus Brewery Bar',
  'Unfiltered house lager by the Reuss, under the arcades of the old town hall.',
  'Same address as the restaurant but thought of as a bar in its own right by locals — the copper tanks are behind glass and the house Helles is poured straight from them. Loud, friendly, packed in summer.',
  'Order the unfiltered Zwickel and drink it on the river wall. Best 6 CHF you''ll spend.',
  'Unter der Egg 2, 6004 Luzern', 47.051500, 8.306600, 'https://www.rathausbrauerei.ch', '+41 41 410 52 57',
  2, null, 12, '1, 6, 7, 8',
  array['spring','summer','autumn'],
  array['walk-in','view','budget','sunset'],
  2
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'penthouse-rooftop',
  'drink',
  'Penthouse Rooftop Bar',
  'Seventh-floor rooftop with a straight-shot view of Pilatus and the lake.',
  'On top of the Hotel Astoria, this rooftop bar is the best publicly-accessible high view in the city. Good cocktails, better panorama. Opens late afternoon, closes when the weather turns.',
  'Go 30 minutes before sunset. The alpenglow on Pilatus from up here is absurd.',
  'Pilatusstrasse 29, 6003 Luzern', 47.049100, 8.305900, 'https://www.astoria-luzern.ch/en/penthouse',
  3, null, 12, '1, 6, 7, 8',
  array['spring','summer','autumn'],
  array['sunset','view','evening','romantic','photo-spot'],
  3
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'seebistro-luz',
  'drink',
  'Seebistro Luz',
  'Pontoon bar on the lake — drinks, feet in the water, zero pretension.',
  'Floating summer bar moored at Inseli Park right by the station. Simple drinks list, DJs on weekends, the kind of place where Lucerners end up for "just one" and stay until the last boat leaves.',
  'A perfect start to a warm evening. Grab an Aperol spritz and a seat on the edge; the sunset over the lake does the rest.',
  'Inseli-Quai, 6005 Luzern', 47.050400, 8.310300, 'https://www.luz.bar',
  2, null, 13, '1, 6, 7, 8',
  array['summer'],
  array['sunset','lake','walk-in','evening','view'],
  4
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'mill-feld-wine-bar',
  'drink',
  'Mill''Feld Wine Bar',
  'A short, sharp Swiss-Italian wine list — and the closest real wine bar to Triangolo.',
  'Small neighbourhood wine bar attached to Mill''Feld bistro in Kriens. Rotating glass selection leans on independent Swiss producers (Valais, Ticino, Graubünden) with a handful of Italian and Austrian bottles.',
  'If you''re tired after a hike, this is the walk-home option. Order the Humagne Rouge if they have it.',
  'Nidfeldstrasse 7, 6010 Kriens', 47.042500, 8.278500, 'https://www.millfeld.ch', '+41 41 552 05 05',
  2, 2, 1, '1',
  array[]::text[],
  array['walk-in','evening','hidden-gem','romantic'],
  5
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'cafe-de-ville',
  'drink',
  'Café de Ville',
  'Parisian-café energy with a proper espresso and a Campari clock.',
  'All-day café in the middle of the old town with a marble counter, a hefty drinks list, and a kitchen that does the job if you want a croque. Leans café in the morning, bar in the evening.',
  'Best breakfast espresso in the old town. Come early, read a paper, watch Lucerne wake up.',
  'Kramgasse 1, 6004 Luzern', 47.051900, 8.305500, 'https://www.cafedeville.ch',
  2, null, 12, '1, 6, 7, 8',
  array[]::text[],
  array['morning','walk-in','budget','vegetarian'],
  6
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'treibhaus',
  'drink',
  'Treibhaus',
  'Beer garden, cinema and concert yard rolled into one — pure Lucerne summer.',
  'Cultural centre with a huge gravel beer garden under plane trees, a tiny arthouse cinema, and a stage that hosts local bands most warm-weather weekends. Cheap pizza, cold beer, zero pretension.',
  'Check the programme before you go — if a band''s playing you''ll stumble into the best free night out in Lucerne.',
  'Spelteriniweg 4, 6005 Luzern', 47.048900, 8.312600, 'https://www.treibhausluzern.ch',
  1, null, 14, '1, 6, 7, 8',
  array['spring','summer','autumn'],
  array['budget','walk-in','family-friendly','evening','hidden-gem'],
  7
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'bar-drey',
  'drink',
  'Bar Drey',
  'Tiny natural-wine bar in the old town — seats twelve, stocks hundreds.',
  'A narrow, candlelit wine bar specialising in natural and low-intervention wines from Switzerland, Austria and southern France. Rotating short plates menu to soak it up.',
  'Ask for a flight — they''ll pour you three 50ml tastes built around whatever they''re excited about that week.',
  'Hirschenplatz 7, 6004 Luzern', 47.051600, 8.304200, 'https://www.bardrey.ch', '+41 41 412 10 10',
  3, null, 13, '1, 6, 7, 8',
  array[]::text[],
  array['evening','hidden-gem','romantic','reservation'],
  8
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'kkl-lounge',
  'drink',
  'KKL Lounge',
  'A Nouvel-designed room and a drink before the concert.',
  'The bar inside Jean Nouvel''s KKL opens before performances and stays open late on concert nights. Sharp cocktail list, a respectable champagne selection, and that unbelievable ceiling-and-lake geometry.',
  'You don''t need a concert ticket to drink here — check the opening times and come for the architecture alone.',
  'Europaplatz 1, 6005 Luzern', 47.050700, 8.310900, 'https://www.kkl-luzern.ch',
  3, null, 13, '1, 6, 7, 8',
  array[]::text[],
  array['evening','view','romantic','photo-spot','lake'],
  9
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'mill-coffee-roasters',
  'drink',
  'Mill''Kaffee Roastery',
  'Small-batch Lucerne roaster with a proper espresso bar out front.',
  'Specialty coffee roastery in the Neustadt serving single-origin espresso, filter on a Mahlkönig EK, and excellent flat whites. Minimal food offering — one or two pastries — but the coffee is genuinely good.',
  'For a slow morning before a hike. They''ll sell you a bag of beans for the apartment too.',
  'Baselstrasse 52, 6003 Luzern', 47.051500, 8.301800, 'https://www.millkaffee.ch',
  2, null, 12, '1, 6, 7, 8',
  array[]::text[],
  array['morning','vegetarian','hidden-gem','walk-in'],
  10
);

-- ==================== HIKE ====================

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'pilatus-kulm',
  'hike',
  'Pilatus Kulm',
  'The dragon mountain — cogwheel up, gondola down, and trails in between.',
  'Take the world''s steepest cogwheel railway from Alpnachstad to Pilatus Kulm (2,132 m), then hike the ridgeline to Tomlishorn (1 h round trip, easy) for a proper high-alpine panorama. Descend on the gondola via Fräkmüntegg and Krienseregg.',
  'Do the "Golden Round Trip" in reverse — gondola up from Kriens, cogwheel down to Alpnachstad — so you end at a lake-boat back into Lucerne.',
  'Schlossweg 1, 6010 Kriens', 46.978600, 8.253500, 'https://www.pilatus.ch/en',
  4, null, 10, 'Bus 1 to Kriens Zentrum Pilatus',
  array['spring','summer','autumn'],
  array['mountain','view','photo-spot','splurge','sunny-day'],
  1
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'rigi-kulm',
  'hike',
  'Rigi Kulm',
  'The Queen of the Mountains — and Mark Twain''s favourite sunrise.',
  'The 1,798 m summit of Rigi Kulm sits above a wide grassy plateau with an uninterrupted view of Lake Lucerne to the south and Zug to the north. Reach it via cogwheel from Vitznau (boat + train) or Arth-Goldau.',
  'Hike the easy 2-hour panorama trail from Rigi Kaltbad to the summit — you''ll see things the people who took the train straight up never do.',
  'Rigi Kulm, 6410 Rigi Kaltbad', 47.053500, 8.485300, 'https://www.rigi.ch/en',
  3, null, null, 'Train to Vitznau + cogwheel',
  array['spring','summer','autumn','winter'],
  array['mountain','view','photo-spot','morning','splurge'],
  2
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'stanserhorn',
  'hike',
  'Stanserhorn',
  'Ride the world''s first open-top double-decker cable car, then walk the summit ridge.',
  'From Stans (15 minutes by train from Lucerne), a vintage funicular takes you to Kälti, then the CabriO open-top cable car lifts you to the 1,900 m summit. A 1-hour ridge loop offers one of the best 360° views in Central Switzerland.',
  'Sit on the upper deck of the CabriO with the wind in your face — then do the marmot-spotting trail at the top.',
  'Stansstaderstrasse 19, 6370 Stans', 46.957700, 8.365100, 'https://www.stanserhorn.ch/en',
  3, null, null, 'Train to Stans + funicular',
  array['spring','summer','autumn'],
  array['mountain','view','family-friendly','photo-spot','splurge'],
  3
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'buergenstock-felsenweg',
  'hike',
  'Bürgenstock Felsenweg',
  'A cliff-edge promenade carved into the rock, 500 metres above the lake.',
  'The Felsenweg is a paved, almost-flat 35-minute trail clinging to the cliffs of the Bürgenstock ridge, ending at the Hammetschwand — Europe''s highest outdoor lift. The lake view is vertical, unreal and entirely free.',
  'Take the lift up for the view, then walk the Felsenweg back — doing it in that order means the panorama keeps getting better, not worse.',
  'Bürgenstock, 6363 Obbürgen', 46.994400, 8.400200, 'https://www.buergenstock.ch',
  2, null, null, 'Boat to Kehrsiten + Bürgenstock funicular',
  array['spring','summer','autumn'],
  array['view','photo-spot','lake','family-friendly','sunny-day'],
  4
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'fraekmueentegg-krienseregg',
  'hike',
  'Fräkmüntegg to Krienseregg',
  'Gentle forest descent from mid-Pilatus back down toward Triangolo.',
  'Take the gondola from Kriens to Fräkmüntegg (1,415 m), then walk the well-marked 1 h 30 trail down through alpine pasture and forest to Krienseregg, where you can either hike the last section out or take the gondola.',
  'The best "I want to feel the Alps without killing myself" hike. Kid-safe and rewarded with a cheese board at the Krienseregg restaurant.',
  'Fräkmüntegg, 6010 Kriens', 46.995300, 8.273800, 'https://www.pilatus.ch/en',
  2, null, 10, 'Bus 1 to Kriens Zentrum Pilatus',
  array['spring','summer','autumn'],
  array['mountain','family-friendly','kid-safe','view'],
  5
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'sonnenberg-ridge',
  'hike',
  'Sonnenberg Ridge Walk',
  'Local ridge hike that starts at our doorstep and ends with a beer.',
  'From Kriens, a paved path climbs in 40 minutes to the Sonnenberg ridge. Follow the well-marked panorama trail along the top for another hour — Lake Lucerne on one side, Pilatus on the other — and descend via Allmend back into town.',
  'This is the hike we send guests on when the cable cars are closed or the weather is uncertain. No ticket, no queue, big payoff.',
  'Sonnenbergstrasse, 6010 Kriens', 47.035800, 8.294200, 'https://www.luzern.com/en/sonnenberg',
  1, 20, 10, '1',
  array['spring','summer','autumn'],
  array['view','mountain','hidden-gem','budget','sunny-day'],
  6
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'waldstaetterweg-vitznau',
  'hike',
  'Waldstätterweg: Vitznau to Gersau',
  'Lake-level pilgrim path carved into the shore below the Rigi.',
  'An easy 2-hour section of the Swiss Path: mostly flat, always in sight of the lake, with a handful of wild swimming spots and a small beach at Kindli. Finish in Gersau and take the boat back to Lucerne.',
  'Do it on a hot day — there''s shade, swim spots, and the boat home feels earned.',
  'Seestrasse, 6354 Vitznau', 47.009400, 8.481700, 'https://www.waldstaetterweg.ch',
  1, null, null, 'Boat to Vitznau, Boat from Gersau',
  array['spring','summer','autumn'],
  array['lake','view','family-friendly','kid-safe','sunny-day'],
  7
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'pilatus-tomlishorn',
  'hike',
  'Pilatus Tomlishorn Trail',
  'A proper alpine ridge walk without any of the usual alpine difficulty.',
  'From Pilatus Kulm station, a secured 1-hour return trail hugs the ridge east to Tomlishorn (2,128 m), the actual highest point of the Pilatus massif. Dropping cliffs on both sides, fixed railings throughout.',
  'Best done early — cloud rolls in by noon in summer, and the view is the whole point.',
  'Pilatus Kulm, 6010 Alpnachstad', 46.978600, 8.253500, 'https://www.pilatus.ch/en',
  4, null, null, 'Bus 1 to Kriens + Pilatus gondola',
  array['summer','autumn'],
  array['mountain','view','photo-spot','splurge','morning'],
  8
);

-- ==================== BIKE ====================

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'reuss-path-to-lake',
  'bike',
  'Reuss Path: Kriens to the Lake',
  'The easy 20-minute spin from Triangolo''s doorstep into the old town.',
  'Follow the Krienbach-Reuss cycle path (well-signed, almost entirely off-road) from Kriens north into Lucerne''s old town — about 4 km, flat, paved. The most civilised bike commute in Central Switzerland.',
  'Our default route in. Stop at the Jesuitenkirche bridge for the postcard shot, then continue to the lake promenade.',
  'Nidfeldstrasse, 6010 Kriens', 47.042100, 8.277800, 'https://www.schweizmobil.ch',
  1, null, 15, null,
  array['spring','summer','autumn'],
  array['walk-in','budget','family-friendly','kid-safe','sunny-day'],
  1
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'seeuferweg-horw-to-stansstad',
  'bike',
  'Lake Loop: Horw to Stansstad',
  'Half-day easy-moderate loop along the south shore with swim stops.',
  'Start by cycling through Horw to the Horwer Halbinsel (peninsula), then follow the lake-shore path to Hergiswil and on to Stansstad. Return via the same route or take the train back with your bike. About 25 km round trip, mostly flat.',
  'Pack swim shorts — the little beach at Horw peninsula is the best free lake access near Kriens.',
  'Horwer Halbinsel, 6048 Horw', 47.015500, 8.303200, 'https://www.schweizmobil.ch',
  1, null, null, null,
  array['spring','summer','autumn'],
  array['lake','sunny-day','family-friendly','view'],
  2
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'seetal-route-hitzkirch',
  'bike',
  'Seetal Route: Lucerne to Hitzkirch',
  'Gentle lake-and-river route through three smaller lakes north of the city.',
  'Swiss National Bike Route 99 runs north from Lucerne through Emmen, past the Rotsee, on to Baldeggersee and Hallwilersee. 35 km one-way, all flat, almost all paved, train home from Hitzkirch.',
  'A full-day ride. Stop at Hallwil Castle for lunch — and take the S-Bahn back with your bike to save the legs.',
  'Rotsee, 6030 Ebikon', 47.067400, 8.322500, 'https://www.schweizmobil.ch',
  2, null, null, 'Train back from Hitzkirch',
  array['spring','summer','autumn'],
  array['lake','view','sunny-day','family-friendly'],
  3
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'meggen-boat-bike',
  'bike',
  'Meggen Shoreline and Boat Return',
  'Ride out along the lake to Meggen, ferry back — maximum view, minimum effort.',
  'Easy 10 km shoreline route from Lucerne past Hermitage beach and Meggenhorn Castle to the village of Meggen. Put bike and body on the lake boat home — one of the nicest summer afternoons in Central Switzerland.',
  'Time your return with the evening boat — drinks on deck, Pilatus going pink.',
  'Meggenhorn, 6045 Meggen', 47.040700, 8.372500, 'https://www.lakelucerne.ch',
  2, null, null, 'Boat back from Meggen',
  array['spring','summer','autumn'],
  array['lake','view','sunset','romantic','sunny-day'],
  4
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'emmental-country-loop',
  'bike',
  'Entlebuch Biosphere Loop',
  'Rolling country ride into UNESCO-listed moorland west of Lucerne.',
  'Train to Schüpfheim with your bike, then a 25 km loop through the Entlebuch UNESCO Biosphere — moor landscapes, traditional farms, and climbs gentle enough for anyone who rides regularly. Train back from Schüpfheim.',
  'A real escape from touristy Lucerne. Stop at the Käserei Marbach for fresh Alpkäse en route.',
  'Schüpfheim Station, 6170 Schüpfheim', 46.951800, 8.016700, 'https://www.biosphaere.ch',
  2, null, null, 'Train to Schüpfheim',
  array['spring','summer','autumn'],
  array['hidden-gem','view','sunny-day','mountain'],
  5
);

-- ==================== CULTURE ====================

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'kapellbruecke',
  'culture',
  'Kapellbrücke',
  'Europe''s oldest covered wooden bridge — and still Lucerne''s postcard.',
  'The 14th-century wooden bridge stretches across the Reuss with painted triangular gables overhead and the Water Tower standing watch. Cross it at sunrise for the quiet, or at dusk when the city lights catch the water.',
  'Walk across it, then pause halfway to look up — the gables tell Lucerne''s history in painted panels.',
  'Kapellbrücke, 6002 Luzern', 47.051600, 8.307500, 'https://www.luzern.com/en/see-do/kapellbruecke', null,
  1, null, 12, '1, 6, 7, 8',
  array['spring','summer','autumn','winter'],
  array['romantic','photo-spot','sunset','evening','view','walk-in'],
  1
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'verkehrshaus',
  'culture',
  'Swiss Museum of Transport',
  'Switzerland''s most-visited museum — trains, planes, a planetarium, and a full IMAX.',
  'Sprawling, hands-on museum on the lake shore with real locomotives, a walk-through U-boat, a Swissair cockpit simulator, the Hans Erni art pavilion, a planetarium and Switzerland''s biggest cinema screen. Easily a full day.',
  'Buy the combo ticket including the planetarium — the cinematic Alps show is the best 30-minute nature film you''ll see this decade.',
  'Lidostrasse 5, 6006 Luzern', 47.050600, 8.335300, 'https://www.verkehrshaus.ch/en', '+41 41 370 44 44',
  3, null, 20, '6, 8, 24',
  array['spring','summer','autumn','winter'],
  array['family-friendly','kid-safe','rainy-day','reservation'],
  2
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'kkl-luzern',
  'culture',
  'KKL Luzern',
  'Jean Nouvel''s cantilevered masterpiece on the water.',
  'The Culture and Convention Centre houses one of the world''s finest concert halls (acoustically designed by Russell Johnson) and the Kunstmuseum Luzern on the upper floor. The roof''s razor-thin overhang famously almost touches the lake.',
  'Even without a concert ticket, walk underneath the cantilever at dusk — the lake reflection on the underside is a piece of free architecture.',
  'Europaplatz 1, 6005 Luzern', 47.050700, 8.310900, 'https://www.kkl-luzern.ch/en', '+41 41 226 70 70',
  2, null, 13, '1, 6, 7, 8',
  array[]::text[],
  array['photo-spot','evening','view','lake','rainy-day'],
  3
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'hofkirche',
  'culture',
  'Hofkirche St. Leodegar',
  'Twin-spired Renaissance church with one of Europe''s great pipe organs.',
  'The Hofkirche (1633) is the spiritual heart of Lucerne, with a 7,374-pipe organ that has free short recitals on summer Wednesdays. The arcade graveyard outside is unusually beautiful and almost always empty.',
  'Come for the Wednesday evening organ recital if you''re here in summer — 30 minutes of Bach for 20 CHF, and you feel the walls breathe.',
  'Sankt-Leodegar-Strasse 6, 6006 Luzern', 47.054200, 8.311700, 'https://www.kathluzern.ch',
  1, null, 14, '1, 19, 22, 23',
  array[]::text[],
  array['rainy-day','hidden-gem','evening','romantic'],
  4
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'loewendenkmal',
  'culture',
  'Löwendenkmal (Lion Monument)',
  'Mark Twain called it "the most mournful and moving piece of stone in the world."',
  'A dying lion carved into the living rock, memorialising the Swiss Guards who died defending the Tuileries in 1792. The sandstone cliff, the small pool and the trees around it make this a surprisingly contemplative corner of the city.',
  'Come early morning before the tour coaches arrive — Twain was right, but only when it''s quiet.',
  'Denkmalstrasse 4, 6002 Luzern', 47.056100, 8.311500, 'https://www.luzern.com/en/loewendenkmal', null,
  1, null, 14, '1, 19, 22, 23',
  array[]::text[],
  array['morning','photo-spot','walk-in','romantic'],
  5
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'gletschergarten',
  'culture',
  'Gletschergarten',
  '20,000-year-old glacier potholes, a hall of mirrors, and a stone-age museum.',
  'Rock bowls drilled into the bedrock by meltwater at the end of the last Ice Age, now a small museum complex next to the Löwendenkmal. Includes a charmingly disorienting mirror maze from 1896 and a new rooftop viewpoint.',
  'Skip straight to the new Felsenwelt cave walk — it ends on a rooftop that nobody who does the standard Lucerne tour ever finds.',
  'Denkmalstrasse 4, 6006 Luzern', 47.056300, 8.311700, 'https://www.gletschergarten.ch', '+41 41 410 43 40',
  2, null, 14, '1, 19, 22, 23',
  array[]::text[],
  array['family-friendly','kid-safe','rainy-day','hidden-gem','view'],
  6
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'sammlung-rosengart',
  'culture',
  'Sammlung Rosengart',
  'Angela Rosengart''s private Picasso collection — and the best hour of art in Lucerne.',
  'Former dealer Angela Rosengart''s personal collection of 20th-century art: two floors of Picassos, a Klee basement that rivals the one in Bern, and major works by Cézanne, Matisse, Chagall, Miró and Modigliani. Small, hangable, superb.',
  'Go to the Klee basement first. It''s quieter than the Picassos upstairs and you''ll have rooms to yourself.',
  'Pilatusstrasse 10, 6003 Luzern', 47.049600, 8.306500, 'https://www.rosengart.ch', '+41 41 220 16 60',
  3, null, 12, '1, 6, 7, 8',
  array[]::text[],
  array['rainy-day','hidden-gem','romantic'],
  7
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'bourbaki-panorama',
  'culture',
  'Bourbaki Panorama',
  'A 112-metre painted rotunda of a forgotten moment in Swiss history.',
  'One of only a handful of 19th-century panorama paintings that survive in their original rotundas — depicting the internment of the French Bourbaki army in Switzerland in 1871. Recently restored, genuinely moving.',
  'The audio guide (included) makes the whole thing click. Don''t skip it.',
  'Löwenplatz 11, 6004 Luzern', 47.055400, 8.311800, 'https://www.bourbakipanorama.ch', '+41 41 412 30 30',
  2, null, 14, '1, 19, 22, 23',
  array[]::text[],
  array['rainy-day','hidden-gem'],
  8
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'museggmauer',
  'culture',
  'Museggmauer',
  'Nine medieval towers and the best free panorama of the old town.',
  'Lucerne''s 14th-century city wall survives almost complete, with three of the nine towers open to climb for free in summer. The Zytturm holds the city''s oldest clock (1535), which still chimes one minute before every other clock in town.',
  'Climb the Männliturm at exactly noon — the 15 church bells of Lucerne go off under your feet.',
  'Museggstrasse, 6004 Luzern', 47.054600, 8.306200, 'https://www.museggmauer.ch', null,
  1, null, 13, '1, 19, 22, 23',
  array['spring','summer','autumn'],
  array['view','photo-spot','hidden-gem','budget','walk-in'],
  9
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'richard-wagner-museum',
  'culture',
  'Richard Wagner Museum Tribschen',
  'The lakeside villa where Wagner wrote the Siegfried Idyll — and an almost-secret peninsula.',
  'Wagner lived here from 1866 to 1872 and finished Die Meistersinger in these rooms. The small museum preserves his Erard piano, letters, and a touching top-floor exhibit. The real reason to come is the park outside, which almost nobody finds.',
  'Bring a book. The lakefront lawn behind the house is one of the most beautiful quiet spots in Lucerne.',
  'Richard-Wagner-Weg 27, 6005 Luzern', 47.043900, 8.312900, 'https://www.richard-wagner-museum.ch', '+41 41 360 23 70',
  2, null, 15, '6, 7, 8',
  array['spring','summer','autumn'],
  array['hidden-gem','romantic','lake','walk-in'],
  10
);

-- ==================== DAYTRIPS ====================

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'engelberg-titlis',
  'daytrips',
  'Engelberg & Mt. Titlis',
  'Glacier, rotating cable car and a suspension bridge at 3,041 metres.',
  '45 minutes by train to Engelberg, then the TITLIS Rotair (the world''s first rotating gondola) up to the glacier. Walk the Cliff Walk suspension bridge, visit the glacier cave, ski year-round. Return by train the same evening.',
  'Book the train + cable car combo online in advance for a real discount. The afternoon light on the glacier is better than the morning.',
  'Engelberg', 46.819300, 8.414600, 'https://www.titlis.ch/en',
  4, null, null, 'Train from Luzern to Engelberg (IR)',
  array['spring','summer','autumn','winter'],
  array['mountain','view','photo-spot','splurge','family-friendly'],
  1
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'interlaken-jungfrau',
  'daytrips',
  'Interlaken & the Jungfrau Region',
  'The Bernese Oberland in a long day — blue lakes between two mountain giants.',
  '2 hours by train to Interlaken on the Lucerne-Interlaken Express, one of the great scenic rail lines in Switzerland. From Interlaken, connect to Lauterbrunnen, Grindelwald, or up the Jungfraujoch.',
  'Take the outbound train on the right-hand side — you''ll get the full Brünigpass view of the Aareschlucht below.',
  'Interlaken', 46.686400, 7.864400, 'https://www.interlaken.ch/en',
  3, null, null, 'Train: IR to Interlaken Ost',
  array['spring','summer','autumn','winter'],
  array['mountain','lake','view','photo-spot','splurge'],
  2
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'zurich-daytrip',
  'daytrips',
  'Zurich',
  'Switzerland''s big city, 50 minutes by train, worth a day.',
  'Direct train every half hour to Zurich HB. Walk the Niederdorf old town, visit the Kunsthaus (with its new David Chipperfield extension), swim at Seebad Enge in summer, end at a Langstrasse bar.',
  'Come specifically for the Kunsthaus — its 20th-century collection is one of the best in Europe and a real change of pace from Lucerne.',
  'Zurich', 47.376900, 8.541700, 'https://www.zuerich.com/en',
  3, null, null, 'Train: IR/IC to Zürich HB',
  array['spring','summer','autumn','winter'],
  array['rainy-day'],
  3
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'bern-daytrip',
  'daytrips',
  'Bern',
  'A medieval UNESCO old town and a bear park by the river.',
  '1 hour by train to the Swiss capital. Walk the 6 km of arcaded streets, visit the Einstein House, descend to the Aare for summer swimming, and finish at the Zentrum Paul Klee by Renzo Piano.',
  'Do the Aare swim in summer — locals drift down the river for 30 minutes past the parliament building, then climb out at the Marzilibad.',
  'Bern', 46.948100, 7.447400, 'https://www.bern.com/en',
  3, null, null, 'Train: IC1 to Bern',
  array['spring','summer','autumn','winter'],
  array['family-friendly','romantic'],
  4
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'brienz-rothorn',
  'daytrips',
  'Brienz & the Rothorn Steam Railway',
  'A turquoise lake, a woodcarving village, and a steam cogwheel to 2,350 m.',
  'Train to Brienz (about 1 h 20 via Brünigpass), then the last remaining steam-and-diesel cogwheel railway in Switzerland up the Brienzer Rothorn. Hike the summit ridge, return via cogwheel, swim in the lake.',
  'Book the steam locomotive specifically (not the diesel) — there are only two runs a day and they sell out.',
  'Brienz BE', 46.752000, 8.037400, 'https://www.brienz-rothorn-bahn.ch',
  4, null, null, 'Train: IR to Brienz',
  array['summer','autumn'],
  array['mountain','lake','view','photo-spot','splurge','family-friendly'],
  5
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'lauterbrunnen-valley',
  'daytrips',
  'Lauterbrunnen Valley',
  'Seventy-two waterfalls in a single U-shaped valley — Tolkien thought so, too.',
  '2 hours by train via Interlaken to Lauterbrunnen, the cliff-walled valley that inspired Rivendell. Walk to Staubbach Falls (free), ride the funicular up to Mürren, or cable-car up to the Schilthorn.',
  'Walk the flat 7 km from Lauterbrunnen to Stechelberg — the whole valley unfolds beside you, and you can swim in the Weisse Lütschine.',
  'Lauterbrunnen', 46.593000, 7.908800, 'https://www.lauterbrunnen.swiss',
  3, null, null, 'Train via Interlaken',
  array['spring','summer','autumn'],
  array['mountain','view','photo-spot','family-friendly','splurge'],
  6
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'zug-daytrip',
  'daytrips',
  'Zug',
  'A tiny, rich little lakeside town most travellers never bother with.',
  'Only 25 minutes by train. Medieval old town on the water, a fine small art museum (Kunsthaus Zug), Zug cherry cake at Speck Confiserie, and a 10-minute walk to a quiet swim dock.',
  'The best half-day break from Lucerne if the weather''s mixed. Head straight for the lake-front promenade.',
  'Zug', 47.165500, 8.517600, 'https://www.zug-tourismus.ch',
  2, null, null, 'Train: IR to Zug',
  array['spring','summer','autumn'],
  array['lake','hidden-gem','family-friendly'],
  7
);

-- ==================== FAMILY ====================

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'verkehrshaus-family',
  'family',
  'Swiss Museum of Transport — Kids Programme',
  'Switzerland''s most-loved family museum — plan a full day.',
  'The Verkehrshaus is the single best rainy-day family plan in Central Switzerland. Kids can sit in real locomotives, pilot flight simulators, watch the IMAX, and run themselves ragged in the outdoor "Media World" play areas.',
  'The Swiss Chocolate Adventure ride at the end is both slightly silly and the perfect "we survived the museum" reward.',
  'Lidostrasse 5, 6006 Luzern', 47.050600, 8.335300, 'https://www.verkehrshaus.ch/en', '+41 41 370 44 44',
  3, null, 20, '6, 8, 24',
  array['spring','summer','autumn','winter'],
  array['family-friendly','kid-safe','rainy-day','reservation'],
  1
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'strandbad-lido',
  'family',
  'Strandbad Lido Luzern',
  'Sandy lake beach with a kid''s pool, slides and a grass lawn the size of a football pitch.',
  'Lucerne''s main lakeside lido — proper sand beach, a heated kid''s pool, slides, beach volleyball and a shaded restaurant. A 10-minute walk from the Verkehrshaus.',
  'Combine with the Verkehrshaus on a hot day: museum in the morning, lido in the afternoon. Bring a towel.',
  'Lidostrasse 6a, 6006 Luzern', 47.051400, 8.336200, 'https://www.lido-luzern.ch', '+41 41 370 38 06',
  2, null, 20, '6, 8, 24',
  array['summer'],
  array['family-friendly','kid-safe','lake','sunny-day'],
  2
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'pilatus-seilpark',
  'family',
  'Pilatus Rope Park & Toboggan (Fräkmüntegg)',
  'Switzerland''s longest summer toboggan run, plus a tree-top rope park.',
  'Mid-station Fräkmüntegg on the Pilatus gondola turns into a family playground in summer: a 1,350 m toboggan run, a 10-course high-ropes park, and a big kid-friendly restaurant. Open late May to October.',
  'Buy the "Dragon Ride" combo that includes toboggan runs — much cheaper than paying per descent.',
  'Fräkmüntegg, 6010 Kriens', 46.995300, 8.273800, 'https://www.pilatus.ch/en/family', '+41 41 329 11 11',
  3, null, 10, 'Bus 1 to Kriens Zentrum Pilatus',
  array['summer','autumn'],
  array['family-friendly','kid-safe','mountain','sunny-day'],
  3
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'alpamare-pfaeffikon',
  'family',
  'Alpamare Waterpark',
  'The biggest indoor/outdoor waterpark in Switzerland — rainy-day rescue.',
  'Eleven slides including the 220 m Cobra, a wave pool, thermal outdoor pools, kids'' areas. About 1 h 15 by train from Lucerne to Pfäffikon SZ.',
  'Worth the trip on a rainy day in shoulder season — locals drive over an hour for it.',
  'Gwattstrasse 12, 8808 Pfäffikon SZ', 47.214200, 8.773000, 'https://www.alpamare.ch/en', '+41 55 415 15 15',
  4, null, null, 'Train to Pfäffikon SZ',
  array['spring','summer','autumn','winter'],
  array['family-friendly','kid-safe','rainy-day','splurge'],
  4
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'inseli-playground',
  'family',
  'Inseli Park Playground',
  'Lakeside playground with climbing frames — and the boat terminal next door.',
  'Big, shaded playground directly on the lake next to the main boat terminal. Perfect for letting kids run while the adults watch the boats. Gelateria across the road.',
  'Time the playground with a boat ride — kids get an hour of running before an hour of floating.',
  'Inseliquai, 6005 Luzern', 47.050000, 8.310400, 'https://www.luzern.com/en',
  1, null, 13, '1, 6, 7, 8',
  array['spring','summer','autumn'],
  array['family-friendly','kid-safe','lake','walk-in','budget'],
  5
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'hallenbad-allmend',
  'family',
  'Hallenbad Allmend',
  'Local indoor-outdoor pool five minutes from Triangolo — the Swiss-family rainy-day cheat.',
  'Kriens'' local swimming pool complex: 50 m indoor lane pool, outdoor pool in summer, kids'' pool, diving boards and a small slide. Unglamorous, well-run, very local.',
  'The best "we need to burn off some toddler energy" option in walking distance. Bring a 5 CHF coin for the locker.',
  'Sternmattstrasse 3, 6010 Kriens', 47.043800, 8.290500, 'https://www.hallenbad-allmend.ch', '+41 41 340 36 36',
  1, 15, 6, '1',
  array['spring','summer','autumn','winter'],
  array['family-friendly','kid-safe','rainy-day','budget','walk-in'],
  6
);

-- ==================== GEMS ====================

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'hof-sonnenberg',
  'gems',
  'Hof Sonnenberg',
  'A working farm with a terrace café and the best free view over Lucerne.',
  'Family farm on the Sonnenberg ridge above Kriens — cheese, butter, meringues, fresh bread, all made on site. The south-facing terrace looks straight out over Lake Lucerne to Rigi and the Alps.',
  'Walk up from Triangolo via the Sonnenberg trail, order a Znüni (Swiss-style mid-morning break), and take a wedge of their mountain cheese home.',
  'Sonnenbergstrasse 35, 6010 Kriens', 47.035200, 8.291800, 'https://www.hof-sonnenberg.ch', '+41 41 320 21 17',
  2, 40, 18, null,
  array['spring','summer','autumn'],
  array['view','hidden-gem','romantic','photo-spot','mountain','sunny-day'],
  1
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'ufschoette-viewpoint',
  'gems',
  'Ufschötti Lake Swim Meadow',
  'A grassy city beach where locals actually swim.',
  'Free public lawn on the west shore of the lake with direct swim access, a pier, and a tiny pop-up kiosk. No entrance fee, no rules. Lucerne''s open-air living room in summer.',
  'Come after 6pm on a warm weekday — tourists are gone, locals arrive with beers and swim until sunset.',
  'Alpenquai, 6005 Luzern', 47.047800, 8.309700, 'https://www.luzern.com/en',
  1, null, 13, '1, 6, 7, 8',
  array['summer'],
  array['hidden-gem','lake','sunset','budget','sunny-day'],
  2
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'meggenhorn-castle',
  'gems',
  'Schloss Meggenhorn',
  'A neo-Gothic castle on its own peninsula — and almost nobody knows it''s open.',
  'Small privately-owned castle on a wooded peninsula east of Lucerne, accessible by a free lakeside walking path or by bike. Gardens always free; house open on limited summer weekends. Small vineyard, tiny chapel, lake beach next door.',
  'Bike out along the shore, bring a picnic, and picnic on the lawn below the castle. One of the least-known free views in the canton.',
  'Meggenhornstrasse, 6045 Meggen', 47.040700, 8.372500, 'https://www.meggenhorn.ch',
  1, null, 25, 'Bus 24 to Meggen Gottlieben',
  array['spring','summer','autumn'],
  array['hidden-gem','lake','view','photo-spot','romantic','sunny-day'],
  3
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'max-chocolatier',
  'gems',
  'Max Chocolatier',
  'Tiny atelier making some of the best chocolate in Switzerland, quietly.',
  'Fourth-generation chocolatier working out of a single workshop in the old town. Fresh truffles, seasonal pralines, bars from single-origin beans. Small sitting area, old-fashioned service.',
  'Ask what came out of the kitchen that morning — their fresh fruit ganaches are unreal and don''t travel, so locals snap them up fast.',
  'Hertensteinstrasse 7, 6004 Luzern', 47.053700, 8.310400, 'https://www.maxchocolatier.com', '+41 41 418 70 90',
  3, null, 13, '1, 19, 22, 23',
  array[]::text[],
  array['hidden-gem','splurge','vegetarian','walk-in','romantic'],
  4
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'confiserie-bachmann',
  'gems',
  'Confiserie Bachmann Schwanenplatz',
  'A Lucerne institution for Luzerner Lebkuchen — and an underrated breakfast.',
  'Big, bustling bakery and café opposite the Chapel Bridge. Skip the obvious tourist tier and head upstairs to the café for a proper Swiss breakfast with lake view.',
  'The chocolate-dipped Luzerner Lebkuchen is the edible souvenir locals actually buy. Better than the airport stuff by a mile.',
  'Schwanenplatz 7, 6004 Luzern', 47.052300, 8.308800, 'https://www.confiserie.ch', '+41 41 227 70 70',
  2, null, 13, '1, 19, 22, 23',
  array[]::text[],
  array['morning','family-friendly','walk-in','view'],
  5
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'kornschuette-market',
  'gems',
  'Tuesday and Saturday Farmers Market',
  'The Reuss quays fill with 100 stalls twice a week — and that''s where Lucerne really eats.',
  'Every Tuesday and Saturday morning, the quay on both sides of the Reuss transforms into one of the best farmers markets in Central Switzerland. Bread from Entlebuch, cheese from Emmental, fresh vegetables, flowers, and a surprisingly good Znüni beer.',
  'Go Saturday at 8am — grab an espresso from the mobile Mill''Kaffee bar, walk the stalls, bring home something for dinner.',
  'Rathausquai, 6004 Luzern', 47.051400, 8.306700, 'https://www.luzern.com/en/markets',
  1, null, 12, '1, 6, 7, 8',
  array['spring','summer','autumn'],
  array['morning','walk-in','budget','family-friendly','hidden-gem'],
  6
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'kapuzinerweg-view',
  'gems',
  'Kapuzinerweg Sunset Bench',
  'A single wooden bench on a forest path with the whole city at your feet.',
  'Short walk from the Château Gütsch up through the Gütsch forest on a path lined with benches. One bench in particular, about 15 minutes in, looks straight across to the Hofkirche and the lake. No sign, no fence, just the view.',
  'Bring a bottle of something and go for sunset. We''ve sent guests here for four years and not a single one has found it crowded.',
  'Gütschweg, 6003 Luzern', 47.049000, 8.300000, 'https://www.luzern.com/en',
  1, 35, 12, 'Gütsch funicular from Baselstrasse',
  array['spring','summer','autumn'],
  array['hidden-gem','sunset','romantic','view','photo-spot','dog-friendly'],
  7
);

insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'neubad',
  'gems',
  'Neubad',
  'A former indoor pool turned into Lucerne''s best cultural hangout.',
  'A decommissioned public swimming pool that the city handed over to a cultural association. The empty pool basin is now a stage, the changing rooms are studios, and the café serves good, cheap vegetarian food all day.',
  'Check the event calendar — concerts, film nights, talks, occasional raves. Even on a quiet afternoon the coffee and the architecture alone are worth it.',
  'Bireggstrasse 36, 6003 Luzern', 47.041600, 8.297100, 'https://www.neubad.org', '+41 41 310 14 24',
  1, 18, 7, '1',
  array[]::text[],
  array['hidden-gem','vegetarian','budget','rainy-day','evening','dog-friendly'],
  8
);
