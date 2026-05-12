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
        a: "Check-in is available anytime from 3:00 PM onwards. Check-out is until 11:00 AM on your departure day. If you need an early check-in or late check-out, feel free to reach out — while we can't guarantee it, we'll always do our best to help.",
      },
      {
        n: "02",
        q: "How does self check-in work?",
        a: (
          <>
            On your arrival day, you&apos;ll receive the key box code shortly before check-in. The key box is located inside the mailbox labeled &ldquo;Laya&rdquo; at the main entrance of{" "}
            <strong>Nidfeldstrasse 2G, 6010 Kriens</strong>. The key inside opens both the building entrance and the apartment door.
          </>
        ),
      },
    ],
  },
  {
    topic: "The Apartment",
    items: [
      {
        n: "03",
        q: "Where is the apartment located?",
        a: "The apartment is in the peaceful and modern neighbourhood of Kriens near Lucerne — perfectly situated for both relaxation and adventure. You'll enjoy quick access to Lucerne's city centre, Lake Lucerne, the Swiss mountains, and many beautiful excursion destinations nearby.",
      },
      {
        n: "04",
        q: "Is the apartment easy to access?",
        a: "The apartment is on the 6th floor (top floor) and is comfortably reached by elevator.",
      },
      {
        n: "05",
        q: "How many guests can stay in the apartment?",
        a: "The apartment comfortably accommodates up to 4 guests — ideal for couples, small families, friends, or business travellers looking for a cosy and relaxing stay.",
      },
      {
        n: "06",
        q: "Is Wi-Fi included?",
        a: "Yes — fast and reliable high-speed Wi-Fi is included free of charge throughout the apartment. Whether you're working remotely, streaming, or planning your next adventure, you'll stay well connected.",
      },
      {
        n: "07",
        q: "Is the kitchen fully equipped?",
        a: (
          <>
            Yes — the kitchen has everything you need to feel at home. You&apos;ll find a stove and oven, microwave, dishwasher, coffee machine, kettle, toaster, rice cooker, refrigerator and freezer, plus cooking essentials and utensils. Perfect for everything from a quick breakfast to a cosy dinner at home.
          </>
        ),
      },
      {
        n: "08",
        q: "Are towels and toiletries provided?",
        a: "Fresh towels, shampoo, conditioner, and a hairdryer are all provided for your comfort and convenience.",
      },
    ],
  },
  {
    topic: "House Rules",
    items: [
      {
        n: "09",
        q: "Are pets allowed?",
        a: "As much as we love animals, pets are unfortunately not allowed in the apartment. Thank you for your understanding.",
      },
      {
        n: "10",
        q: "Is smoking allowed?",
        a: "Smoking is only permitted on the balcony. To keep the apartment fresh and comfortable for all guests, smoking inside the apartment is strictly prohibited.",
      },
      {
        n: "11",
        q: "Are parties or events allowed?",
        a: "To ensure a calm and enjoyable atmosphere for everyone in the building, parties, events, and commercial filming or photography are not permitted. We truly appreciate your understanding and respect for the neighbourhood.",
      },
      {
        n: "12",
        q: "Are there quiet hours?",
        a: "Quiet hours are between 10:00 PM and 7:00 AM. We kindly ask all guests to help maintain the peaceful environment that makes the building so pleasant for everyone.",
      },
    ],
  },
  {
    topic: "Getting There & Around",
    items: [
      {
        n: "13",
        q: "How can I reach the apartment using public transportation?",
        a: (
          <>
            Take bus <strong>B14</strong> towards Horw Zentrum and exit at <strong>Kriens, Nidfeld</strong>. The journey from Lucerne train station takes approximately 10 minutes, and the apartment is just a short walk from the bus stop.
          </>
        ),
      },
      {
        n: "14",
        q: "Is parking available nearby?",
        a: (
          <>
            Convenient public parking is available directly opposite the building. Rates are approximately CHF 1 per hour — easy if you&apos;re arriving by car and planning day trips around Switzerland.
          </>
        ),
      },
      {
        n: "15",
        q: "How do I get there from Zurich Airport?",
        a: "About 80 minutes by direct train to Luzern Bahnhof, then approximately 10 minutes by bus No. 14 to Kriens, Nidfeld. Our full arrival guide is sent by email two days before check-in.",
      },
    ],
  },
  {
    topic: "Booking & Cancellation",
    items: [
      {
        n: "16",
        q: "What is your cancellation policy?",
        a: (
          <>
            For short stays: free cancellation up to <strong>5 days</strong> before check-in. For long stays (28+ nights): free cancellation up to <strong>30 days</strong> before check-in. After these periods, the standard cancellation policy applies.
          </>
        ),
      },
    ],
  },
  {
    topic: "Recommendations & Activities",
    items: [
      {
        n: "17",
        q: "Do you provide local travel recommendations?",
        a: (
          <>
            Yes — we&apos;d love to share our favourite places with you. We&apos;ve created a guide with handpicked recommendations: scenic viewpoints, restaurants and caf&eacute;s, day trips, hidden gems, mountain excursions, and local experiences.{" "}
            <Link href="/recommendations" className="underline underline-offset-2">
              Browse our recommendations &rarr;
            </Link>
          </>
        ),
      },
      {
        n: "18",
        q: "What are the best things to do near the apartment?",
        a: (
          <>
            There&apos;s so much to explore. Guest favourites include Lucerne&apos;s beautiful old town, Mount Pilatus and Mount Rigi, Lake Lucerne boat cruises, scenic Alpine hikes, winter sports, and cosy local restaurants.{" "}
            <Link href="/recommendations" className="underline underline-offset-2">
              See all our picks &rarr;
            </Link>
          </>
        ),
      },
      {
        n: "19",
        q: "Can you recommend restaurants or cafés nearby?",
        a: (
          <>
            Several wonderful restaurants, bakeries, caf&eacute;s, and supermarkets are within walking distance. We&apos;ve collected our favourites on our recommendations page.{" "}
            <Link href="/recommendations" className="underline underline-offset-2">
              Discover local spots &rarr;
            </Link>
          </>
        ),
      },
      {
        n: "20",
        q: "Do you have recommendations for couples or families?",
        a: (
          <>
            Whether you&apos;re planning a romantic getaway, a family holiday, or a relaxing trip with friends, there&apos;s something for everyone. From scenic excursions to family-friendly activities and hidden local gems, we&apos;ve put together our favourite experiences for every kind of traveller.{" "}
            <Link href="/recommendations" className="underline underline-offset-2">
              Explore recommendations &rarr;
            </Link>
          </>
        ),
      },
    ],
  },
];

// Flat list for backwards compat if needed
export const FAQ: FaqItem[] = FAQ_GROUPS.flatMap((g) => g.items);
