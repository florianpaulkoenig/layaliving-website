import { notFound } from "next/navigation";
import Link from "next/link";
import { supabasePublic } from "@/lib/supabase";
import { CATEGORIES, type Category, type Recommendation } from "@/types/recommendation";
import { CategoryListing } from "./CategoryListing";

type Params = { category: string };

function isCategory(v: string): v is Category {
  return CATEGORIES.some((c) => c.slug === v);
}

export async function generateMetadata({ params }: { params: Params }) {
  if (!isCategory(params.category)) return {};
  const c = CATEGORIES.find((x) => x.slug === params.category);
  return {
    title: `${c?.title} — Our Recommendations — Laya Living`,
    description: c?.hint,
  };
}

export const dynamic = "force-dynamic";

async function loadByCategory(category: Category): Promise<Recommendation[]> {
  try {
    const supabase = supabasePublic();
    const { data, error } = await supabase
      .from("recommendations")
      .select("*")
      .eq("category", category)
      .eq("published", true)
      .order("sort_order", { ascending: true })
      .order("name", { ascending: true });
    if (error || !data) return [];
    return data as unknown as Recommendation[];
  } catch {
    return [];
  }
}

export default async function CategoryPage({ params }: { params: Params }) {
  if (!isCategory(params.category)) notFound();
  const category = params.category as Category;
  const meta = CATEGORIES.find((c) => c.slug === category)!;
  const rows = await loadByCategory(category);

  return (
    <>
      <section className="wrap py-16 md:py-20">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-ink-muted">
          <Link href="/recommendations" className="hover:text-ink">
            Our Recommendations
          </Link>
          <span>/</span>
          <span className="text-ink">{meta.title}</span>
        </nav>
        <h1 className="mt-5 text-5xl sm:text-6xl text-balance">
          {meta.title}
        </h1>
        <p className="mt-4 max-w-prose text-pretty text-lg text-ink-muted">
          {meta.hint}
        </p>
      </section>

      <CategoryListing items={rows} category={category} />
    </>
  );
}
