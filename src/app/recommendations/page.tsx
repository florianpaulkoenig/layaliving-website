import Link from "next/link";
import { supabasePublic } from "@/lib/supabase";
import { CATEGORIES, type Category } from "@/types/recommendation";

export const metadata = {
  title: "Our Recommendations — Laya Living",
  description:
    "Hand-picked places to eat, drink, hike, cycle, and explore in Lucerne.",
};

export const dynamic = "force-dynamic";

async function getCategoryCounts(): Promise<Record<Category, number>> {
  const counts = Object.fromEntries(
    CATEGORIES.map((c) => [c.slug, 0])
  ) as Record<Category, number>;
  try {
    const supabase = supabasePublic();
    const { data, error } = await supabase
      .from("recommendations")
      .select("category")
      .eq("published", true);
    if (error || !data) return counts;
    for (const row of data as Array<{ category: Category }>) {
      if (counts[row.category] !== undefined) counts[row.category] += 1;
    }
  } catch {
    /* swallow — empty counts shown as "coming soon" */
  }
  return counts;
}

export default async function RecommendationsPage() {
  const counts = await getCategoryCounts();
  const total = Object.values(counts).reduce((s, n) => s + n, 0);

  return (
    <>
      <section className="wrap py-20 md:py-28">
        <p className="kicker">Our Recommendations</p>
        <h1 className="mt-4 text-5xl sm:text-6xl text-balance lg:text-7xl">
          Our Lucerne, <em className="italic text-sage-dark">curated</em> for
          you.
        </h1>
        <p className="mt-6 max-w-prose text-pretty text-lg text-ink-muted">
          The restaurants, trails, and rituals we&rsquo;d take a friend to.
          Filter by mood, season, or distance — something for everyone.
        </p>
        {total === 0 ? (
          <p className="mt-6 rounded border border-line bg-cream-light px-4 py-3 text-sm text-ink-muted">
            We&rsquo;re gathering our favourites right now. Check back soon —
            or{" "}
            <Link href="/contact" className="underline underline-offset-4">
              ask us directly
            </Link>
            .
          </p>
        ) : null}
      </section>

      <section className="bg-cream-light py-16 md:py-20">
        <div className="wrap grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => {
            const n = counts[c.slug];
            const disabled = n === 0;
            const body = (
              <>
                <p className="kicker text-sage-dark">{c.title}</p>
                <h3 className="text-2xl">{c.hint}</h3>
                <span className="mt-auto pt-4 text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                  {disabled
                    ? "Coming soon"
                    : `${n} ${n === 1 ? "place" : "places"} →`}
                </span>
              </>
            );
            const className = `group flex flex-col gap-2 rounded border border-line bg-white p-6 transition ${
              disabled
                ? "opacity-60"
                : "hover:border-ink/25 hover:shadow-subtle"
            }`;
            return disabled ? (
              <div key={c.slug} className={className}>
                {body}
              </div>
            ) : (
              <Link
                key={c.slug}
                href={`/recommendations/${c.slug}`}
                className={className}
              >
                {body}
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
