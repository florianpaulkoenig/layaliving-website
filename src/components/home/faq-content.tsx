import Link from "next/link";
import type { ReactNode } from "react";

export type FaqItem = { n: string; q: string; a: ReactNode };
export type FaqGroup = { topic: string; items: FaqItem[] };

export const FAQ_GROUPS: FaqGroup[] = [
  {
    topic: "Check-in & Check-out",
    items: [
      {
        n: "01",
        q: "What time can I check in and check out?",
        a: "Check-in from 3:00 PM. Check-out by 11:00 AM. If you need an early check-in or late check-out, just ask — we'll do our best.",
      },
      {
        n: "02",
        q: "How does self check-in work?",
        a: "The apartment has a self check-in system — no need to meet us in person. You'll receive full arrival instructions, including access details, by message two days before check-in.",
      },
      {
        n: "03",
        q: "What is the cancellation policy?",
        a: (
          <>
            Short stays: free cancellation up to <strong>5 days</strong> before check-in. Long stays (28+ nights): free cancellation up to <strong>30 days</strong> before check-in. After that, the standard policy applies.
          </>
        ),
      },
    ],
  },
  {
    topic: "The Apartment",
    items: [
      {
        n: "04",
        q: "Where is the apartment?",
        a: "The apartment is in the Nidfeldquartier in Kriens — about 10 minutes from Lucerne by bus 14.",
      },
      {
        n: "05",
        q: "Is there a lift to the apartment?",
        a: "Yes — there is a lift.",
      },
      {
        n: "06",
        q: "How many guests can stay?",
        a: "Up to 4 guests — one bedroom with a double bed, plus a sofa bed in the living room that sleeps two.",
      },
      {
        n: "07",
        q: "Is WiFi included?",
        a: "Yes — fast WiFi throughout the apartment, free of charge. Network details are in the apartment.",
      },
      {
        n: "08",
        q: "Is the kitchen fully equipped?",
        a: "Yes — induction hob and oven, microwave, dishwasher, coffee machine, kettle, toaster, rice cooker, fridge and freezer. Cookware, utensils, plates, glasses, cutlery. Basic spices and oil. Note: the induction cooktop only activates when a suitable pan is placed on the cooking zone.",
      },
      {
        n: "09",
        q: "Are towels and toiletries provided?",
        a: "Yes — fresh towels, shampoo, conditioner, soap, and a hairdryer.",
      },
    ],
  },
  {
    topic: "House Rules",
    items: [
      {
        n: "10",
        q: "Are pets allowed?",
        a: "No — pets are not allowed in the apartment.",
      },
      {
        n: "11",
        q: "Is smoking allowed?",
        a: "No — smoking is not allowed inside the apartment. On the balcony only.",
      },
      {
        n: "12",
        q: "Are parties or events allowed?",
        a: "No parties, no events, no commercial filming or photography. The building is residential — please be considerate of neighbours.",
      },
      {
        n: "13",
        q: "Are there quiet hours?",
        a: "Quiet hours: 10:00 PM to 7:00 AM. Sundays are also a quiet day in Switzerland — no drilling or loud music. Please be considerate.",
      },
    ],
  },
  {
    topic: "Getting There & Around",
    items: [
      {
        n: "14",
        q: "How do I get here by public transport?",
        a: (
          <>
            From Lucerne train station, take bus <strong>14</strong> toward Horw Zentrum to <strong>Kriens, Nidfeld</strong>. About 10 minutes on the bus, then a short walk to the building.{" "}
            <a href="https://www.sbb.ch/en/buying/pages/fahrplan/fahrplan.xhtml?von=Luzern&nach=Kriens%2C+Nidfeld" target="_blank" rel="noopener noreferrer">Plan your journey on SBB.ch →</a>
          </>
        ),
      },
      {
        n: "15",
        q: "Is parking available?",
        a: (
          <>
            Public parking directly opposite the building. Around CHF 1 per hour.{" "}
            <a href="https://www.google.com/maps/place/Parkhaus/@47.0298966,8.2923184,17z/data=!4m10!1m2!2m1!1sparking!3m6!1s0x478ffb349c55af9d:0x71480fd8796ad7b7!8m2!3d47.0298966!4d8.297082!15sCgdwYXJraW5nWgkiB3BhcmtpbmeSAQ5wYXJraW5nX2dhcmFnZZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VOb2VGOXFlRzlSUlJBQuABAPoBBAgAEEA!16s%2Fg%2F11jnqj0s52?entry=ttu" target="_blank" rel="noopener noreferrer">View on Google Maps →</a>
          </>
        ),
      },
      {
        n: "16",
        q: "How do I get here from Zurich Airport?",
        a: (
          <>
            Train to Luzern Bahnhof — about 80 minutes, usually direct. Then bus 14 to Kriens, Nidfeld. A full arrival guide goes out by message two days before check-in.{" "}
            <a href="https://www.sbb.ch/en/buying/pages/fahrplan/fahrplan.xhtml?von=Z%C3%BCrich+Flughafen&nach=Kriens%2C+Nidfeld" target="_blank" rel="noopener noreferrer">Plan your journey on SBB.ch →</a>
          </>
        ),
      },
    ],
  },
  {
    topic: "Good to Know",
    items: [
      {
        n: "19",
        q: "What's provided on arrival?",
        a: "As a small welcome gesture, you'll find a selection of drinks in the fridge. Coffee and tea are also provided in the kitchen.",
      },
      {
        n: "20",
        q: "Is the tap water safe to drink?",
        a: "Yes — Swiss tap water is of excellent quality and perfectly safe to drink.",
      },
      {
        n: "21",
        q: "Is there heating and cooling?",
        a: "Yes — the apartment has underfloor heating and a cooling system, so it's comfortable year-round.",
      },
      {
        n: "22",
        q: "Is safety equipment provided?",
        a: "Yes — the apartment is equipped with a first aid kit, fire extinguisher, and fire blanket.",
      },
      {
        n: "23",
        q: "How can I reach you during my stay?",
        a: "Via the chat on your booking platform. We're available daily from 09:00 to 18:00 and happy to help.",
      },
    ],
  },
  {
    topic: "Families & Special Requests",
    items: [
      {
        n: "17",
        q: "Is the apartment suitable for children?",
        a: "Yes — a travel cot for babies up to 18 months is available on request. Just let us know before you arrive.",
      },
      {
        n: "18",
        q: "Do you have local recommendations?",
        a: (
          <>
            Yes — we&apos;ve put together a guide with walks, hikes, boat trips, swimming spots, family options and seasonal suggestions.{" "}
            <Link href="/recommendations" className="underline underline-offset-2">
              Browse our recommendations &rarr;
            </Link>
          </>
        ),
      },
    ],
  },
];

// Flat list for backwards compat if needed
export const FAQ: FaqItem[] = FAQ_GROUPS.flatMap((g) => g.items);
