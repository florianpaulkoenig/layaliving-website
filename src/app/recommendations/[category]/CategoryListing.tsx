"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { TAG_CATALOG, type Category, type Recommendation } from "@/types/recommendation";

export function CategoryListing({
  items,
  category,
}: {
  items: Recommendation[];
  category: Category;
}) {
  const [active, setActive] = useState<string[]>([]);

  // Only surface tags that actually appear in this category's data.
  const availableTags = useMemo(() => {
    const present = new Set<string>();
    for (const r of items) for (const t of r.tags ?? []) present.add(t);
    return TAG_CATALOG.filter((t) => present.has(t.slug));
  }, [items]);

  const filtered = useMemo(() => {
    if (active.length === 0) return items;
    return items.filter((r) =>
      active.every((t) => (r.tags ?? []).includes(t))
    );
  }, [items, active]);

  function toggle(slug: string) {
    setActive((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  }

  if (items.length === 0) {
    return (
      <section className="wrap pb-24 pt-4">
        <div className="rounded border border-line bg-cream-light p-8 text-center text-ink-muted">
          We&rsquo;re still curating this list — check back soon, or{" "}
          <Link href="/contact" className="underline underline-offset-4 text-ink">
            message us
          </Link>{" "}
          for a personal tip.
        </div>
      </section>
    );
  }

  return (
    <>
      {availableTags.length > 0 && (
        <section className="border-y border-line bg-cream-light">
          <div className="wrap flex flex-wrap items-center gap-2 py-5">
            <span className="kicker mr-2">Filter</span>
            {availableTags.map((t) => {
              const on = active.includes(t.slug);
              return (
                <button
                  key={t.slug}
                  type="button"
                  onClick={() => toggle(t.slug)}
                  className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.14em] transition ${
                    on
                      ? "border-ink bg-ink text-cream-light"
                      : "border-ink/20 text-ink-muted hover:border-ink/50 hover:text-ink"
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
            {active.length > 0 && (
              <button
                type="button"
                onClick={() => setActive([])}
                className="ml-2 text-xs uppercase tracking-[0.14em] text-ink-muted underline-offset-4 hover:underline"
              >
                Clear
              </button>
            )}
          </div>
        </section>
      )}

      <section className="wrap py-12 md:py-16">
        {filtered.length === 0 ? (
          <p className="rounded border border-line bg-cream-light p-6 text-center text-ink-muted">
            No matches for that combination. Try removing a tag.
          </p>
        ) : (
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((r) => (
              <li key={r.id}>
                <Link
                  href={`/recommendations/${category}/${r.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded border border-line bg-white transition hover:shadow-image"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark">
                    {r.image_url ? (
                      <Image
                        src={r.image_url}
                        alt={r.name}
                        fill
                        sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.2em] text-ink-muted/60">
                        No image yet
                      </div>
                    )}
                    {(r.tags ?? []).includes("personal-favorites") && (
                      <span className="absolute left-3 top-3 rounded-full bg-ink/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-cream-light">
                        Our pick
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <h3 className="text-2xl">{r.name}</h3>
                    {r.tagline && (
                      <p className="text-sm italic text-ink-muted">
                        {r.tagline}
                      </p>
                    )}
                    <div className="mt-auto flex flex-wrap gap-1 pt-3 text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                      {r.price_range && (
                        <span>{"€".repeat(r.price_range)}</span>
                      )}
                      {r.walk_time_min != null && (
                        <span>· {r.walk_time_min} min walk</span>
                      )}
                      {r.walk_time_min == null && r.bike_time_min != null && (
                        <span>· {r.bike_time_min} min bike</span>
                      )}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
