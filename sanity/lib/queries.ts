import { sanityClient } from "./client";

// ── FAQ ──────────────────────────────────────────────────────────────────────

export type SanityFaqItem = {
  n: string;
  question: string;
  answer: unknown[]; // Portable Text blocks
};

export type SanityFaqGroup = {
  topic: string;
  items: SanityFaqItem[];
};

export async function fetchFaqGroups(): Promise<SanityFaqGroup[] | null> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return null;
  try {
    const data = await sanityClient.fetch(
      `*[_type == "faq"][0].groups[]{
        topic,
        items[]{n, question, answer}
      }`,
      {},
      { next: { revalidate: 60 } }
    );
    return data ?? null;
  } catch {
    return null;
  }
}

// ── Site content ─────────────────────────────────────────────────────────────

export type SanitySiteContent = {
  heroParagraph?: string;
  seasons?: Array<{
    key: string;
    name: string;
    months: string;
    titleLead: string;
    titleTail: string;
    body: string;
  }>;
  guestReviews?: Array<{
    quote: string;
    who: string;
    where: string;
  }>;
  journalEntries?: Array<{
    n: string;
    kicker: string;
    date: string;
    title: string;
    body: string;
  }>;
};

export async function fetchSiteContent(): Promise<SanitySiteContent | null> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return null;
  try {
    const data = await sanityClient.fetch(
      `*[_type == "siteContent"][0]{
        heroParagraph,
        seasons[]{key, name, months, titleLead, titleTail, body},
        guestReviews[]{quote, who, where},
        journalEntries[]{n, kicker, date, title, body}
      }`,
      {},
      { next: { revalidate: 60 } }
    );
    return data ?? null;
  } catch {
    return null;
  }
}
