export type Category =
  | "eat"
  | "drink"
  | "hike"
  | "walks"
  | "bike"
  | "boats"
  | "swim"
  | "culture"
  | "daytrips"
  | "family"
  | "gems"
  | "essentials";

export const CATEGORIES: Array<{
  slug: Category;
  title: string;
  hint: string;
}> = [
  { slug: "eat", title: "Eat", hint: "Family-run kitchens to quiet fine dining" },
  { slug: "drink", title: "Drink", hint: "Third-wave coffee, wine bars, late-night cocktails" },
  { slug: "hike", title: "Hike & Nature", hint: "Rigi, Pilatus, Stanserhorn & more" },
  { slug: "walks", title: "Walks", hint: "Short to half-day walks from the door and city" },
  { slug: "bike", title: "Bike Routes", hint: "Lakeside paths and scenic loops" },
  { slug: "boats", title: "By Boat", hint: "Paddle steamers, lake crossings and sunsets" },
  { slug: "swim", title: "Swimming", hint: "Lake baths, free spots and mountain pools" },
  { slug: "culture", title: "Culture", hint: "Museums, old town, seasonal events" },
  { slug: "daytrips", title: "Day Trips", hint: "Engelberg, Interlaken, Zurich" },
  { slug: "family", title: "Family & Kids", hint: "Tested by locals with small humans" },
  { slug: "gems", title: "Hidden Gems", hint: "The places we don't share online" },
  { slug: "essentials", title: "Shopping & Essentials", hint: "Groceries, pharmacy, Sunday shops" },
];

export function categoryTitle(slug: string): string {
  return CATEGORIES.find((c) => c.slug === slug)?.title ?? slug;
}

export type Season = "spring" | "summer" | "autumn" | "winter";

/**
 * Primary filter dimension for guests — broad, covers many moods.
 */
export const TAG_CATALOG: Array<{ slug: string; label: string }> = [
  { slug: "personal-favorites", label: "Our favourites" },
  { slug: "brunch", label: "Brunch" },
  { slug: "family-friendly", label: "Family-friendly" },
  { slug: "kid-safe", label: "Kid-safe" },
  { slug: "view", label: "View or terrace" },
  { slug: "hidden-gem", label: "Hidden gem" },
  { slug: "budget", label: "Budget-friendly" },
  { slug: "splurge", label: "Special occasion" },
  { slug: "rainy-day", label: "Rainy day" },
  { slug: "vegetarian", label: "Veggie/vegan" },
  { slug: "dog-friendly", label: "Dog-friendly" },
  { slug: "photo-spot", label: "Photo spot" },
  { slug: "takeaway", label: "Takeaway" },
  { slug: "walk-in", label: "Walk-in" },
  { slug: "sunset", label: "Best at sunset" },
  { slug: "morning", label: "Morning" },
  { slug: "lake", label: "By the lake" },
  { slug: "mountain", label: "Mountain" },
  { slug: "open-sundays", label: "Long hours · open Sundays" },
  { slug: "everyday-shopping", label: "Everyday shopping" },
  { slug: "mall", label: "Mall nearby" },
];

export type Recommendation = {
  id: number;
  slug: string;
  category: Category;

  name: string;
  tagline: string | null;
  description: string | null;
  why_we_love_it: string | null;

  address: string | null;
  lat: number | null;
  lng: number | null;

  website: string | null;
  phone: string | null;
  opening_hours: Record<string, string> | null;
  price_range: 1 | 2 | 3 | 4 | null;
  walk_time_min: number | null;
  bike_time_min: number | null;
  bus_route: string | null;

  season: Season[];
  tags: string[];
  image_url: string | null;
  image_credit: string | null;
  source_url: string | null;

  google_place_id: string | null;
  image_reference: string | null;     // Google Places photo_reference
  image_attribution: string | null;   // Plain-text attribution required by Google

  published: boolean;
  sort_order: number;

  created_at: string;
  updated_at: string;
};
