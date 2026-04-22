// Canonical content for the homepage. Matches the Alpine Quiet handoff.

export const HOME_IMG = {
  lucerne: "/images/lucerne-riverside.jpg",
  living: "/images/living-room.jpg",
  sofa: "/images/sofa.jpg",
  bed: "/images/bedroom.jpg",
  sofabed: "/images/sofa-bed.jpg",
  titlis: "/images/titlis.jpg",
  bike: "/images/bike-kapellbrucke.jpg",
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
  titleLead: string;   // before the comma
  titleTail: string;   // after the comma (italic accent)
  body: string;
  data: [string, string][];
};

export const SEASONS: Season[] = [
  {
    n: "01", key: "spring", name: "Spring", months: "Mar – May",
    img: HOME_IMG.orchard,
    titleLead: "Orchards in bloom",
    titleTail: " and the lake warming.",
    body: "Apple trees flowering above Kriens; long afternoons on the Ufschötti. The first ferries of the season across Lake Lucerne.",
    data: [["Avg. temp", "8 – 18°C"], ["Daylight", "13 h"], ["Best for", "Cycling · walks"]],
  },
  {
    n: "02", key: "summer", name: "Summer", months: "Jun – Aug",
    img: HOME_IMG.lucerne,
    titleLead: "Swims, slow dinners",
    titleTail: " and the longest evenings.",
    body: "The lake is warm, the cable cars run late, and Lucerne glows until 10pm. Bikes by the door, a bottle of wine in the fridge.",
    data: [["Avg. temp", "18 – 28°C"], ["Daylight", "16 h"], ["Best for", "Lake swims · hiking"]],
  },
  {
    n: "03", key: "autumn", name: "Autumn", months: "Sep – Nov",
    img: HOME_IMG.titlis,
    titleLead: "Clear peaks, Föhn light",
    titleTail: " and quiet cafés.",
    body: "The clearest mountain views of the year. Golden light across the Pilatus ridge; old town cafés warm and empty on weekdays.",
    data: [["Avg. temp", "5 – 16°C"], ["Daylight", "11 h"], ["Best for", "Photography · peaks"]],
  },
  {
    n: "04", key: "winter", name: "Winter", months: "Dec – Feb",
    img: HOME_IMG.bed,
    titleLead: "Snow on the rooftops",
    titleTail: " wool on the couch.",
    body: "Wake up to white-dusted Alps. Ski day trips to Engelberg by train; home by 5 for mulled wine and a hot bath.",
    data: [["Avg. temp", "-2 – 6°C"], ["Daylight", "9 h"], ["Best for", "Ski trips · reading"]],
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
    n: "№ 02", kicker: "A walk", date: "April 2026", img: HOME_IMG.orchard,
    title: "The Sonnenberg loop: two hours above the rooftops.",
    body: "From the front door, up through the orchards, and back down via the funicular. An afternoon that makes the apartment feel like a basecamp.",
  },
  {
    n: "№ 03", kicker: "A view", date: "May 2026", img: HOME_IMG.titlis,
    title: "Five minutes of morning alpenglow on Rigi.",
    body: "A short film from the window, every day at 6:42. A reason to wake up on holiday.",
  },
];

export type Guest = { q: string; who: string; where: string };

export const GUESTS: Guest[] = [
  {
    q: "Arrived on a Friday evening and forgot everything else by Sunday morning. The view alone is worth the flight.",
    who: "Elena & Marco", where: "Milan · November 2025",
  },
  {
    q: "Every detail has been considered — the linens, the music, the little guide tucked in the drawer. A rare, quiet place.",
    who: "Sophie B.", where: "Paris · September 2025",
  },
  {
    q: "We took the bikes out every morning. Ten minutes to the old town, and a completely different city by the time we got back.",
    who: "James & Hana", where: "London · July 2025",
  },
];

export type FaqItem = { n: string; q: string; a: string };

export const FAQ: FaqItem[] = [
  {
    n: "01", q: "What are the check-in and check-out times?",
    a: "Self check-in from 15:00 on arrival day; check-out by 11:00. Late check-out is usually possible for a small fee — just ask.",
  },
  {
    n: "02", q: "Are the vintage bikes included in the stay?",
    a: "Yes, both bikes are yours for the duration of your stay, along with helmets, locks and a small laminated guide to our favourite café stops.",
  },
  {
    n: "03", q: "Is the apartment suitable for children or pets?",
    a: "Children are very welcome; we keep a small travel cot and high chair on hand. Pets are considered case-by-case — please write to us first.",
  },
  {
    n: "04", q: "How do I get there from Zurich Airport?",
    a: "One hour by direct train to Luzern Bahnhof, then a ten-minute taxi or the №1 bus to Kriens. Our full arrival guide is sent by email two days before.",
  },
  {
    n: "05", q: "What is your cancellation policy?",
    a: "Free cancellation up to 14 days before arrival; 50% refund up to 7 days before. For longer stays and peak-season weeks we occasionally offer flexible terms.",
  },
];
