export type Category =
  | "eat"
  | "drink"
  | "hike"
  | "bike"
  | "culture"
  | "daytrips"
  | "family"
  | "gems";

export const CATEGORIES: Array<{
  slug: Category;
  title: string;
  hint: string;
}> = [
  { slug: "eat", title: "Eat", hint: "Family-run kitchens to quiet fine dining" },
  { slug: "drink", title: "Drink", hint: "Third-wave coffee, wine bars, late-night cocktails" },
  { slug: "hike", title: "Hike & Nature", hint: "Rigi, Pilatus, Stanserhorn & more" },
  { slug: "bike", title: "Bike Routes", hint: "Velohighway and scenic loops" },
  { slug: "culture", title: "Culture", hint: "Museums, old town, seasonal events" },
  { slug: "daytrips", title: "Day Trips", hint: "Engelberg, Interlaken, Zurich" },
  { slug: "family", title: "Family & Kids", hint: "Tested by locals with small humans" },
  { slug: "gems", title: "Hidden Gems", hint: "The places we don't share online" },
];

export function categoryTitle(slug: string): string {
  return CATEGORIES.find((c) => c.slug === slug)?.title ?? slug;
}

export type Season = "spring" | "summer" | "autumn" | "winter";

/**
 * Primary filter dimension for guests — broad, covers many moods.
 */
export const TAG_CATALOG: Array<{ slug: string; label: string }> = [
  { slug: "romantic", label: "Romantic" },
  { slug: "family-friendly", label: "Family-friendly" },
  { slug: "kid-safe", label: "Kid-safe" },
  { slug: "view", label: "With a view" },
  { slug: "hidden-gem", label: "Hidden gem" },
  { slug: "budget", label: "Budget-friendly" },
  { slug: "splurge", label: "Special occasion" },
  { slug: "rainy-day", label: "Rainy day" },
  { slug: "sunny-day", label: "Sunny day" },
  { slug: "vegetarian", label: "Veggie/vegan" },
  { slug: "dog-friendly", label: "Dog-friendly" },
  { slug: "photo-spot", label: "Photo spot" },
  { slug: "takeaway", label: "Takeaway" },
  { slug: "reservation", label: "Reservation advised" },
  { slug: "walk-in", label: "Walk-in" },
  { slug: "sunset", label: "Best at sunset" },
  { slug: "morning", label: "Morning" },
  { slug: "evening", label: "Evening" },
  { slug: "lake", label: "By the lake" },
  { slug: "mountain", label: "Mountain" },
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

  published: boolean;
  sort_order: number;

  created_at: string;
  updated_at: string;
};
