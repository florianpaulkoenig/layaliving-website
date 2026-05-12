/**
 * Seed script — populates Sanity with existing site content.
 * Run with:  npx tsx scripts/seed-sanity.ts
 *
 * Requires NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local (or as env var).
 * Also needs SANITY_API_TOKEN with write access — set it:
 *   export SANITY_API_TOKEN=sk...
 */

import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const token = process.env.SANITY_API_TOKEN;

if (!projectId) {
  console.error("❌  NEXT_PUBLIC_SANITY_PROJECT_ID is not set in .env.local");
  process.exit(1);
}
if (!token) {
  console.error("❌  SANITY_API_TOKEN is not set. Get one from sanity.io/manage → your project → API → Tokens → Add API token (Editor)");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

// ── Helpers ───────────────────────────────────────────────────────────────────

function block(text: string): object {
  return {
    _type: "block",
    _key: Math.random().toString(36).slice(2),
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: Math.random().toString(36).slice(2), text, marks: [] }],
  };
}

function blocks(...lines: string[]): object[] {
  return lines.map(block);
}

// ── FAQ ───────────────────────────────────────────────────────────────────────

const faqDocument = {
  _id: "faq",
  _type: "faq",
  groups: [
    {
      _key: "check-in",
      topic: "Check-in & Check-out",
      items: [
        {
          _key: "01",
          n: "01",
          question: "What time can I check in and check out?",
          answer: blocks("Check-in is available anytime from 3:00 PM onwards. Check-out is until 11:00 AM on your departure day. If you need an early check-in or late check-out, feel free to reach out — while we can't guarantee it, we'll always do our best to help."),
        },
        {
          _key: "02",
          n: "02",
          question: "How does self check-in work?",
          answer: blocks('On your arrival day, you\'ll receive the key box code shortly before check-in. The key box is located inside the mailbox labeled "Laya" at the main entrance of Nidfeldstrasse 2G, 6010 Kriens. The key inside opens both the building entrance and the apartment door.'),
        },
      ],
    },
    {
      _key: "apartment",
      topic: "The Apartment",
      items: [
        {
          _key: "03",
          n: "03",
          question: "Where is the apartment located?",
          answer: blocks("The apartment is in the peaceful and modern neighbourhood of Kriens near Lucerne — perfectly situated for both relaxation and adventure. You'll enjoy quick access to Lucerne's city centre, Lake Lucerne, the Swiss mountains, and many beautiful excursion destinations nearby."),
        },
        {
          _key: "04",
          n: "04",
          question: "Is the apartment easy to access?",
          answer: blocks("The apartment is on the 6th floor (top floor) and is comfortably reached by elevator."),
        },
        {
          _key: "05",
          n: "05",
          question: "How many guests can stay in the apartment?",
          answer: blocks("The apartment comfortably accommodates up to 4 guests — ideal for couples, small families, friends, or business travellers looking for a cosy and relaxing stay."),
        },
        {
          _key: "06",
          n: "06",
          question: "Is Wi-Fi included?",
          answer: blocks("Yes — fast and reliable high-speed Wi-Fi is included free of charge throughout the apartment. Whether you're working remotely, streaming, or planning your next adventure, you'll stay well connected."),
        },
        {
          _key: "07",
          n: "07",
          question: "Is the kitchen fully equipped?",
          answer: blocks("Yes — the kitchen has everything you need to feel at home. You'll find a stove and oven, microwave, dishwasher, coffee machine, kettle, toaster, rice cooker, refrigerator and freezer, plus cooking essentials and utensils. Perfect for everything from a quick breakfast to a cosy dinner at home."),
        },
        {
          _key: "08",
          n: "08",
          question: "Are towels and toiletries provided?",
          answer: blocks("Fresh towels, shampoo, conditioner, and a hairdryer are all provided for your comfort and convenience."),
        },
      ],
    },
    {
      _key: "house-rules",
      topic: "House Rules",
      items: [
        {
          _key: "09",
          n: "09",
          question: "Are pets allowed?",
          answer: blocks("As much as we love animals, pets are unfortunately not allowed in the apartment. Thank you for your understanding."),
        },
        {
          _key: "10",
          n: "10",
          question: "Is smoking allowed?",
          answer: blocks("Smoking is only permitted on the balcony. To keep the apartment fresh and comfortable for all guests, smoking inside the apartment is strictly prohibited."),
        },
        {
          _key: "11",
          n: "11",
          question: "Are parties or events allowed?",
          answer: blocks("To ensure a calm and enjoyable atmosphere for everyone in the building, parties, events, and commercial filming or photography are not permitted. We truly appreciate your understanding and respect for the neighbourhood."),
        },
        {
          _key: "12",
          n: "12",
          question: "Are there quiet hours?",
          answer: blocks("Quiet hours are between 10:00 PM and 7:00 AM. We kindly ask all guests to help maintain the peaceful environment that makes the building so pleasant for everyone."),
        },
      ],
    },
    {
      _key: "getting-there",
      topic: "Getting There & Around",
      items: [
        {
          _key: "13",
          n: "13",
          question: "How can I reach the apartment using public transportation?",
          answer: blocks("Take bus B14 towards Horw Zentrum and exit at Kriens, Nidfeld. The journey from Lucerne train station takes approximately 10 minutes, and the apartment is just a short walk from the bus stop."),
        },
        {
          _key: "14",
          n: "14",
          question: "Is parking available nearby?",
          answer: blocks("Convenient public parking is available directly opposite the building. Rates are approximately CHF 1 per hour — easy if you're arriving by car and planning day trips around Switzerland."),
        },
        {
          _key: "15",
          n: "15",
          question: "How do I get there from Zurich Airport?",
          answer: blocks("About 80 minutes by direct train to Luzern Bahnhof, then approximately 10 minutes by bus No. 14 to Kriens, Nidfeld. Our full arrival guide is sent by email two days before check-in."),
        },
      ],
    },
    {
      _key: "booking",
      topic: "Booking & Cancellation",
      items: [
        {
          _key: "16",
          n: "16",
          question: "What is your cancellation policy?",
          answer: blocks("For short stays: free cancellation up to 5 days before check-in. For long stays (28+ nights): free cancellation up to 30 days before check-in. After these periods, the standard cancellation policy applies."),
        },
      ],
    },
    {
      _key: "recommendations",
      topic: "Recommendations & Activities",
      items: [
        {
          _key: "17",
          n: "17",
          question: "Do you provide local travel recommendations?",
          answer: blocks("Yes — we'd love to share our favourite places with you. We've created a guide with handpicked recommendations: scenic viewpoints, restaurants and cafés, day trips, hidden gems, mountain excursions, and local experiences. Browse our recommendations page for the full list."),
        },
        {
          _key: "18",
          n: "18",
          question: "What are the best things to do near the apartment?",
          answer: blocks("There's so much to explore. Guest favourites include Lucerne's beautiful old town, Mount Pilatus and Mount Rigi, Lake Lucerne boat cruises, scenic Alpine hikes, winter sports, and cosy local restaurants. See all our picks on the recommendations page."),
        },
        {
          _key: "19",
          n: "19",
          question: "Can you recommend restaurants or cafés nearby?",
          answer: blocks("Several wonderful restaurants, bakeries, cafés, and supermarkets are within walking distance. We've collected our favourites on our recommendations page."),
        },
        {
          _key: "20",
          n: "20",
          question: "Do you have recommendations for couples or families?",
          answer: blocks("Whether you're planning a romantic getaway, a family holiday, or a relaxing trip with friends, there's something for everyone. From scenic excursions to family-friendly activities and hidden local gems, we've put together our favourite experiences for every kind of traveller."),
        },
      ],
    },
  ],
};

// ── Site Content ──────────────────────────────────────────────────────────────

const siteContentDocument = {
  _id: "siteContent",
  _type: "siteContent",
  heroParagraph:
    "A thoughtfully designed top-floor apartment in Kriens — quiet, comfortable, and well connected. The old town is ten minutes by bus, and Pilatus, Rigi and Engelberg are all within easy reach by train.",
  seasons: [
    {
      _key: "spring",
      key: "spring",
      name: "Spring",
      months: "Mar – May",
      titleLead: "Orchards in bloom",
      titleTail: " and the lake warming.",
      body: "Apple trees flowering above Kriens; long afternoons on the Ufschötti. The fresh, clean morning air carries the scent of blossoms down from the hills — perfect weather for setting out on foot. Warm afternoons invite lazy hours by the lake, while the surrounding trails come alive with colour. Spring in Lucerne means ideal conditions for day hikes, from easy lakeside paths to the first clear summits of the season. The first ferries of the year return to Lake Lucerne, and the city stretches back into life.",
    },
    {
      _key: "summer",
      key: "summer",
      name: "Summer",
      months: "Jun – Aug",
      titleLead: "Swims, slow dinners",
      titleTail: " and the longest evenings.",
      body: "The lake is warm, the cable cars run late, and Lucerne glows until 10pm. Spend your mornings with a coffee at the water's edge, watching the mountains catch the early light. Afternoons belong to the lake — swimming at the Lido or drifting by paddle board. Evenings stretch long: drinks on the terrace, dinners that spill outside, and warm nights where nobody wants to go in. The Rigi is at its greenest, and the whole city feels like it's holding its breath before summer slips away.",
    },
    {
      _key: "autumn",
      key: "autumn",
      name: "Autumn",
      months: "Sep – Nov",
      titleLead: "Clear peaks, Föhn light",
      titleTail: " and quiet cafés.",
      body: "Autumn brings the clearest mountain views of the year — the Föhn sweeps in and sharpens the horizon so the peaks look almost close enough to touch. Take the train to Interlaken for a dramatic day in the Bernese Oberland, or explore the old town of Lucerne now that the summer crowds have thinned. The cafés are warm and quiet on weekday mornings, and the hiking trails are at their most photogenic: golden light, empty paths, and air that feels like it was made for walking. A season for going slowly and seeing more.",
    },
    {
      _key: "winter",
      key: "winter",
      name: "Winter",
      months: "Dec – Feb",
      titleLead: "Snow on the rooftops",
      titleTail: " and wool on the couch.",
      body: "Wake up to white-dusted Alps and take the train to Engelberg for a full ski day on Mount Titlis — the slopes are just over half an hour away. For something closer, winter hikes on Mount Pilatus offer remarkable views and far fewer crowds than the summer season. Back in Lucerne, wander the Christmas markets along the Reuss for Glühwein and roasted chestnuts, or settle in for a long fondue night in one of the old town's candlelit restaurants. The apartment — always warm, always cosy — is ready whenever you return.",
    },
  ],
  guestReviews: [
    {
      _key: "g1",
      quote: "One of the best places we have stayed in a long time. Such meticulous arrangements and amenities — every small detail is taken care of. Such a cosy and tastefully done-up place.",
      who: "Vani G.",
      where: "India · August 2025",
    },
    {
      _key: "g2",
      quote: "The thinking of all the small details made us feel at home. We loved how clean, cosy and well decorated the place is. We will definitely recommend it for family and friends.",
      who: "Noga, Yael & Renana",
      where: "Israel · July 2025",
    },
    {
      _key: "g3",
      quote: "We thoroughly enjoyed our cosy stay in your tastefully decorated apartment and appreciate all the thoughtful amenities. Looking forward to coming back in the near future.",
      who: "Annamaria & Deborah",
      where: "October 2025",
    },
  ],
};

// ── Run ───────────────────────────────────────────────────────────────────────

async function seed() {
  console.log(`🌱  Seeding Sanity project "${projectId}"…\n`);

  try {
    await client.createOrReplace(faqDocument);
    console.log("✅  FAQ document created/updated");
  } catch (e) {
    console.error("❌  Failed to seed FAQ:", e);
  }

  try {
    await client.createOrReplace(siteContentDocument);
    console.log("✅  Site content document created/updated");
  } catch (e) {
    console.error("❌  Failed to seed site content:", e);
  }

  console.log("\n🎉  Done! Open /studio to review the content.");
}

seed();
