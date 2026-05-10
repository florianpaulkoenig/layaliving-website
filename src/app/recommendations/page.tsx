import { CATEGORIES, type Category } from "@/types/recommendation";
import { RECOMMENDATIONS, countByCategory } from "@/lib/recommendations-data";
import { RecommendationsView } from "@/components/recommendations/RecommendationsView";
import "../pages.css";

export const metadata = {
  title: "Our Recommendations — Laya Living",
  description:
    "Hand-picked places to eat, drink, hike, cycle, and explore in Lucerne.",
};

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

export default function RecommendationsPage() {
  // Only show categories that have at least one entry.
  const cards: CategoryCard[] = CATEGORIES
    .map((c, i) => ({
      slug: c.slug,
      title: c.title,
      hint: c.hint,
      count: countByCategory(c.slug),
      imageUrl: null,
      variant: VARIANT_RHYTHM[i] ?? "" as "feat" | "wide" | "",
    }))
    .filter((c) => c.count > 0);

  // Top 9 picks for the ledger — personal-favorites first, then sort_order.
  const top9 = [...RECOMMENDATIONS]
    .filter((r) => r.published)
    .sort((a, b) => {
      const aFav = a.tags.includes("personal-favorites") ? 0 : 1;
      const bFav = b.tags.includes("personal-favorites") ? 0 : 1;
      if (aFav !== bFav) return aFav - bFav;
      return a.sort_order - b.sort_order;
    })
    .slice(0, 9);

  const ledger: LedgerRow[] = top9.map((r, i) => {
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
