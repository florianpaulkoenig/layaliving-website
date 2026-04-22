"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Category } from "@/types/recommendation";
import type { CategoryCard, LedgerRow } from "@/app/recommendations/page";

type Props = {
  cards: CategoryCard[];
  ledger: LedgerRow[];
};

export function RecommendationsView({ cards, ledger }: Props) {
  const [filter, setFilter] = useState<"all" | Category>("all");

  const visibleCards = filter === "all" ? cards : cards.filter((c) => c.slug === filter);
  const visibleLedger = filter === "all" ? ledger : ledger.filter((r) => r.category === filter);

  return (
    <div className="page-recs">
      <header className="ph">
        <div className="ph-kicker">Our Recommendations</div>
        <h1>
          Our Lucerne,{" "}
          <span className="it-accent">curated for you</span>.
        </h1>
        <p className="lede">
          The restaurants, trails, and rituals we&apos;d take a friend to.
          Filter by mood, season, or distance — something for everyone.
        </p>
      </header>

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
        {cards.map((c) => (
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
        {visibleCards.map((c, i) => (
          <Link
            key={c.slug}
            href={`/recommendations/${c.slug}`}
            className={`recs-card ${c.variant}`.trim()}
          >
            <div className="fig">
              {c.imageUrl ? (
                <Image
                  src={c.imageUrl}
                  alt={c.title}
                  fill
                  sizes={
                    c.variant === "feat"
                      ? "(max-width: 768px) 100vw, 50vw"
                      : c.variant === "wide"
                      ? "(max-width: 768px) 100vw, 33vw"
                      : "(max-width: 768px) 100vw, 25vw"
                  }
                  className="object-cover"
                />
              ) : null}
              {c.count > 0 ? (
                <div className="count">{c.count} places</div>
              ) : null}
            </div>
            <div className="kick">
              <span>№ {String(i + 1).padStart(2, "0")}</span>
              <span>{c.title}</span>
            </div>
            <h3>{c.hint}</h3>
            <span className="go">
              {c.count > 0 ? `Explore ${c.title.toLowerCase()} →` : "Coming soon"}
            </span>
          </Link>
        ))}
      </div>

      {/* ─── Ledger index ─── */}
      {visibleLedger.length > 0 ? (
        <div className="recs-index">
          <h2>
            A selection, <span className="it-accent">hand-picked</span>.
          </h2>
          <table>
            <tbody>
              {visibleLedger.map((r) => (
                <tr key={r.slug}>
                  <td className="num">{r.n}</td>
                  <td className="name">
                    <Link
                      href={`/recommendations/${r.category}/${r.slug}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {r.name}
                    </Link>
                  </td>
                  <td className="cat">{r.categoryLabel}</td>
                  <td className="note">{r.note}</td>
                  <td className="dist">{r.dist ?? ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}
