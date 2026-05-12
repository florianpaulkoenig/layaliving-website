import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { photoFor } from "@/lib/photo";
import { CATEGORIES, TAG_CATALOG, type Category, type Recommendation } from "@/types/recommendation";
import { getBySlug, RECOMMENDATIONS } from "@/lib/recommendations-data";
import "../../../pages.css";

type Params = Promise<{ category: string; slug: string }>;

function isCategory(v: string): v is Category {
  return CATEGORIES.some((c) => c.slug === v);
}

export function generateStaticParams() {
  return RECOMMENDATIONS.map((r) => ({ category: r.category, slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { category, slug } = await params;
  if (!isCategory(category)) return {};
  const r = getBySlug(category, slug);
  if (!r) return {};
  return {
    title: `${r.name} — ${CATEGORIES.find((c) => c.slug === r.category)?.title} — Laya Living`,
    description: r.tagline ?? r.description ?? undefined,
  };
}

const TAG_LABEL = Object.fromEntries(TAG_CATALOG.map((t) => [t.slug, t.label]));

function mapsUrl(r: Recommendation): string | null {
  if (r.lat != null && r.lng != null)
    return `https://www.google.com/maps/search/?api=1&query=${r.lat},${r.lng}`;
  if (r.address)
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.address)}`;
  return null;
}

export default async function RecommendationDetail({ params }: { params: Params }) {
  const { category: categoryParam, slug } = await params;
  if (!isCategory(categoryParam)) notFound();
  const category = categoryParam as Category;
  const r = getBySlug(category, slug);
  if (!r) notFound();

  const categoryTitle = CATEGORIES.find((c) => c.slug === category)?.title;
  const maps = mapsUrl(r);
  const photo = photoFor(r, 1600);

  return (
    <article className="page-rec-detail">

      {/* ─── Page header ─── */}
      <header className="ph">
        <div className="ph-kicker">
          <Link href="/recommendations" className="rec-breadcrumb">Our Recommendations</Link>
          {" / "}
          <Link href={`/recommendations/${category}`} className="rec-breadcrumb">{categoryTitle}</Link>
        </div>
        <h1>{r.name}</h1>
        {r.tagline && (
          <p className="lede it-accent" style={{ fontStyle: "italic" }}>{r.tagline}</p>
        )}
      </header>

      {/* ─── Hero image ─── */}
      {photo && (
        <div className="rec-detail-hero">
          <Image
            src={photo}
            alt={r.name}
            fill
            sizes="100vw"
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      )}

      {/* ─── Facts strip ─── */}
      <div className="rec-detail-facts">
        <Fact label="Address">
          {r.address ? (
            maps ? (
              <a href={maps} target="_blank" rel="noreferrer">{r.address}</a>
            ) : r.address
          ) : "—"}
        </Fact>
        <Fact label="Distance">
          {r.walk_time_min != null && <span>{r.walk_time_min} min walk</span>}
          {r.walk_time_min != null && r.bike_time_min != null && " · "}
          {r.bike_time_min != null && <span>{r.bike_time_min} min bike</span>}
          {!r.walk_time_min && !r.bike_time_min && "—"}
        </Fact>
        <Fact label="Price">{r.price_range ? "€".repeat(r.price_range) : "—"}</Fact>
        <Fact label="Best season">
          {r.season && r.season.length > 0 ? r.season.join(" · ") : "Year-round"}
        </Fact>
        {r.website && (
          <Fact label="Website">
            <a href={r.website} target="_blank" rel="noreferrer">
              {r.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            </a>
          </Fact>
        )}
      </div>

      {/* ─── Body ─── */}
      <div className="rec-detail-body">
        <div className="rec-detail-text">
          {r.description && <p>{r.description}</p>}
          {r.why_we_love_it && (
            <blockquote className="rec-detail-quote">
              <span className="rec-detail-quote-label">Why we love it</span>
              {r.why_we_love_it}
            </blockquote>
          )}
          {(r.tags?.length ?? 0) > 0 && (
            <div className="rec-detail-tags">
              {r.tags.map((t) => (
                <span key={t} className="rec-detail-tag">{TAG_LABEL[t] ?? t}</span>
              ))}
            </div>
          )}
          {(r.image_attribution || r.image_credit) && (
            <p className="rec-detail-credit"
              dangerouslySetInnerHTML={{ __html: `Photo: ${r.image_attribution ?? r.image_credit}` }}
            />
          )}
        </div>
        <div className="rec-detail-actions">
          {maps && (
            <a href={maps} target="_blank" rel="noreferrer" className="btn-primary">
              Open in Google Maps →
            </a>
          )}
          <Link href="/recommendations" className="btn-ghost">
            ← Back to recommendations
          </Link>
        </div>
      </div>

    </article>
  );
}

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rec-detail-fact">
      <div className="rec-detail-fact-k">{label}</div>
      <div className="rec-detail-fact-v">{children}</div>
    </div>
  );
}
