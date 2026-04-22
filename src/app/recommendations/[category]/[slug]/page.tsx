import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { supabasePublic } from "@/lib/supabase";
import { photoFor } from "@/lib/photo";
import { CATEGORIES, TAG_CATALOG, type Category, type Recommendation } from "@/types/recommendation";

type Params = { category: string; slug: string };

function isCategory(v: string): v is Category {
  return CATEGORIES.some((c) => c.slug === v);
}

export const dynamic = "force-dynamic";

async function loadOne(
  category: Category,
  slug: string
): Promise<Recommendation | null> {
  try {
    const supabase = supabasePublic();
    const { data, error } = await supabase
      .from("recommendations")
      .select("*")
      .eq("category", category)
      .eq("slug", slug)
      .eq("published", true)
      .maybeSingle();
    if (error || !data) return null;
    return data as unknown as Recommendation;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Params }) {
  if (!isCategory(params.category)) return {};
  const r = await loadOne(params.category as Category, params.slug);
  if (!r) return {};
  return {
    title: `${r.name} — ${CATEGORIES.find((c) => c.slug === r.category)?.title} — Laya Living`,
    description: r.tagline ?? r.description ?? undefined,
  };
}

const TAG_LABEL = Object.fromEntries(TAG_CATALOG.map((t) => [t.slug, t.label]));

function mapsUrl(r: Recommendation): string | null {
  if (r.lat != null && r.lng != null) {
    return `https://www.google.com/maps/search/?api=1&query=${r.lat},${r.lng}`;
  }
  if (r.address) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.address)}`;
  }
  return null;
}

export default async function RecommendationDetail({
  params,
}: {
  params: Params;
}) {
  if (!isCategory(params.category)) notFound();
  const category = params.category as Category;
  const r = await loadOne(category, params.slug);
  if (!r) notFound();

  const categoryTitle = CATEGORIES.find((c) => c.slug === category)?.title;
  const maps = mapsUrl(r);

  return (
    <article className="wrap py-16 md:py-20">
      <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-ink-muted">
        <Link href="/recommendations" className="hover:text-ink">
          Our Recommendations
        </Link>
        <span>/</span>
        <Link href={`/recommendations/${category}`} className="hover:text-ink">
          {categoryTitle}
        </Link>
      </nav>

      <header className="mt-6 grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start lg:gap-14">
        <div>
          <h1 className="text-5xl sm:text-6xl text-balance">{r.name}</h1>
          {r.tagline && (
            <p className="mt-4 font-display italic text-2xl text-sage-dark">
              {r.tagline}
            </p>
          )}
          {r.description && (
            <p className="mt-6 max-w-prose text-pretty text-ink-muted">
              {r.description}
            </p>
          )}
          {r.why_we_love_it && (
            <div className="mt-8 border-l-2 border-sage-dark pl-5">
              <p className="kicker">Why we love it</p>
              <p className="mt-2 text-pretty text-ink">{r.why_we_love_it}</p>
            </div>
          )}
          {(r.tags?.length ?? 0) > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {r.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-ink/15 px-3 py-1 text-xs uppercase tracking-[0.14em] text-ink-muted"
                >
                  {TAG_LABEL[t] ?? t}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded bg-cream-dark shadow-image">
          {photoFor(r, 1200) ? (
            <Image
              src={photoFor(r, 1200)!}
              alt={r.name}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
              priority
              unoptimized
            />
          ) : null}
        </div>
      </header>

      <section className="mt-16 grid gap-10 border-t border-line pt-12 md:grid-cols-3">
        <Fact label="Address">
          {r.address ? (
            maps ? (
              <a
                href={maps}
                target="_blank"
                rel="noreferrer"
                className="underline-offset-4 hover:underline"
              >
                {r.address}
              </a>
            ) : (
              r.address
            )
          ) : (
            "—"
          )}
        </Fact>
        <Fact label="Distance">
          {r.walk_time_min != null && (
            <span>{r.walk_time_min} min walk</span>
          )}
          {r.walk_time_min != null && r.bike_time_min != null && (
            <span> · </span>
          )}
          {r.bike_time_min != null && (
            <span>{r.bike_time_min} min bike</span>
          )}
          {r.bus_route && (
            <span className="block text-sm text-ink-muted">
              Bus {r.bus_route}
            </span>
          )}
        </Fact>
        <Fact label="Price">
          {r.price_range ? "€".repeat(r.price_range) : "—"}
        </Fact>
        <Fact label="Website">
          {r.website ? (
            <a
              href={r.website}
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:underline"
            >
              {r.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            </a>
          ) : (
            "—"
          )}
        </Fact>
        <Fact label="Phone">
          {r.phone ? (
            <a
              href={`tel:${r.phone.replace(/\s/g, "")}`}
              className="underline-offset-4 hover:underline"
            >
              {r.phone}
            </a>
          ) : (
            "—"
          )}
        </Fact>
        <Fact label="Best season">
          {r.season && r.season.length > 0 ? r.season.join(" · ") : "Year-round"}
        </Fact>
      </section>

      {(r.image_attribution || r.image_credit) && (
        <p
          className="mt-10 text-xs text-ink-muted"
          dangerouslySetInnerHTML={{
            __html: `Photo: ${r.image_attribution ?? r.image_credit}`,
          }}
        />
      )}
    </article>
  );
}

function Fact({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="kicker">{label}</p>
      <p className="mt-2 text-ink">{children}</p>
    </div>
  );
}
