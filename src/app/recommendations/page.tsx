import { supabasePublic } from "@/lib/supabase";
import { photoFor } from "@/lib/photo";
import { CATEGORIES, type Category } from "@/types/recommendation";
import { RecommendationsView } from "@/components/recommendations/RecommendationsView";
import "../pages.css";

export const metadata = {
  title: "Our Recommendations — Laya Living",
  description:
    "Hand-picked places to eat, drink, hike, cycle, and explore in Lucerne.",
};

export const dynamic = "force-dynamic";

/**
 * Visual rhythm for the editorial grid — matches the Alpine Quiet handoff:
 *   feat, std, feat, std, wide, wide, wide, std.
 * Applied positionally to the 8 CATEGORIES in order.
 */
const VARIANT_RHYTHM: Array<"feat" | "wide" | ""> = [
  "feat", "", "feat", "", "wide", "wide", "wide", "",
];

type CategoryCard = {
  slug: Category;
  title: string;
  hint: string;
  count: number;
  imageUrl: string | null;
  variant: "feat" | "wide" | "";
};

type LedgerRow = {
  n: string;
  slug: string;
  category: Category;
  categoryLabel: string;
  name: string;
  note: string;
  dist: string | null;
};

function formatDistance(walk: number | null, bike: number | null, bus: string | null): string | null {
  if (walk && walk <= 15) return `${walk} min walk`;
  if (bike && bike <= 30) return `${bike} min bike`;
  if (walk) return `${walk} min walk`;
  if (bike) return `${bike} min bike`;
  if (bus) return bus;
  return null;
}

export default async function RecommendationsPage() {
  const supabase = supabasePublic();

  const { data: rows, error } = await supabase
    .from("recommendations")
    .select(
      "id, slug, category, name, tagline, walk_time_min, bike_time_min, bus_route, sort_order, image_reference, image_url"
    )
    .eq("published", true)
    .order("sort_order", { ascending: true });

  const all = !error && rows ? rows : [];

  // Per-category counts + hero image (first entry with a usable image).
  const cards: CategoryCard[] = CATEGORIES.map((c, i) => {
    const inCat = all.filter((r) => r.category === c.slug);
    const withImage = inCat.find((r) => r.image_reference || r.image_url);
    return {
      slug: c.slug,
      title: c.title,
      hint: c.hint,
      count: inCat.length,
      imageUrl: withImage ? photoFor(withImage, 1400) : null,
      variant: VARIANT_RHYTHM[i] ?? "",
    };
  });

  // Top 9 picks for the ledger — by Supabase sort_order.
  const ledger: LedgerRow[] = all.slice(0, 9).map((r, i) => {
    const cat = CATEGORIES.find((c) => c.slug === r.category);
    return {
      n: String(i + 1).padStart(2, "0"),
      slug: r.slug,
      category: r.category as Category,
      categoryLabel: cat?.title ?? r.category,
      name: r.name,
      note: r.tagline ?? "",
      dist: formatDistance(r.walk_time_min, r.bike_time_min, r.bus_route),
    };
  });

  return <RecommendationsView cards={cards} ledger={ledger} />;
}

export type { CategoryCard, LedgerRow };
