// Canonical content for the homepage. Matches the Alpine Quiet handoff.

export const HOME_IMG = {
  lucerne: "/images/summer-lucerne.jpg",
  hero: "/images/living-room.jpg",
  living: "/images/living-room-sofa.jpg",
  kitchen: "/images/kitchen.jpg",
  sofa: "/images/sofa.jpg",
  bed: "/images/bedroom.jpg",
  sofabed: "/images/sofa-bed.jpg",
  naturalLight: "/images/natural-light.jpg",
  bike: "/images/bikes-rental.jpg",
  orchard: "/images/orchard.jpg",
} as const;

export type Pick = {
  n: string;
  name: string;
  kind: string;
  dist: string;
  x: number; // % of map viewBox
  y: number;
};

export const PICKS: Pick[] = [
  { n: "01", name: "Café Rössli",        kind: "Breakfast · Kriens",   dist: "3 min walk",   x: 48, y: 52 },
  { n: "02", name: "Osteria Primavera",  kind: "Dinner · Old town",    dist: "12 min bike",  x: 58, y: 38 },
  { n: "03", name: "Weinhandel Am See",  kind: "Natural wine",         dist: "14 min bike",  x: 62, y: 42 },
  { n: "04", name: "Helvetia Bakehouse", kind: "Sourdough · Pastry",   dist: "9 min bike",   x: 54, y: 46 },
  { n: "05", name: "Pilatus Talstation", kind: "Cable car · Mountain", dist: "6 min walk",   x: 42, y: 62 },
  { n: "06", name: "Rigi Kaltbad",       kind: "Thermal bath",         dist: "40 min ferry", x: 72, y: 22 },
  { n: "07", name: "Bourbaki Kino",      kind: "Arthouse cinema",      dist: "15 min bike",  x: 60, y: 34 },
];

export type Season = {
  n: string;
  key: "spring" | "summer" | "autumn" | "winter";
  name: string;
  months: string;
  img: string;
  imgCredit?: string;
  titleLead: string;
  titleTail: string;
  body: string;
  data: [string, string][];
};

export const SEASONS: Season[] = [
  {
    n: "01", key: "spring", name: "Spring", months: "Mar – May",
    img: "/images/spring-lucerne.jpg",
    imgCredit: "Photo: Ricardo Gómez Angel / Unsplash",
    titleLead: "Orchards in bloom",
    titleTail: " and the lake warming.",
    body: "Apple trees flowering above Kriens; long afternoons on the Ufschötti. The fresh, clean morning air carries the scent of blossoms down from the hills — perfect weather for setting out on foot. Warm afternoons invite lazy hours by the lake, while the surrounding trails come alive with colour. Spring in Lucerne means ideal conditions for day hikes, from easy lakeside paths to the first clear summits of the season. The first ferries of the year return to Lake Lucerne, and the city stretches back into life.",
    data: [["Day Temp. Range", "5 – 25°C"], ["Daylight", "13 h"], ["Best for", "Cycling · hikes"]],
  },
  {
    n: "02", key: "summer", name: "Summer", months: "Jun – Aug",
    img: "/images/summer-lucerne.jpg",
    imgCredit: "Photo: PJ Soans / Unsplash",
    titleLead: "Swims, slow dinners",
    titleTail: " and the longest evenings.",
    body: "The lake is warm, the cable cars run late, and Lucerne glows until 10pm. Spend your mornings with a coffee at the water's edge, watching the mountains catch the early light. Afternoons belong to the lake — swimming at the Lido or drifting by paddle board. Evenings stretch long: drinks on the terrace, dinners that spill outside, and warm nights where nobody wants to go in. The Rigi is at its greenest, and the whole city feels like it's holding its breath before summer slips away.",
    data: [["Day Temp. Range", "18 – 32°C"], ["Daylight", "16 h"], ["Best for", "Lake swims · terrace"]],
  },
  {
    n: "03", key: "autumn", name: "Autumn", months: "Sep – Nov",
    img: "/images/autumn-lucerne.jpg",
    imgCredit: "Photo: Taisha Ellison / Unsplash",
    titleLead: "Clear peaks, Föhn light",
    titleTail: " and quiet cafés.",
    body: "Autumn brings the clearest mountain views of the year — the Föhn sweeps in and sharpens the horizon so the peaks look almost close enough to touch. Take the train to Interlaken for a dramatic day in the Bernese Oberland, or explore the old town of Lucerne now that the summer crowds have thinned. The cafés are warm and quiet on weekday mornings, and the hiking trails are at their most photogenic: golden light, empty paths, and air that feels like it was made for walking. A season for going slowly and seeing more.",
    data: [["Day Temp. Range", "5 – 20°C"], ["Daylight", "11 h"], ["Best for", "Hiking · day trips"]],
  },
  {
    n: "04", key: "winter", name: "Winter", months: "Dec – Feb",
    img: "/images/winter-lucerne.jpg",
    imgCredit: "Photo: Kuno Schweizer / Unsplash",
    titleLead: "Snow on the rooftops",
    titleTail: " and wool on the couch.",
    body: "Wake up to white-dusted Alps and take the train to Engelberg for a full ski day on Mount Titlis — the slopes are just over half an hour away. For something closer, winter hikes on Mount Pilatus offer remarkable views and far fewer crowds than the summer season. Back in Lucerne, wander the Christmas markets along the Reuss for Glühwein and roasted chestnuts, or settle in for a long fondue night in one of the old town's candlelit restaurants. The apartment — always warm, always cosy — is ready whenever you return.",
    data: [["Day Temp. Range", "-2 – 8°C"], ["Daylight", "9 h"], ["Best for", "Ski · Christmas markets"]],
  },
];

export type JournalEntry = {
  n: string;
  kicker: string;
  date: string;
  img: string;
  title: string;
  body: string;
};

export const JOURNAL: JournalEntry[] = [
  {
    n: "№ 01", kicker: "Recipe", date: "March 2026", img: HOME_IMG.sofa,
    title: "A rösti for cold mornings, the way our neighbour taught us.",
    body: "Grated potato, a knob of butter, patience. Three ingredients, one pan, twenty quiet minutes before the Pilatus clears.",
  },
  {
    n: "№ 02", kicker: "A walk", date: "April 2026", img: "/images/spring-lucerne.jpg",
    title: "The Sonnenberg loop: two hours above the rooftops.",
    body: "From the front door, up through the orchards, and back down via the funicular. An afternoon that makes the apartment feel like a basecamp.",
  },
  {
    n: "№ 03", kicker: "A view", date: "May 2026", img: "/images/balcony-view.jpg",
    title: "Five minutes of morning alpenglow on Rigi.",
    body: "A short film from the window, every day at 6:42. A reason to wake up on holiday.",
  },
];

export type Guest = { q: string; who: string; where: string };

export const GUESTS: Guest[] = [
  {
    q: "One of the best places we have stayed in a long time. Such meticulous arrangements and amenities — every small detail is taken care of. Such a cosy and tastefully done-up place.",
    who: "Vani G.", where: "India · August 2025",
  },
  {
    q: "The thinking of all the small details made us feel at home. We loved how clean, cosy and well decorated the place is. We will definitely recommend it for family and friends.",
    who: "Noga, Yael & Renana", where: "Israel · July 2025",
  },
  {
    q: "We thoroughly enjoyed our cosy stay in your tastefully decorated apartment and appreciate all the thoughtful amenities. Looking forward to coming back in the near future.",
    who: "Annamaria & Deborah", where: "October 2025",
  },
];

export type FaqItem = { n: string; q: string; a: string };

export const FAQ: FaqItem[] = [
  {
    n: "01", q: "What are the check-in and check-out times?",
    a: "Self check-in from 15:00 on arrival day; check-out by 11:00. Late check-out is usually possible for a small fee — just ask.",
  },
  {
    n: "02", q: "Are bikes available?",
    a: "Bikes are available to rent just a few minutes from the apartment. We're happy to point you to the nearest rental spot — just ask.",
  },
  {
    n: "03", q: "Is the apartment suitable for children or pets?",
    a: "Children are very welcome; we keep a small travel cot and high chair on hand. Pets are considered case-by-case — please write to us first.",
  },
  {
    n: "04", q: "How do I get there from Zurich Airport?",
    a: "One hour by direct train to Luzern Bahnhof, then a ten-minute taxi or the №14 bus to Kriens, Nidfeld. Our full arrival guide is sent by email two days before.",
  },
  {
    n: "05", q: "What is your cancellation policy?",
    a: "Free cancellation up to 14 days before arrival; 50% refund up to 7 days before. For longer stays and peak-season weeks we occasionally offer flexible terms.",
  },
];
