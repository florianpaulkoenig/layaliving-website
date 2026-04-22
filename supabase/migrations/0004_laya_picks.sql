-- Phase C follow-up: LAYA's own curated picks from their PDF guestbook.
-- Overwrites any matching slugs from 0003; otherwise inserts new.
-- Idempotent -- safe to rerun. LAYA picks take sort_order 1..N per category
-- so they float to the top of each category on the site.
--
-- Distances computed from Triangolo (Nidfeldstrasse 2G, 6010 Kriens)
--   walking 5 km/h, biking 15 km/h. NULL where not realistic / not verified.

-- ==================== EAT ====================

-- 1. Two Hands
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'two-hands', 'eat', 'Two Hands',
  'Chai tea and homemade pancakes -- creative brunch with a cosmopolitan twist.',
  'Two Hands in Lucerne stands for creative, cosmopolitan cuisine with regional roots. The restaurant focuses on fresh, seasonal ingredients and combines them to create sophisticated dishes with international influences. The modern yet cozy ambiance creates a relaxed atmosphere where enjoyment and hospitality take center stage. Whether for a relaxed lunch, a romantic dinner, or a special occasion, Two Hands offers culinary experiences that will linger in your memory.',
  'Chai tea and homemade pancakes.',
  'Waldstätterstrasse 6, 6003 Luzern', 47.049900, 8.303600, 'https://www.twohands.ch', NULL,
  3, NULL, 12, '14',
  array[]::text[],
  array['personal-favorites','morning','vegetarian','walk-in','romantic'],
  1
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 2. Melissa's Kitchen
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'melissas-kitchen', 'eat', 'Melissa''s Kitchen',
  'Big public Sunday brunch -- fresh, healthy, and full of international flavour.',
  'Melissa''s Kitchen in Lucerne delights guests with homemade, fresh, and healthy dishes inspired by international flavors. Here, creative cuisine meets warm hospitality. Whether breakfast, lunch, or afternoon cake, everything is prepared with love, often using regional and organic ingredients. The cozy atmosphere invites you to linger and makes Melissa''s Kitchen a place where enjoyment, quality, and a feel-good atmosphere harmonize perfectly.',
  'The big, delicious public Sunday brunch -- there''s a large buffet.',
  'Hirschengraben 19, 6003 Luzern', 47.049000, 8.302400, 'https://www.melissaskitchen.ch', NULL,
  2, NULL, 11, '14',
  array[]::text[],
  array['personal-favorites','morning','vegetarian','family-friendly','walk-in'],
  2
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 3. Nooch Mattenhof
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'nooch-mattenhof', 'eat', 'Nooch Mattenhof',
  'Asian street-food vibes in urban Kriens -- super sushi just down the road.',
  'Nooch in Kriens brings Asian street food vibes to a modern, urban setting. The menu features sushi, curries, noodle and rice bowls -- freshly prepared and full of flavor. Colorful cocktails and creative desserts round out the experience. With its stylish interior and relaxed atmosphere, Nooch is the perfect place to enjoy moments of pleasure with friends, family, or as a couple. Culinary diversity from Asia meets a casual lifestyle in the heart of Kriens.',
  'Infused water and the "Passion Mix".',
  'Am Mattenhof 16a, 6010 Kriens', 47.036400, 8.294600, 'https://www.nooch.ch', NULL,
  3, 10, 4, NULL,
  array[]::text[],
  array['personal-favorites','family-friendly','walk-in','evening'],
  3
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 4. Majorelle Neustadt
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'majorelle-neustadt', 'eat', 'Majorelle Neustadt',
  'Moroccan tagines, spicy couscous, and oriental mezze in a jewel-box setting.',
  'Majorelle in Lucerne whisks guests away to a world of Moroccan flavors and colors. Aromatic tagines, spicy couscous variations, and oriental mezze are served in an atmospheric setting -- everything is freshly prepared and rich in spices. Inspired by the famous Jardin Majorelle in Marrakesh, the restaurant combines culinary authenticity with stylish hospitality. A place for enjoyable evenings, convivial gatherings and a little break from everyday life in the heart of Lucerne.',
  'Fresh Moroccan chai latte, homemade.',
  'Himmelrichstrasse 12, 6003 Luzern', 47.047300, 8.304000, 'https://www.majorelle-neustadt.ch', NULL,
  3, NULL, 10, '14',
  array[]::text[],
  array['personal-favorites','evening','romantic','reservation','vegetarian'],
  4
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 5. Rest. Helvetia
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'restaurant-helvetia', 'eat', 'Restaurant Helvetia',
  'Traditional Swiss classics -- rösti, lake fish -- with contemporary polish.',
  'The Helvetia restaurant in Lucerne combines traditional Swiss cuisine with contemporary sophistication. The focus here is on classics such as rösti and fresh fish dishes -- prepared with regional ingredients and great attention to detail. The stylish, cozy atmosphere invites both locals and visitors to linger. With its warm service and select wine list, Helvetia is a place for authentic enjoyment and convivial moments in the heart of Lucerne.',
  'Homemade bratwurst mousse and chocolate dessert.',
  'Waldstätterstrasse 9, 6003 Luzern', 47.050200, 8.303400, 'https://www.helvetia-luzern.ch', NULL,
  3, NULL, 12, '14',
  array[]::text[],
  array['personal-favorites','evening','reservation','romantic'],
  5
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 6. Wirtshaus Taube  (collides with 0003 -- LAYA version wins)
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'wirtshaus-taube', 'eat', 'Wirtshaus Taube',
  'Genuine Lucerne recipes in a cosy, rustic room -- a piece of the city''s way of life.',
  'The Wirtshaus Taube in Lucerne stands for genuine hospitality and honest, down-to-earth cuisine. Seasonal specialities, Swiss classics and fine home-style dishes are served in a cosy, rustic atmosphere -- always freshly prepared and often using regional products. Whether for lunch, dinner, or a get-together with friends, the Taube offers a warm, inviting atmosphere where you will immediately feel at home. Here, tradition meets warmth -- a piece of Lucerne''s way of life.',
  'A typical Lucerne dish: Kügelipastetli.',
  'Burgerstrasse 3, 6003 Luzern', 47.050900, 8.306500, 'https://www.taube-luzern.ch', '+41 41 210 07 47',
  3, NULL, 13, '14',
  array['autumn','winter'],
  array['personal-favorites','evening','reservation','rainy-day','romantic'],
  6
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 7. Mamma Leone
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'mamma-leone', 'eat', 'Mamma Leone',
  'Authentic Italian on Mühlenplatz -- 14 Gault Millau points, and a lot of amore.',
  'Mamma Leone in Lucerne brings the authentic taste of Italy to your plate. Fresh pasta, crispy stone-baked pizzas, and homemade desserts are prepared with the finest ingredients and lots of amore. The Mediterranean atmosphere, friendly service, and exquisite wine selection invite you to linger -- whether for a relaxed lunch, a romantic dinner, or a cheerful get-together with friends. Mamma Leone is a piece of Italy in the heart of Lucerne that combines enjoyment and joie de vivre. 14 Gault Millau points.',
  'Carpaccio di barbabietola (beetroot) with burrata.',
  'Mühlenplatz 12, 6004 Luzern', 47.052200, 8.302800, 'https://www.mammaleone.ch', NULL,
  3, NULL, 12, '14',
  array[]::text[],
  array['personal-favorites','evening','romantic','reservation','vegetarian'],
  7
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 8. Karls Kraut
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'karls-kraut', 'eat', 'Karls Kraut',
  'Creative plant-based cooking on the Reuss -- vegetarian and vegan, always seasonal.',
  'Karls Kraut in Lucerne stands for creative, plant-based cuisine full of flavor and variety. Fresh, seasonal ingredients are transformed into colorful bowls, sophisticated vegetable dishes, and homemade specialties -- all vegetarian or vegan. The charming, cozy atmosphere invites you to linger, while the changing menu always has new culinary surprises in store. Karls Kraut is the perfect place for conscious enjoyment that is healthy, sustainable, and simply delicious.',
  'The Sunday brunch -- served every second Sunday of the month, very delicious.',
  'St. Karliquai 7, 6004 Luzern', 47.053100, 8.300200, 'https://www.karls-kraut.ch', NULL,
  3, NULL, 13, '14',
  array[]::text[],
  array['personal-favorites','vegetarian','evening','reservation'],
  8
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 9. Restaurant FED
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'restaurant-fed', 'eat', 'Restaurant FED',
  'Modern food-sharing concept near Pilatusplatz -- an open kitchen and urban elegance.',
  'FED in Lucerne combines modern design with innovative cuisine and a food-sharing concept. The restaurant focuses on fresh, regional ingredients and uses them to create creative dishes with international influences. Whether for a relaxed lunch, a stylish dinner, or cocktails at the bar, FED offers a culinary experience in an urban, elegant atmosphere. The open kitchen and attentive service make every visit special -- a meeting place for connoisseurs who appreciate good food, a stylish ambience, and lively hospitality.',
  'Homemade cherry lemonade.',
  'Pilatusstrasse 46, 6003 Luzern', 47.049500, 8.305600, 'https://www.restaurant-fed.ch', NULL,
  3, NULL, 11, '14',
  array[]::text[],
  array['personal-favorites','evening','reservation','splurge'],
  9
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 10. Grottino 1313
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'grottino-1313', 'eat', 'Grottino 1313',
  'A surprise menu at long wooden tables -- charming industrial warmth, no fixed carte.',
  'Grottino 1313 in Lucerne is a culinary gem with charming industrial charm. There is no fixed menu here -- whatever is in season and available at the market is what is cooked. Mediterranean-inspired dishes, fresh and prepared with love, are served in a convivial atmosphere at long wooden tables. Grottino stands for shared enjoyment, honest cuisine, and warm hospitality. A place where you feel like you''re among friends and are surprised every time you visit.',
  'A Mediterranean 4- or 5-course surprise menu at tavolata-style long tables. Reservations are recommended.',
  'Industriestrasse 7, 6005 Luzern', 47.048700, 8.295500, 'https://www.grottino1313.ch', NULL,
  3, NULL, 8, '6, 7, 8, 21',
  array[]::text[],
  array['personal-favorites','evening','reservation','hidden-gem','romantic'],
  10
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 11. Jazz Kantine
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'jazz-kantine', 'eat', 'Jazzkantine',
  'Live music, cocktails, and a lunchtime tavolata in the heart of the old town.',
  'The Jazzkantine in Lucerne is a lively meeting place for music and cocktail lovers. Creative drinks and selected wines are served in a relaxed, stylish atmosphere. With its varied program and charming service, the Jazzkantine is an integral part of Lucerne''s nightlife. The restaurant has great options for vegetarians.',
  'Sourdough bread with spreads -- a quick bite, beautifully done.',
  'Grabenstrasse 8, 6002 Luzern', 47.053200, 8.307100, 'https://www.jazzkantine.ch', NULL,
  2, NULL, 13, '14',
  array[]::text[],
  array['personal-favorites','vegetarian','evening','walk-in'],
  11
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 12. Pastarazzi Himmelrich
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'pastarazzi-himmelrich', 'eat', 'Pastarazzi Himmelrich',
  'Fresh handmade pasta in creative combinations -- open kitchen, neighbourhood soul.',
  'Pastarazzi in Himmelrich, Lucerne, is all about fresh, handmade pasta in lots of creative ways. They cook with high-quality, often local ingredients every day -- from classic recipes to surprising new creations. The modern, cozy atmosphere invites you to linger, while the open kitchen and warm service ensure an authentic experience. Whether for a quick lunch or a relaxed dinner, Pastarazzi combines Italian culinary culture with Lucerne charm.',
  'The seasonal ravioli mix.',
  'Claridenstrasse 2, 6003 Luzern', 47.048100, 8.301900, 'https://www.pastarazzi.ch', NULL,
  2, NULL, 10, '14',
  array[]::text[],
  array['personal-favorites','family-friendly','vegetarian','walk-in','evening'],
  12
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 13. Restaurant Bayts
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'restaurant-bayts', 'eat', 'Restaurant Bayts',
  'Purely plant-based fine dining -- a multi-course ode to vegetables in Bireggwald.',
  'Bayts in Lucerne offers purely plant-based culinary experiences of the highest standard. A multi-course menu showcasing vegetables in creative ways is served in an elegant yet relaxed atmosphere. The dishes surprise with sophisticated flavor combinations, accompanied by carefully selected wines or non-alcoholic pairings. Seasonal ingredients, friendly service, and a personal touch make Bayts a hotspot for modern, sustainable fine dining in the heart of Lucerne.',
  'Let yourself be surprised -- trust the menu.',
  'Bireggstrasse 24, 6003 Luzern', 47.041800, 8.298500, 'https://www.bayts.ch', NULL,
  4, 20, 7, '14',
  array[]::text[],
  array['personal-favorites','vegetarian','splurge','reservation','romantic','evening'],
  13
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 14. Pizzeria Fratelli
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'pizzeria-fratelli', 'eat', 'Pizzeria Fratelli',
  'Authentic stone-oven pizza and family hospitality -- five minutes from the apartment.',
  'Pizzeria Fratelli in Kriens is synonymous with authentic Italian cuisine and family hospitality. Crispy pizzas are baked in a stone oven, and fresh pasta and traditional antipasti are prepared using the finest ingredients. The cozy Mediterranean atmosphere invites you to linger -- whether for a relaxed lunch, a romantic dinner, or a convivial get-together with friends. Fratelli combines Italian joie de vivre, quality, and warm service in the heart of Kriens.',
  'When you want a quick and easy solution.',
  'Schweighofplatz 1, 6010 Kriens', 47.041200, 8.275200, 'https://www.pizzeria-fratelli.ch', NULL,
  2, 5, NULL, NULL,
  array[]::text[],
  array['personal-favorites','family-friendly','walk-in','budget','evening'],
  14
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 15. Himmelrich Terrace
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'himmelrich-terrace', 'eat', 'Himmelrich Terrace',
  'Sunset dining on the Pilatus slope -- seasonal, uncomplicated, with a magnificent view.',
  'The Himmelrich restaurant in Kriens combines modern, uncomplicated cuisine with a cozy atmosphere. The menu features seasonal dishes made from fresh, regional ingredients -- from creative bowls and crisp salads to hearty classics. The stylish, bright interior and relaxed atmosphere make it the ideal meeting place for lunch, after-work drinks, or a relaxed dinner. Himmelrich is a popular place to enjoy good food in the heart of the neighborhood of the same name.',
  'The view from the terrace is magnificent.',
  'Schattenbergstrasse 107, 6010 Kriens', 47.037900, 8.280100, 'https://www.himmelrich.ch', NULL,
  3, 30, NULL, NULL,
  array['spring','summer','autumn'],
  array['personal-favorites','view','sunset','romantic','mountain','reservation'],
  15
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- ==================== DRINK ====================

-- 1. Suite Rooftop  (collides with 0003 'suite' -- LAYA slug 'suite-rooftop' is more descriptive; 0003 row kept as orphan)
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'suite-rooftop', 'drink', 'Suite Rooftop',
  'Extravagant rooftop above the station -- lake, city, Alps, and a whisky sour at sunset.',
  'The Suite Rooftop Bar in Lucerne offers breathtaking views of the lake, city, and mountains -- perfect for unforgettable evenings. In an elegant, modern atmosphere, the team serves creative cocktails, fine wines, and delicious snacks. At sunset, the roof terrace is transformed into a magical place where music, lights, and views merge into a unique experience. The Suite Rooftop Bar is the ideal meeting place for stylish drinks and special moments high above the rooftops of Lucerne.',
  'The whisky sour.',
  'Pilatusstrasse 3, 6003 Luzern', 47.050200, 8.309300, 'https://www.suite-luzern.ch', NULL,
  4, NULL, 10, '14',
  array['spring','summer','autumn'],
  array['personal-favorites','view','sunset','evening','splurge','romantic','lake'],
  1
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 2. Montana Beach Club
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'montana-beach-club', 'drink', 'Montana Beach Club',
  'Sand under your feet, Art Deco hotel behind you, and the whole lake in front.',
  'The Montana Beach Club in Lucerne combines a vacation feeling with spectacular views of Lake Lucerne and the Alps. On the roof terrace of the Art Deco Hotel Montana, guests can enjoy comfortable lounges, cool drinks, refreshing cocktails, and summer snacks. Sand under your feet, relaxing music, and sparkling water create a unique atmosphere in the middle of the city. Whether for sunbathing during the day or sundowners in the evening, the Montana Beach Club is an exclusive hotspot for summer enjoyment.',
  'The fantastic cocktails.',
  'Adligenswilerstrasse 22, 6006 Luzern', 47.057400, 8.315100, 'https://www.hotel-montana.ch', NULL,
  4, NULL, 15, '6, 8, 14',
  array['summer'],
  array['personal-favorites','view','sunset','lake','splurge','sunny-day','evening'],
  2
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 3. Sunset Bar
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'sunset-bar', 'drink', 'Sunset Bar',
  'Outdoor lake bar where the mountains catch fire -- a golden-hour classic.',
  'The Sunset Bar in Lucerne offers stunning views of Lake Lucerne and the surrounding mountains -- especially magical at sunset. Refreshing cocktails, fine wines, and light snacks are served in a relaxed atmosphere. Whether after work, as a romantic meeting place or for a cozy evening with friends, the Sunset Bar is the perfect place to end the day in style and enjoy the golden hours of Lucerne.',
  'The Mojito.',
  'Seeburgstrasse 61, 6006 Luzern', 47.049800, 8.341500, NULL, NULL,
  2, NULL, NULL, '24',
  array['summer'],
  array['personal-favorites','view','sunset','lake','sunny-day','evening','walk-in'],
  3
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 4. Central Kriens
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'central-kriens', 'drink', 'Central Kriens',
  'Coffee and drinks before the Pilatus cableway -- a Kriens neighbourhood favourite.',
  'The Central in Kriens is a popular meeting place for good food and convivial moments. Seasonal dishes, Swiss classics, and international specialties are served in a modern, cozy atmosphere -- freshly prepared with great attention to detail. Whether for lunch, dinner, or a drink at the bar, the Central offers a welcoming atmosphere and friendly service and is ideal for spending time with family, friends, or colleagues in the heart of Kriens.',
  'Gin Tea.',
  'Waldheimstrasse 1, 6010 Kriens', 47.037800, 8.279200, NULL, NULL,
  2, 10, NULL, '16, 21',
  array[]::text[],
  array['personal-favorites','morning','evening','walk-in','family-friendly'],
  4
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- ==================== FAMILY (activity spots) ====================

-- 1. Padelta Kriens
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'padelta-kriens', 'family', 'Padelta Kriens',
  'Squash, tennis, and padel on modern courts -- for first-timers and pros alike.',
  'Padelta in Kriens is the place to be for anyone who loves padel or wants to give it a try. The modern facility offers well-maintained courts, professional equipment, and a relaxed, sporty atmosphere. Whether you''re a beginner or a pro, there''s something for everyone here. In addition to free play times, there are also courses, tournaments, and events that strengthen the sense of community. Padelta combines sport, fun, and social interaction into an active experience for young and old alike.',
  'Bus no. 14 to Grabenhof, then 8 minutes on foot along the stream.',
  'Schlundstrasse, 6010 Kriens', 47.039200, 8.271700, 'https://www.padelta.ch', NULL,
  3, 15, 5, '14',
  array[]::text[],
  array['personal-favorites','family-friendly','reservation','rainy-day'],
  1
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 2. City Boulder
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'city-boulder', 'family', 'City Boulder',
  'Modern bouldering hall directly across the street -- ropes optional.',
  'City Boulder in Kriens is the perfect place for anyone who wants to experience climbing without ropes in an urban atmosphere. The modern bouldering hall offers varied routes for beginners to professionals, regular new challenges, and a welcoming community. With a cozy lounge, snacks, and drinks, the sport also becomes a social experience. Whether for a quick workout or an entire afternoon, City Boulder combines exercise, fun, and community at the highest level.',
  'Cross the street -- it''s directly opposite the apartment.',
  'Nidfeldstrasse, 6010 Kriens', 47.042300, 8.277500, 'https://www.cityboulder.ch', NULL,
  2, 2, NULL, NULL,
  array[]::text[],
  array['personal-favorites','family-friendly','rainy-day','kid-safe','budget'],
  2
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 3. Bowling Universe
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'bowling-universe', 'family', 'Bowling Universe',
  'Bowling, billiards, darts, and arcade games -- a twelve-minute walk from the apartment.',
  'Bowling Universum in Kriens offers fun and action for all ages. Beginners and pros alike can test their accuracy on modern lanes, accompanied by lively music and a great atmosphere. In addition to bowling, billiards, arcade games, and a wide range of snacks and drinks provide plenty of variety. Whether it''s a family outing, an evening with friends, or a company event, Bowling Universum combines sporting competition with socializing in a relaxed atmosphere.',
  'Twelve-minute walk from Nidfeld -- or bus no. 14 to Oberkuonimatt.',
  'Industriestrasse 15, 6010 Kriens', 47.044900, 8.286200, 'https://www.bowling-universum.ch', NULL,
  2, 12, 4, '14',
  array[]::text[],
  array['personal-favorites','family-friendly','rainy-day','kid-safe','evening'],
  3
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 4. Cinema Bourbaki
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'cinema-bourbaki', 'family', 'Cinema Bourbaki',
  'Charming arthouse cinema inside the historic Bourbaki Panorama -- films mostly in OV.',
  'The Bourbaki cinema in Lucerne is a charming arthouse cinema in the historic Bourbaki Panorama. It shows carefully curated films -- from current arthouse productions to classics -- mostly in their original language. With comfortable seats, modern technology, and an intimate atmosphere, every visit to the cinema is a special experience. The inviting foyer with bar is the perfect place to linger before or after the show, making the Bourbaki a cultural meeting place for cineastes and curious minds alike.',
  'Bus no. 14 to Lucerne Wey, then 4 minutes on foot.',
  'Löwenplatz 11, 6004 Luzern', 47.054800, 8.309600, 'https://www.bourbaki.ch', NULL,
  2, NULL, 14, '14',
  array[]::text[],
  array['personal-favorites','rainy-day','evening','family-friendly'],
  4
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- ==================== CULTURE ====================

-- 1. Glacier Garden  (collides with 0003 'gletschergarten' -- LAYA slug wins; orphan row remains in culture/gletschergarten)
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'glacier-garden', 'culture', 'Glacier Garden',
  'Ice-Age glacier pots, fossils, and a Hall of Mirrors -- a one-of-a-kind monument.',
  'The Glacier Garden in Lucerne is a unique natural and cultural monument that combines impressive traces of the Ice Age with an exciting history. Visitors can discover glacier pots, fossils, and rock formations that are millions of years old, as well as interactive exhibitions on the history of the Earth. The historic Hall of Mirrors and the observation tower offer additional special experiences. With its mix of science, nature, and architecture, the Glacier Garden is a fascinating destination for young and old alike.',
  'Just next to the Lion Monument -- combine the two.',
  'Denkmalstrasse 4a, 6006 Luzern', 47.057300, 8.311100, 'https://www.gletschergarten.ch', '+41 41 410 43 40',
  3, NULL, 15, '14',
  array[]::text[],
  array['personal-favorites','family-friendly','rainy-day','kid-safe','hidden-gem'],
  1
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 2. Beach Bath Lido
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'beach-bath-lido', 'culture', 'Beach Bath Lido',
  'Sandy beach, shallow water, diving tower -- Lucerne''s summer hotspot on the lake.',
  'The Lido beach in Lucerne is a summer hotspot right on Lake Lucerne. With its extensive sandy beach, large sunbathing lawn, and clear water, it is ideal for swimming, sunbathing, and relaxing. Sporty guests can enjoy beach volleyball courts, a diving tower, or stand-up paddleboarding, while children can splash around safely in the shallow waters near the shore. Refreshments and snacks are available. The Lido combines a vacation feeling with urban proximity -- perfect for hot days.',
  'Bus no. 14 to Lucerne station, then bus 6 or 8 to Verkehrshaus-Lido.',
  'Lidostrasse 6A, 6006 Luzern', 47.053000, 8.339500, 'https://www.lido-luzern.ch', '+41 41 370 38 06',
  2, NULL, NULL, '6, 8',
  array['summer'],
  array['personal-favorites','family-friendly','kid-safe','sunny-day','lake','view'],
  2
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 3. Lake Bath Lucerne (Seebad)
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'lake-bath-lucerne', 'culture', 'Lake Bath Lucerne',
  'Historic wooden bathhouse on the lake -- nostalgic summer flair since 1885.',
  'The Seebad Luzern is a charming, historic bathing establishment directly on Lake Lucerne, which has been part of summer city life since 1885. On the wooden complex with two separate bathing areas for men and women and a shared swimming area, you can relax in the lake, sunbathe, and enjoy the view of Mount Pilatus and Mount Rigi. A bar and restaurant provide refreshments and light meals, while deck chairs and sun decks invite you to linger. A place with nostalgic flair and a holiday feeling in the heart of Lucerne.',
  'Bus no. 14 to Luzern Wey, then walk 8 minutes along the lake.',
  'Nationalquai, 6006 Luzern', 47.055300, 8.312900, 'https://www.seebadluzern.ch', '+41 41 410 38 06',
  2, NULL, 14, '14',
  array['summer'],
  array['personal-favorites','view','lake','sunny-day','hidden-gem','romantic'],
  3
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 4. KKL Luzern  (collides with 0003 'kkl-luzern' -- LAYA version wins)
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'kkl-luzern', 'culture', 'KKL Luzern',
  'Jean Nouvel''s architectural masterpiece on the lake -- concerts, art, and theatre.',
  'The KKL Luzern is an architectural masterpiece by Jean Nouvel and one of Switzerland''s most important cultural centers. Located directly on Lake Lucerne, it impresses with its spectacular architecture and excellent acoustics. World-renowned festivals such as the Lucerne Festival, high-caliber concerts, exhibitions, and conferences take place here. The interplay of art, music, cuisine, and a unique location makes the KKL a cultural landmark and meeting place for guests from all over the world.',
  'A film with live orchestral music by the 21st Century Symphony Orchestra.',
  'Europaplatz 1, 6005 Luzern', 47.050400, 8.310600, 'https://www.kkl-luzern.ch', '+41 41 226 70 70',
  3, NULL, 10, '14',
  array[]::text[],
  array['personal-favorites','evening','splurge','rainy-day','view','lake'],
  4
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 5. Kapell Bridge  (collides with 0003 'kapellbruecke' -- different slug, orphan remains)
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'kapell-bridge', 'culture', 'Kapell Bridge',
  'Lucerne''s world-famous covered wooden bridge -- built in the 14th century, still the icon.',
  'The Chapel Bridge is Lucerne''s landmark and one of the oldest covered wooden bridges in Europe. Built in the 14th century, it connects the old town with the new town and impresses with historical triangular paintings depicting scenes from the city''s history. Together with the striking water tower, it forms a picturesque ensemble that is one of the most photographed sights in Switzerland. A walk across the Chapel Bridge is a must for every visitor to Lucerne.',
  'World-famous, but genuinely beautiful -- especially at golden hour.',
  'Kapellbrücke, 6002 Luzern', 47.051400, 8.307600, 'https://www.luzern.com', NULL,
  NULL, NULL, 10, '14',
  array[]::text[],
  array['personal-favorites','photo-spot','sunset','walk-in','view'],
  5
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 6. Conservatory (Dreilindenpark)
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'conservatory', 'culture', 'Conservatory',
  'An insider tip -- best view over the lake from Dreilindenpark, high above the city.',
  'The Lucerne Conservatory, nestled in the idyllic Dreilindenpark, combines music, education, and culture in a unique setting. The historic park, located high above the city, offers breathtaking views of Lucerne, Lake Lucerne, and the Alps. Surrounded by old trees, sculptures, and well-kept green spaces, it invites you to stroll, linger, and be inspired. The conservatory itself is a place of musical excellence where talent is nurtured and cultural events can be enjoyed in a special atmosphere.',
  'Bring a picnic and enjoy the breathtaking view -- there is no restaurant at the conservatory.',
  'Dreilindenstrasse 93, 6006 Luzern', 47.060200, 8.320500, 'https://www.musikschule-luzern.ch', NULL,
  NULL, NULL, NULL, '14',
  array['spring','summer','autumn'],
  array['personal-favorites','view','hidden-gem','photo-spot','romantic','lake','sunset'],
  6
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 7. Lion Monument  (0003 used 'loewendenkmal' -- LAYA slug 'lion-monument' wins; orphan remains)
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'lion-monument', 'culture', 'Lion Monument',
  'The dying lion carved into rock -- Mark Twain''s "saddest and most moving piece of stone".',
  'The Lion Monument in Lucerne is one of Switzerland''s most famous monuments and a moving symbol of bravery and loyalty. It commemorates the Swiss guards who fell in Paris during the French Revolution in 1792. The dying lion, carved into a rock face, impresses with its expressiveness and emotional depth. Surrounded by a peaceful park, the monument is a place of tranquility and reflection -- and an important part of Lucerne''s city history.',
  'Combine with a visit to the Glacier Garden right next door.',
  'Denkmalstrasse 4, 6002 Luzern', 47.057700, 8.311600, 'https://www.luzern.com', NULL,
  NULL, NULL, 14, '14',
  array[]::text[],
  array['personal-favorites','photo-spot','walk-in','family-friendly'],
  7
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 8. Musegg Wall  (0003 used 'museggmauer' -- LAYA slug wins; orphan remains)
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'musegg-wall', 'culture', 'Musegg Wall',
  'Nine medieval towers, climbable in summer -- a walk through Lucerne''s 14th century.',
  'The Musegg Wall in Lucerne is a well-preserved section of the historic city fortifications dating back to the 14th century and is one of the city''s landmarks. Nine striking towers dominate the skyline, some of which can be climbed to enjoy impressive views of the old town, Lake Lucerne, and the surrounding mountains. Open in spring and summer, the Musegg Wall invites you to take a walk through history and experience the authentic atmosphere of medieval Lucerne.',
  'An aperitif at "Heiter bei Musegg".',
  'Museggstrasse, 6004 Luzern', 47.054500, 8.304800, 'https://www.museggmauer.ch', NULL,
  NULL, NULL, 13, '14',
  array['spring','summer'],
  array['personal-favorites','view','photo-spot','walk-in','family-friendly','hidden-gem'],
  8
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 9. Farmers Market (Weekly market on the Reuss)
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'farmers-market', 'culture', 'Farmers Market',
  'Weekly market along the Reuss -- regional produce, cheese, flowers, and good chatter.',
  'The market on the Quai in Lucerne is a popular weekly market right on Lake Lucerne, whose picturesque backdrop invites you to stroll around. Here, regional producers offer fresh fruit and vegetables, cheese, bread, flowers, and specialties from the surrounding area. In addition to food, you will also find handicrafts and small gift ideas. The market is not only a place for shopping, but also for meeting people, chatting, and enjoying yourself -- a slice of Lucerne''s outdoor lifestyle.',
  'Cross the Seebrücke -- the stalls line the banks of the Reuss.',
  'Rosengart Platz, 6004 Luzern', 47.051000, 8.306700, 'https://www.luzern.com', NULL,
  NULL, NULL, 10, '14',
  array['spring','summer','autumn'],
  array['personal-favorites','morning','walk-in','family-friendly','photo-spot'],
  9
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 10. Lucerne Carnival (Fasnacht)
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'lucerne-carnival', 'culture', 'Lucerne Carnival',
  'Dirty Thursday to Ash Wednesday -- masks, Guggenmusik, and the whole city in uproar.',
  'Carnival in Lucerne is the colorful and boisterous highlight of Lucerne''s calendar of events. Every year, starting on Dirty Thursday, the city is transformed into a sea of masks, costumes, and Guggenmusik. Thousands celebrate exuberantly in the alleys of the old town, accompanied by parades, carnival floats, and spontaneous street concerts. Traditional figures such as Fritschi characterize the festival, which is deeply rooted in local culture. For locals and visitors alike, Lucerne Carnival is an unforgettable experience full of creativity, humor, and joie de vivre.',
  'Head to the Chapel Bridge -- the heart of the action.',
  'Schwanenplatz, 6004 Luzern', 47.052500, 8.308500, 'https://www.luzern.com/en/highlights/lucerne-carnival', NULL,
  NULL, NULL, 11, '14',
  array['winter'],
  array['personal-favorites','photo-spot','evening','walk-in','family-friendly'],
  10
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 11. Lucerne Festival
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'lucerne-festival', 'culture', 'Lucerne Festival',
  'World-class classical music at the KKL -- every August into September.',
  'The Lucerne Festival is one of the world''s most renowned classical music festivals, attracting top international orchestras, conductors, and soloists to Lucerne every summer. The center of the action is the KKL Luzern, whose outstanding acoustics provide ideal conditions for musical excellence. The festival program includes symphonic concerts, chamber music, contemporary works, and innovative formats that allow classical music to be experienced in a new way. With its blend of artistic excellence and inspiring atmosphere, the Lucerne Festival is a highlight of the international cultural calendar.',
  'Takes place at the KKL, directly at Lucerne train station.',
  'Europaplatz, 6005 Luzern', 47.050400, 8.310600, 'https://www.lucernefestival.ch', '+41 41 226 44 00',
  4, NULL, 10, '14',
  array['summer','autumn'],
  array['personal-favorites','evening','splurge','reservation','romantic'],
  11
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 12. Lozärner Määs
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'lozaerner-maeaes', 'culture', 'Lozärner Määs',
  'Lucerne''s traditional October fair -- fairground rides, market stalls, and autumn feasting.',
  'The Lozärner Määs is Lucerne''s traditional autumn fair and takes place every year in October along the Schweizerhofquai and in Inseli Park. It combines a folk festival atmosphere with market tradition: fairground rides, carousels, and game stalls provide entertainment, while market stalls offer regional specialties, handicrafts, and hearty snacks. The Määs is a meeting place for families, friends, and visitors and is an integral part of Lucerne''s annual calendar -- a piece of living city tradition with lots of charm.',
  'Directly at Lucerne train station on the Inseli meadow.',
  'Inseli Park, Werftsteg, 6005 Luzern', 47.049900, 8.310300, 'https://www.luzern.com', NULL,
  2, NULL, 10, '14',
  array['autumn'],
  array['personal-favorites','family-friendly','kid-safe','evening','walk-in','photo-spot'],
  12
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 13. Christmas Market
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'christmas-market', 'culture', 'Christmas Market',
  'Mulled wine, wooden huts, and advent lights on Franziskanerplatz -- Lucerne''s winter magic.',
  'Every year during Advent, the Lucerne Christmas Market enchants the city center with festive lights and a cozy atmosphere. Lovingly decorated wooden huts line Franziskanerplatz, offering arts and crafts, regional specialties, and gift ideas. The scent of mulled wine, chestnuts, and freshly baked treats fills the air, while Christmas music sets the mood. The market is a popular meeting place for families, friends, and visitors who want to experience Lucerne''s romantic side in winter.',
  'Bus no. 14 to Lucerne train station, then walk along the Reuss.',
  'Franziskanerplatz, 6003 Luzern', 47.050800, 8.304400, 'https://www.luzern.com', NULL,
  2, NULL, 10, '14',
  array['winter'],
  array['personal-favorites','evening','family-friendly','photo-spot','romantic','walk-in'],
  13
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- ==================== HIKE (mountains + local walk) ====================

-- 1. Mount Pilatus  (collides with 0003 'pilatus-kulm' -- different slug; orphan remains)
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'mount-pilatus', 'hike', 'Mount Pilatus',
  'Our local mountain -- the world''s steepest cogwheel railway leaves from Kriens.',
  'Mount Pilatus, Lucerne''s local mountain, impresses with its striking silhouette and magnificent views of Lake Lucerne and the Alps. It can be easily reached by the world''s steepest cogwheel railway or by gondola and cable car. Whether hiking, climbing, paragliding, or simply enjoying the panoramic terraces, Mount Pilatus offers experiences for every taste. In winter it is transformed into a small snow paradise, in summer into a nature and adventure destination for the whole family.',
  'Bus no. 21 from Kriens, Sternmatt (100 m from the apartment) to Kriens, Zentrum - Pilatus.',
  'Schlossweg 1, 6010 Kriens', 46.979100, 8.252400, 'https://www.pilatus.ch', '+41 41 329 11 11',
  4, NULL, NULL, '1, 21',
  array['spring','summer','autumn','winter'],
  array['personal-favorites','view','mountain','photo-spot','family-friendly','splurge'],
  1
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 2. Mount Titlis
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'mount-titlis', 'hike', 'Mount Titlis',
  'Over 3,000 metres -- the rotating Rotair, eternal snow, and Europe''s highest suspension bridge.',
  'The Titlis near Engelberg is a spectacular destination and a year-round highlight in Central Switzerland. The rotating Rotair cable car takes you up to over 3,000 meters, where breathtaking views, eternal snow, and glacier experiences await. Visitors can cross the Cliff Walk -- Europe''s highest suspension bridge -- hike on the glacier or simply enjoy the mountain scenery. In winter, the Titlis attracts visitors with its varied ski slopes, while in summer it offers hiking trails and adventure activities.',
  'IR express from Lucerne station direct to Engelberg; 10-minute walk to the valley station.',
  'Gerschnistrasse 12, 6390 Engelberg', 46.770700, 8.435900, 'https://www.titlis.ch', '+41 41 639 50 50',
  4, NULL, NULL, '14',
  array['spring','summer','autumn','winter'],
  array['personal-favorites','view','mountain','photo-spot','splurge','family-friendly'],
  2
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 3. Mount Rigi  (collides with 0003 'rigi-kulm' -- different slug)
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'mount-rigi', 'hike', 'Mount Rigi',
  'The "Queen of the Mountains" -- 360-degree views of two lakes and the Alps.',
  'The Rigi, also known as the "Queen of the Mountains," offers a 360-degree panorama of Lake Lucerne, Lake Zug, and the Alps. It is a popular destination all year round and can be easily reached by cogwheel railway or cable car. In summer, idyllic hiking trails and picnic spots invite you to linger, while in winter, snowshoe trails and sleigh rides beckon. The combination of nature, views, and accessibility makes the Rigi a classic among Swiss mountains.',
  'Take the boat from Lucerne to Vitznau and ride up on the historic cogwheel railway.',
  'Bahnhofstrasse 7, 6354 Vitznau', 47.057800, 8.485400, 'https://www.rigi.ch', '+41 41 399 87 87',
  4, NULL, NULL, NULL,
  array['spring','summer','autumn','winter'],
  array['personal-favorites','view','mountain','lake','photo-spot','family-friendly','morning'],
  3
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 4. Stanserhorn  (collides with 0003 'stanserhorn' -- LAYA version wins)
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'stanserhorn', 'hike', 'Stanserhorn',
  'Insider tip -- a nostalgic funicular and the world''s first open-top Cabrio cable car.',
  'The Stanserhorn in Nidwalden combines nature and technological history in a unique way. The journey begins with a nostalgic funicular railway and continues with the Cabrio Bahn -- the world''s first cable car with an open upper deck. At the top, visitors are greeted by breathtaking panoramic views of lakes and mountains, leisurely hiking trails, and the Stanserhorn restaurant serving regional specialties. The protected area around the summit is also home to rare plants and animals, making a visit here truly special.',
  'Walk to Mattenhof station, then S4 to Stans and through town to the valley station.',
  'Stansstaderstrasse 19, 6370 Stans', 46.957300, 8.365500, 'https://www.stanserhorn.ch', '+41 41 618 80 40',
  4, NULL, NULL, NULL,
  array['spring','summer','autumn'],
  array['personal-favorites','view','mountain','hidden-gem','photo-spot','family-friendly'],
  4
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 5. Klewenalp
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'klewenalp', 'hike', 'Klewenalp',
  'Family-friendly plateau above Beckenried -- hiking, barbecues, gentle ski slopes.',
  'The Klewenalp above Beckenried is a family-friendly destination offering magnificent views of Lake Lucerne and the surrounding Alps. Accessible by gondola lift, it offers idyllic hiking trails, bike routes, and barbecue areas in summer, and a small, charming ski area with wide slopes in winter. Cozy mountain restaurants invite you to linger, while the relaxed atmosphere and wide range of leisure activities make Klewenalp a popular destination for those seeking relaxation and nature lovers.',
  'Only accessible by car -- large parking lot at the valley station.',
  'Kirchweg 27, 6375 Beckenried', 46.965600, 8.478400, 'https://www.klewenalp.ch', '+41 41 624 66 00',
  3, NULL, NULL, NULL,
  array['spring','summer','autumn','winter'],
  array['personal-favorites','view','mountain','family-friendly','kid-safe','hidden-gem'],
  5
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 6. Lake View Biregg (walk from the apartment)
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'lake-view-biregg', 'hike', 'Lake View Biregg',
  'On foot from the apartment -- 5 to 7 km through Bireggwald to the Seeblick viewpoint.',
  'Start in Nidfeld and walk leisurely towards the Allmend stadium until you reach the Waldegg Horw bus stop. This is where the idyllic Bireggwald forest begins. The trail leads through a beautiful mixed forest up to the Felmis district, picturesquely situated on the southwestern edge of the forest. Continuing along the edge of the forest above the neighborhood, you will reach the Seeblick Oberrüti viewpoint, which offers a magnificent view of Lake Lucerne, the Rigi, and the Bürgenstock. From there, the trail descends to the Tribschen neighborhood, where the lakeshore and small bathing spots invite you to linger. Return from Lucerne station by bus no. 14.',
  'Take a picnic with you.',
  'Auf Oberrüti 19, 6048 Horw', 47.018700, 8.305400, NULL, NULL,
  NULL, 5, NULL, '14',
  array['spring','summer','autumn'],
  array['personal-favorites','view','lake','mountain','hidden-gem','photo-spot','sunny-day','family-friendly'],
  6
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- ==================== DAYTRIPS ====================

-- 1. Ship Travel to Bürgenstock
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'ship-travel-buergenstock', 'daytrips', 'Ship Travel to Bürgenstock',
  'Short boat ride from Lucerne, then the funicular up to the famous Bürgenstock Resort.',
  'A boat trip from Lucerne to Bürgenstock combines relaxed travel with spectacular views. From the Lucerne lake basin, you glide past picturesque shores and mountains to the Bürgenstock station. From there, the funicular railway takes you up to the famous Bürgenstock Resort with breathtaking views over Lake Lucerne. Whether you prefer a walk, the panoramic terrace, or the spectacular rock trail, this excursion is a highlight for nature lovers and connoisseurs alike.',
  'Bus no. 14 to Lucerne station -- the boat leaves from the pier right out front.',
  'Landungsbrücke 1, 6003 Luzern', 47.051600, 8.309800, 'https://www.lakelucerne.ch', '+41 41 367 67 67',
  3, NULL, 10, '14',
  array['spring','summer','autumn'],
  array['personal-favorites','view','lake','mountain','family-friendly','photo-spot','romantic','splurge'],
  1
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;

-- 2. Ship Travel to Brunnen
insert into recommendations (
  slug, category, name, tagline, description, why_we_love_it,
  address, lat, lng, website, phone,
  price_range, walk_time_min, bike_time_min, bus_route,
  season, tags, sort_order
) values (
  'ship-travel-brunnen', 'daytrips', 'Ship Travel to Brunnen',
  'Three hours of comfort across Lake Lucerne -- paddle steamer past Rigi and Pilatus.',
  'A boat trip from Lucerne to Brunnen is an experience that combines picture-postcard idylls with dramatic alpine scenery. The journey takes you across Lake Lucerne, past picturesque shores, charming villages, and steep rock faces. Along the way, you can enjoy views of Mount Rigi, Mount Pilatus, and the Bürgenstock. Depending on the boat -- whether a nostalgic paddle steamer or a modern motorboat -- you can enjoy the fresh lake air on deck or relax in the saloon with coffee and snacks. In Brunnen, visitors can enjoy a lakeside promenade with views of the Alps, cafés, and the legendary Schweizerhofplatz square.',
  'Bus no. 14 to Lucerne station -- the boat leaves from the pier right out front.',
  'Landungsbrücke 1, 6003 Luzern', 47.051600, 8.309800, 'https://www.lakelucerne.ch', '+41 41 367 67 67',
  3, NULL, 10, '14',
  array['spring','summer','autumn'],
  array['personal-favorites','view','lake','mountain','romantic','photo-spot','family-friendly','splurge'],
  2
) on conflict (category, slug) do update set
  name = excluded.name, tagline = excluded.tagline, description = excluded.description,
  why_we_love_it = excluded.why_we_love_it, address = excluded.address,
  lat = excluded.lat, lng = excluded.lng, website = excluded.website, phone = excluded.phone,
  price_range = excluded.price_range, walk_time_min = excluded.walk_time_min,
  bike_time_min = excluded.bike_time_min, bus_route = excluded.bus_route,
  season = excluded.season, tags = excluded.tags, sort_order = excluded.sort_order;
