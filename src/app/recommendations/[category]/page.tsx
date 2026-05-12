import { notFound } from "next/navigation";
import Link from "next/link";
import { CATEGORIES, type Category } from "@/types/recommendation";
import { getByCategory } from "@/lib/recommendations-data";
import { CategoryListing } from "./CategoryListing";

type Params = Promise<{ category: string }>;

function isCategory(v: string): v is Category {
  return CATEGORIES.some((c) => c.slug === v);
}

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { category } = await params;
  if (!isCategory(category)) return {};
  const c = CATEGORIES.find((x) => x.slug === category);
  return {
    title: `${c?.title} — Our Recommendations — Laya Living`,
    description: c?.hint,
  };
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { category: categoryParam } = await params;
  if (!isCategory(categoryParam)) notFound();
  const category = categoryParam as Category;
  const meta = CATEGORIES.find((c) => c.slug === category)!;
  const rows = getByCategory(category);

  if (rows.length === 0) notFound();

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
