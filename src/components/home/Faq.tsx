"use client";

import { useState, useMemo } from "react";
import { FAQ_GROUPS, type FaqGroup } from "./faq-content";

// ── Plain-text extractor (for search) ────────────────────────────────────────

function getAnswerText(a: React.ReactNode): string {
  if (typeof a === "string") return a;
  if (typeof a === "number") return String(a);
  if (!a) return "";
  if (Array.isArray(a)) return a.map(getAnswerText).join(" ");
  if (typeof a === "object" && "props" in (a as object)) {
    const el = a as React.ReactElement<{ children?: React.ReactNode }>;
    return getAnswerText(el.props?.children);
  }
  return "";
}

// ── Component ─────────────────────────────────────────────────────────────────

export function Faq() {
  const [open, setOpen] = useState<string | null>("01");
  const [query, setQuery] = useState("");

  const groups: FaqGroup[] = FAQ_GROUPS;

  const needle = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!needle) return groups;
    return groups
      .map((group) => ({
        ...group,
        items: group.items.filter(
          (item) =>
            item.q.toLowerCase().includes(needle) ||
            getAnswerText(item.a).toLowerCase().includes(needle)
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [needle, groups]);

  return (
    <section className="h-section">
      <div className="sec-head">
        <div className="sec-num">VIII — Before you book</div>
        <h2 className="sec-title">
          A few practical <span className="it">answers</span>.
        </h2>
        <p className="sec-lede">
          The most common questions. If yours isn&apos;t here, just send us
          a message via Airbnb or your booking platform — we usually reply
          within a few hours.
        </p>

        {/* Search bar */}
        <div className="faq-search-wrap">
          <div className="faq-search-inner">
            <svg className="faq-search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input
              className="faq-search"
              type="search"
              placeholder="Search questions…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search FAQ"
            />
            {query && (
              <button
                className="faq-search-clear"
                onClick={() => setQuery("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
        </div>
      </div>{/* end sec-head */}

      <div className="faq" data-searching={needle ? "true" : "false"}>
        {filtered.length === 0 ? (
          <p className="faq-no-results">
            No results for &ldquo;{query}&rdquo; — try a different word.
          </p>
        ) : (
          filtered.map((group) => (
            <div key={group.topic} className="faq-group">
              <div className="faq-topic">{group.topic}</div>
              {group.items.map((row) => {
                const isOpen = needle ? true : open === row.n;
                const toggle = () => {
                  if (!needle) setOpen(isOpen ? null : row.n);
                };
                return (
                  <div
                    key={row.n}
                    className="faq-row"
                    data-open={isOpen}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    onClick={toggle}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggle();
                      }
                    }}
                  >
                    <div className="n">{row.n}</div>
                    <div>
                      <h3 className="q">{row.q}</h3>
                      <div className="a">{row.a}</div>
                    </div>
                    <div className="toggle" aria-hidden />
                  </div>
                );
              })}
            </div>
          ))
        )}
      </div>
    </section>
  );
}
