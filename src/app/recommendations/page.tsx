import { Suspense } from "react";
import { CATEGORIES, type Recommendation } from "@/types/recommendation";
import { RECOMMENDATIONS } from "@/lib/recommendations-data";
import { RecommendationsView } from "@/components/recommendations/RecommendationsView";
import "../pages.css";

export const metadata = {
  title: "Our Recommendations — Laya Living",
  description:
    "Hand-picked places to eat, drink, hike, cycle, and explore in Lucerne.",
};

export type RecommendationRow = Recommendation & {
  categoryLabel: string;
};

export default function RecommendationsPage() {
  const rows: RecommendationRow[] = RECOMMENDATIONS
    .filter((r) => r.published)
    .sort((a, b) => {
      const aFav = a.tags.includes("personal-favorites") ? 0 : 1;
      const bFav = b.tags.includes("personal-favorites") ? 0 : 1;
      if (aFav !== bFav) return aFav - bFav;
      return a.sort_order - b.sort_order;
    })
    .map((r) => ({
      ...r,
      categoryLabel: CATEGORIES.find((c) => c.slug === r.category)?.title ?? r.category,
    }));

  const categories = CATEGORIES.filter((c) =>
    rows.some((r) => r.category === c.slug)
  );

  return (
    <Suspense>
      <RecommendationsView rows={rows} categories={categories} />
    </Suspense>
  );
}
