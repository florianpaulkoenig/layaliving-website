// ─────────────────────────────────────────────────────────────────────────────
// guest-guide-data.ts — apartment info and FAQ for the guest guide page
// Edit values here directly. The guest guide page reads from this file.
// ─────────────────────────────────────────────────────────────────────────────

export const apartment = {
  name: "Laya Living",
  address: {
    street: "Nidfeldstrasse 2G",
    postal: "6010",
    city: "Kriens",
    country: "Switzerland",
    floor: "6th floor",
    elevator: true,
  },
  wifi: {
    network: "Laya",
    password: "Layaliving4512!",
  },
  checkin: {
    from: "15:00",
    until: "11:00",
  },
  host: {
    name: "Elin & Florian",
    email: "info@layaliving.ch",
  },
};

// ── FAQ ───────────────────────────────────────────────────────────────────────

export type FaqEntry = {
  id: number;
  category: string;
  question: string;
  answer: string;
  keywords?: string;
  attachments?: { label: string; url: string }[];
};

export type FaqCategory = {
  id: string;
  label: string;
};

export const FAQ_CATEGORIES: FaqCategory[] = [
  { id: "checkin",        label: "Check-in/out" },
  { id: "wifi",           label: "WiFi" },
  { id: "location",       label: "Location" },
  { id: "apartment",      label: "Apartment" },
  { id: "heating",        label: "Heating" },
  { id: "shower",         label: "Shower" },
  { id: "light",          label: "Light" },
  { id: "windows",        label: "Windows" },
  { id: "electronics",    label: "Electronics" },
  { id: "manuals",        label: "Manuals" },
  { id: "houserules",     label: "House rules" },
  { id: "waste",          label: "Waste" },
  { id: "parking",        label: "Parking" },
  { id: "getting-there",  label: "Getting there" },
  { id: "recommendations", label: "Recommendations" },
  { id: "help",           label: "Help & Contact" },
];

export const FAQ: FaqEntry[] = [
  // ── Check-in / Check-out ──────────────────────────────────────────────────
  {
    id: 1, category: "checkin",
    question: "What time can I check in and check out?",
    answer: "Check-in: from 15:00 (3:00 PM)\nCheck-out: by 11:00 AM\n\nNeed an early check-in or late check-out? Just let us know — we'll do our best.",
    keywords: "checkin checkout time arrival departure 15:00 11:00 early late",
  },
  {
    id: 2, category: "checkin",
    question: "How does self check-in work?",
    answer: "Before your arrival, you'll receive the keybox code by message. Inside the mailbox labelled 'Laya' at the main entrance, you'll find the key. The key opens both the building entrance and the apartment door.",
    keywords: "key box code mailbox entrance self-checkin",
  },
  {
    id: 36, category: "checkin",
    question: "What do I need to do before I check out?",
    answer: "1. Place the key back in the keybox inside the mailbox labelled 'Laya' at the main entrance — the same place you found it.\n2. Leave the dishes cleaned or run the dishwasher.\n3. Dispose of any remaining rubbish in the bins near the roundabout.\n4. Close all windows and blinds.\n5. Switch off the lights.\n\nThat's it — thank you! We hope you had a wonderful stay.",
    keywords: "checkout check-out key return rubbish clean windows lights",
  },
  {
    id: 34, category: "checkin",
    question: "What's waiting for you on arrival?",
    answer: "We've put together a small welcome package to make you feel at home.\n\nIn the fridge you'll find refreshments: sparkling mineral water, and Swiss soft drinks including Rivella — a classic Swiss drink made from whey, worth trying if you haven't before. Still water of excellent quality is available directly from the tap.\n\nFor those arriving hungry after a long journey, we've also left pasta and pesto, plus some chips and chocolate as a small snack.\n\nWe hope it brings a little joy and makes you feel right at home from the moment you arrive.",
    keywords: "welcome drinks fridge pasta snack rivella mineral water food arrival",
  },
  {
    id: 30, category: "checkin",
    question: "What is the cancellation policy?",
    answer: "Short stays: free cancellation up to 5 days before check-in. Long stays (28+ nights): free cancellation up to 30 days before check-in. After that, the standard policy applies.",
    keywords: "cancellation cancel policy refund",
  },

  // ── WiFi ──────────────────────────────────────────────────────────────────
  {
    id: 8, category: "wifi",
    question: "What is the WiFi network and password?",
    answer: "Network and password are on the Quick Card at the top of this page. Fast WiFi throughout the apartment.",
    keywords: "wifi wlan internet network password connection",
  },

  // ── Location ──────────────────────────────────────────────────────────────
  {
    id: 3, category: "location",
    question: "Where is the apartment?",
    answer: "Nidfeldstrasse 2G, 6010 Kriens — about 10 minutes from Lucerne by bus 14, or 10 minutes from the Mattenhof S-Bahn stop on foot.",
    keywords: "location address standort kriens luzern lucerne where",
  },
  {
    id: 4, category: "location",
    question: "Is there a lift?",
    answer: "Yes — there is a lift to the apartment.",
    keywords: "elevator lift floor access",
  },

  // ── Apartment ─────────────────────────────────────────────────────────────
  {
    id: 5, category: "apartment",
    question: "What beds are there?",
    answer: "One double bed (160 cm) in the bedroom, and a sofa bed in the living room. The apartment sleeps up to 4 guests.",
    keywords: "beds sofa bett doppelbett double guests 4 four",
  },
  {
    id: 6, category: "apartment",
    question: "Is the kitchen fully equipped?",
    answer: "Yes — induction hob and oven, microwave, dishwasher, coffee machine, kettle, toaster, rice cooker, fridge and freezer. Cookware, utensils, plates, glasses, cutlery. Basic spices and oil. Salt and pepper.\n\nNote: the induction hob only activates when a suitable pan is placed on the cooking zone. All pans in the apartment are induction-compatible.",
    keywords: "kitchen kochen cook oven dishwasher coffee kettle fridge freezer induction",
  },
  {
    id: 7, category: "apartment",
    question: "Are towels and toiletries provided?",
    answer: "Yes — fresh towels, shampoo, conditioner, soap, and toilet paper. Hairdryer and hair straightener in the bathroom.",
    keywords: "towels shampoo soap hairdryer bath toiletries",
  },
  {
    id: 35, category: "apartment",
    question: "Where is the safety equipment?",
    answer: "First aid kit, fire extinguisher, and fire blanket are all located in the wardrobe.",
    keywords: "first aid fire extinguisher safety emergency wardrobe",
  },
  {
    id: 37, category: "apartment",
    question: "Is there an iron and ironing board?",
    answer: "Yes — an iron and ironing board are available in the apartment.",
    keywords: "iron ironing board clothes",
  },
  {
    id: 38, category: "apartment",
    question: "Is the apartment suitable for families with young children?",
    answer: "Yes — a travel cot for babies up to 18 months is available on request. Just let us know before you arrive and we'll have it set up for you.",
    keywords: "baby cot children family infant 18 months",
  },

  // ── Heating ───────────────────────────────────────────────────────────────
  {
    id: 9, category: "heating",
    question: "How do I adjust the heating or cooling?",
    answer: "The thermostat is on the living room wall. It's a reversible system — it heats in winter and cools in summer. Floor heating reacts slowly, so adjust well in advance and give it time to settle.",
    keywords: "heating cooling thermostat temperature warm cold klima floor heating",
  },

  // ── Shower ────────────────────────────────────────────────────────────────
  {
    id: 10, category: "shower",
    question: "Note on the shower temperature control",
    answer: "The shower has a temperature safety button — there's a small button or lever that limits how far you can turn toward hot. Press or lift it to override and go hotter if needed.",
    keywords: "shower bath water hot cold temperature safety button",
  },

  // ── Light ─────────────────────────────────────────────────────────────────
  {
    id: 11, category: "light",
    question: "Helpful tips about the lighting",
    answer: "The bedroom has two dimmable lights.\n\n1. One is controlled by a remote — you'll find it above the light switch.\n2. The other dims by clicking the wall switch multiple times in quick succession.",
    keywords: "light lamp dimmer switch bulb",
  },

  // ── Windows ───────────────────────────────────────────────────────────────
  {
    id: 12, category: "windows",
    question: "How do the windows and blinds work?",
    answer: "The blinds are electric — use the wall switch to raise or lower them.\n\nPlease always close the windows when leaving the apartment and during rainfall. The weather in Lucerne can change quickly.",
    keywords: "windows blinds balcony ventilation tilt-turn",
  },

  // ── Electronics ───────────────────────────────────────────────────────────
  {
    id: 13, category: "electronics",
    question: "Is there a TV?",
    answer: "Yes — there is a TV in the living room.",
    keywords: "tv television remote streaming netflix",
  },
  {
    id: 14, category: "electronics",
    question: "Is there a coffee machine?",
    answer: "Yes — there is a coffee machine in the kitchen. Coffee capsules, creamer, and sugar are provided for your arrival.",
    keywords: "coffee espresso machine capsules pods nespresso",
  },

  // ── Manuals ───────────────────────────────────────────────────────────────
  {
    id: 15, category: "manuals",
    question: "Washing machine manual",
    answer: "PDF below. The detergent compartment is on the left. Use the eco programme for most loads (longer but cleaner and gentler).",
    attachments: [{ label: "Washing machine manual (PDF)", url: "/assets/manuals/washing-machine.pdf" }],
    keywords: "washing machine laundry detergent",
  },
  {
    id: 16, category: "manuals",
    question: "Dryer manual",
    answer: "PDF below. Clean the lint filter after each cycle (the apartment can fill with steam otherwise).",
    attachments: [{ label: "Dryer manual (PDF)", url: "/assets/manuals/dryer.pdf" }],
    keywords: "dryer tumbler laundry lint",
  },
  {
    id: 17, category: "manuals",
    question: "Oven manual",
    answer: "PDF below.",
    attachments: [{ label: "Oven manual (PDF)", url: "/assets/manuals/oven.pdf" }],
    keywords: "oven baking roasting",
  },
  {
    id: 18, category: "manuals",
    question: "Stove / cooktop manual",
    answer: "PDF below. The cooktop is induction — it only activates when a suitable pan is placed on the cooking zone. The pans in the apartment are all compatible.",
    attachments: [{ label: "Stove manual (PDF)", url: "/assets/manuals/stove.pdf" }],
    keywords: "stove cooktop induction",
  },
  {
    id: 32, category: "manuals",
    question: "Dishwasher manual",
    answer: "PDF below. Dishwasher tablets are under the sink. Run a full load before using the eco programme — half-loads waste more energy than they save.",
    attachments: [{ label: "Dishwasher manual (PDF)", url: "/assets/manuals/dishwasher.pdf" }],
    keywords: "dishwasher tablets abwasch",
  },
  {
    id: 33, category: "manuals",
    question: "Extractor hood manual",
    answer: "PDF below. Three fan speeds — the button on the right cycles through them. Please switch it on while cooking, and turn it off afterwards. The grease filter needs cleaning every few months.",
    attachments: [{ label: "Extractor hood manual (PDF)", url: "/assets/manuals/extractor-hood.pdf" }],
    keywords: "extractor hood ventilation kitchen",
  },

  // ── House rules ───────────────────────────────────────────────────────────
  {
    id: 19, category: "houserules",
    question: "Are pets allowed?",
    answer: "No — sorry. Pets aren't allowed.",
    keywords: "pets dog cat animal allowed",
  },
  {
    id: 20, category: "houserules",
    question: "Is smoking allowed?",
    answer: "No — smoking is not allowed inside the apartment. On the balcony only.",
    keywords: "smoking cigarette balcony",
  },
  {
    id: 21, category: "houserules",
    question: "Are parties or events allowed?",
    answer: "No parties, no events, no commercial filming or photography. The building is residential and we want to keep things calm for the neighbours.",
    keywords: "party event filming photography",
  },
  {
    id: 22, category: "houserules",
    question: "Are there quiet hours?",
    answer: "Quiet hours: 10:00 PM to 7:00 AM. On Sundays the whole day is technically a quiet day in Switzerland — no drilling, no loud music. Please be considerate of neighbours.",
    keywords: "quiet hours noise night sunday",
  },

  // ── Waste ─────────────────────────────────────────────────────────────────
  {
    id: 23, category: "waste",
    question: "How does waste and recycling work?",
    answer: "Communal bins are near the roundabout — bring your apartment key to access them. Switzerland separates strictly: paper, cardboard, glass (clear/green/brown), PET bottles, aluminium, regular household waste.\n\n**Household waste** must go in official blue Kriens garbage bags (Gebührensack) — sold at Migros, Coop and migrolino. The other streams are free.",
    keywords: "waste garbage recycling pet glass paper kehricht bags kriens",
  },

  // ── Parking ───────────────────────────────────────────────────────────────
  {
    id: 24, category: "parking",
    question: "Where can I park?",
    answer: "Public parking directly opposite the building. Around CHF 1 per hour.",
    keywords: "parking car public",
  },

  // ── Getting there ─────────────────────────────────────────────────────────
  {
    id: 25, category: "getting-there",
    question: "How do I get here by public transport?",
    answer: "From Lucerne train station, take bus 14 toward Horw Zentrum to 'Kriens, Nidfeld'. About 10 minutes on the bus, then a short walk to the building.",
    keywords: "bus 14 public transport nidfeld kriens luzern station",
  },
  {
    id: 26, category: "getting-there",
    question: "How do I get here from Zurich Airport?",
    answer: "Train to Luzern Bahnhof (about 80 minutes, usually direct), then bus 14 to Kriens, Nidfeld. A full arrival guide goes out by email two days before check-in.\n\n[Plan your journey on SBB.ch →](https://www.sbb.ch/en/buying/pages/fahrplan/fahrplan.xhtml?von=Z%C3%BCrich+Flughafen&nach=Kriens%2C+Nidfeld)",
    keywords: "zurich airport train arrival",
  },

  // ── Recommendations ───────────────────────────────────────────────────────
  {
    id: 31, category: "recommendations",
    question: "Where can I find local recommendations?",
    answer: "We've put together a guide with walks, boat trips, hikes, swimming spots, family options and seasonal suggestions.\n\n[Browse our recommendations → layaliving.ch/recommendations](https://layaliving.ch/recommendations)",
    keywords: "recommendations guide walks hikes excursions",
  },

  // ── Help & Contact ─────────────────────────────────────────────────────────
  {
    id: 27, category: "help",
    question: "How can I reach the host during my stay?",
    answer: "The best way to reach us is via chat on your booking platform — Airbnb or Booking.com. We're available daily from 09:00 to 18:00 and happy to help.",
    keywords: "contact host phone email message help",
  },
  {
    id: 28, category: "help",
    question: "Emergency numbers in Switzerland",
    answer: "**117** Police · **144** Ambulance · **118** Fire · **112** general EU emergency. All free to call from any phone. The nearest hospital is Luzerner Kantonsspital, about 10 minutes by car.",
    keywords: "emergency police ambulance fire hospital 117 144 118 112",
  },
  {
    id: 29, category: "help",
    question: "Pharmacy on Sundays or late at night",
    answer: "Bahnhof-Apotheke at Lucerne train station has the longest hours in the region and is open on Sundays. For everyday hours, Medbase Apotheke is at the Mattenhof complex (closed Sundays).",
    keywords: "pharmacy night sunday medication",
  },
];
