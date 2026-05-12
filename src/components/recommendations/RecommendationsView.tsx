"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback } from "react";
import { photoFor } from "@/lib/photo";
import type { Category } from "@/types/recommendation";
import type { RecommendationRow } from "@/app/recommendations/page";

type Props = {
  rows: RecommendationRow[];
  categories: { slug: Category; title: string; hint: string }[];
};

type Span = 12 | 6 | 4 | 3;
type Variant = "full" | "feat" | "wide" | "";

// Row templates — each sums to 12 columns
const ROW_TEMPLATES: Span[][] = [
  [6, 6],
  [4, 4, 4],
  [6, 3, 3],
  [3, 3, 3, 3],
];

function spanToVariant(s: Span): Variant {
  if (s === 12) return "full";
  if (s === 6) return "feat";
  if (s === 4) return "wide";
  return "";
}

// Fill the last partial row so it always sums to 12
function lastRowSpans(n: number): Span[] {
  if (n === 1) return [12];
  if (n === 2) return [6, 6];
  if (n === 3) return [4, 4, 4];
  return [3, 3, 3, 3];
}

function computeVariants(total: number): Variant[] {
  const spans: Span[] = [];
  let remaining = total;
  let templateIdx = 0;
  while (remaining > 0) {
    const template = ROW_TEMPLATES[templateIdx % ROW_TEMPLATES.length];
    if (remaining <= template.length) {
      spans.push(...lastRowSpans(remaining));
      break;
    }
    spans.push(...template);
    remaining -= template.length;
    templateIdx++;
  }
  return spans.map(spanToVariant);
}

function imageSizes(v: Variant): string {
  if (v === "full") return "100vw";
  if (v === "feat") return "(max-width: 768px) 100vw, 50vw";
  if (v === "wide") return "(max-width: 768px) 100vw, 33vw";
  return "(max-width: 768px) 100vw, 25vw";
}

export function RecommendationsView({ rows, categories }: Props) {
  const [filter, setFilter] = useState<"all" | Category>("all");
  const [surprise, setSurprise] = useState<RecommendationRow | null>(null);

  const triggerSurprise = useCallback((category: "all" | Category) => {
    const pool = category === "all" ? rows : rows.filter((r) => r.category === category);
    if (pool.length === 0) return;
    setSurprise(pool[Math.floor(Math.random() * pool.length)]);
  }, [rows]);

  const visible = filter === "all" ? rows : rows.filter((r) => r.category === filter);

  return (
    <div className="page-recs">
      <header className="ph">
        <div className="ph-kicker">Our Recommendations</div>
        <h1>
          Our Lucerne,{" "}
          <span className="it-accent">curated for you</span>.
        </h1>
        <p className="lede">
          This isn&apos;t TripAdvisor. These are our personal favourites —
          the restaurants, trails, viewpoints, and rituals we&apos;d take a
          friend to. Some are well-known classics; others are off the beaten
          path and easy to miss if you don&apos;t know where to look. Every
          entry is a genuine recommendation from us.
        </p>
      </header>

      {/* ─── Surprise me ─── */}
      <div className="recs-surprise">
        <div className="recs-surprise-left">
          <div className="recs-surprise-kicker">Can&apos;t decide?</div>
          <h2 className="recs-surprise-title">
            Let us pick <span className="it-accent">something for you</span>.
          </h2>
        </div>
        <div className="recs-surprise-right">
          <p className="recs-surprise-lede">
            Not sure where to start? Hit the button and we&apos;ll pull a personal pick at random — filtered to whatever category you&apos;re browsing.
          </p>
          <button
            type="button"
            className="btn-primary"
            onClick={() => triggerSurprise(filter)}
          >
            Surprise me
            {filter !== "all" && (
              <span style={{ opacity: 0.65 }}>
                {" "}· {categories.find((c) => c.slug === filter)?.title ?? filter}
              </span>
            )}
            {" →"}
          </button>
        </div>
      </div>

      {/* ─── Surprise modal ─── */}
      {surprise && (
        <div
          className="recs-surprise-overlay"
          onClick={() => setSurprise(null)}
          role="dialog"
          aria-modal
        >
          <div
            className="recs-surprise-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="recs-surprise-close"
              onClick={() => setSurprise(null)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="recs-surprise-cat">{surprise.categoryLabel}</div>
            <h2>{surprise.name}</h2>
            {surprise.tagline && <p className="recs-surprise-tagline">{surprise.tagline}</p>}
            {surprise.description && (
              <p style={{ fontSize: 14, color: "var(--ink-soft)", marginTop: 8 }}>
                {surprise.description.slice(0, 160)}…
              </p>
            )}
            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
              <Link
                href={`/recommendations/${surprise.category}/${surprise.slug}`}
                className="h-btn"
                style={{ fontSize: 13 }}
              >
                See details →
              </Link>
              <button
                type="button"
                className="h-btn ghost"
                style={{ fontSize: 13 }}
                onClick={() => triggerSurprise(filter)}
              >
                Another one
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── Filter pills ─── */}
      <div className="recs-filter">
        <span className="label">Filter</span>
        <button
          type="button"
          className="recs-pill"
          aria-pressed={filter === "all"}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c.slug}
            type="button"
            className="recs-pill"
            aria-pressed={filter === c.slug}
            onClick={() => setFilter(c.slug)}
          >
            {c.title}
          </button>
        ))}
      </div>

      {/* ─── Editorial card grid ─── */}
      <div className="recs-grid">
        {(() => {
          const variants = computeVariants(visible.length);
          return visible.map((r, i) => {
          const v = variants[i];
          const photo = photoFor(r, v === "full" || v === "feat" ? 1200 : 800);
          const isFav = (r.tags ?? []).includes("personal-favorites");

          return (
            <Link
              key={r.id}
              href={`/recommendations/${r.category}/${r.slug}`}
              className={`recs-card ${v}`.trim()}
            >
              <div className="fig">
                {photo ? (
                  <Image
                    src={photo}
                    alt={r.name}
                    fill
                    sizes={imageSizes(v)}
                    className="object-cover"
                    unoptimized
                  />
                ) : (
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--ink-muted)", opacity: 0.5 }}>
                    No image yet
                  </div>
                )}
                {isFav && (
                  <div className="count">Our pick</div>
                )}
              </div>

              <div className="kick">
                <span>№ {String(i + 1).padStart(2, "0")}</span>
                <span>{r.categoryLabel}</span>
              </div>

              <h3>{r.name}</h3>

              {r.tagline && <p>{r.tagline}</p>}

              <span className="go">
                {[
                  r.price_range ? "€".repeat(r.price_range) : null,
                  r.walk_time_min != null ? `${r.walk_time_min} min walk` : null,
                  r.walk_time_min == null && r.bike_time_min != null ? `${r.bike_time_min} min bike` : null,
                ]
                  .filter(Boolean)
                  .join(" · ") || "See details →"}
              </span>
            </Link>
          );
        });
        })()}
      </div>
    </div>
  );
}
