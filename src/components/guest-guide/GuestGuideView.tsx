"use client";

import { useState, useMemo, useCallback } from "react";
import { apartment, FAQ, FAQ_CATEGORIES, type FaqEntry } from "@/lib/guest-guide-data";

// ── Helpers ───────────────────────────────────────────────────────────────────

function normalise(str: string) {
  return str.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function renderAnswer(text: string): React.ReactNode[] {
  // Split into paragraphs on blank lines
  const paragraphs = text.split(/\n\n+/);
  return paragraphs.map((para, pi) => {
    // Split on single newlines within a paragraph
    const lines = para.split("\n");
    const rendered = lines.map((line, li) => {
      const parts = renderInline(line);
      return (
        <span key={li}>
          {parts}
          {li < lines.length - 1 && <br />}
        </span>
      );
    });
    return (
      <p key={pi} style={{ margin: pi > 0 ? "10px 0 0" : "0", fontSize: 15, color: "var(--ink-2)", lineHeight: 1.65 }}>
        {rendered}
      </p>
    );
  });
}

function renderInline(text: string): React.ReactNode[] {
  // Handle **bold** and [label](url)
  const parts: React.ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1]) {
      parts.push(<strong key={m.index}>{m[1]}</strong>);
    } else {
      parts.push(
        <a key={m.index} href={m[3]} target="_blank" rel="noopener noreferrer"
           style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: 3 }}>
          {m[2]}
        </a>
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function highlight(text: string, needle: string): React.ReactNode {
  if (!needle) return text;
  const lower = normalise(text);
  const q = normalise(needle);
  const parts: React.ReactNode[] = [];
  let last = 0;
  let i = lower.indexOf(q);
  while (i !== -1) {
    if (i > last) parts.push(text.slice(last, i));
    parts.push(<mark key={i}>{text.slice(i, i + q.length)}</mark>);
    last = i + q.length;
    i = lower.indexOf(q, last);
  }
  parts.push(text.slice(last));
  return <>{parts}</>;
}

// ── Search index ──────────────────────────────────────────────────────────────

const searchIndex = FAQ.map((e) => ({
  ...e,
  _s: normalise([e.question, e.answer, e.category, e.keywords ?? ""].join(" ")),
}));

// ── Spec row ──────────────────────────────────────────────────────────────────

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button onClick={copy} className={`guide-copy-btn${copied ? " copied" : ""}`}>
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function SpecRow() {
  return (
    <div className="guide-spec">
      <div className="guide-spec-cell">
        <div className="guide-spec-k">WiFi Network</div>
        <div className="guide-spec-v">
          {apartment.wifi.network}
          <CopyButton value={apartment.wifi.network} />
        </div>
      </div>
      <div className="guide-spec-cell">
        <div className="guide-spec-k">WiFi Password</div>
        <div className="guide-spec-v">
          <span className="guide-spec-pw">{apartment.wifi.password}</span>
          <CopyButton value={apartment.wifi.password} />
        </div>
      </div>
      <div className="guide-spec-cell">
        <div className="guide-spec-k">Check-in</div>
        <div className="guide-spec-v">{apartment.checkin.from}</div>
      </div>
      <div className="guide-spec-cell">
        <div className="guide-spec-k">Check-out</div>
        <div className="guide-spec-v">{apartment.checkin.until}</div>
      </div>
      <div className="guide-spec-cell">
        <div className="guide-spec-k">Contact</div>
        <div className="guide-spec-v" style={{ fontSize: 17 }}>{apartment.host.email}</div>
      </div>
    </div>
  );
}

// ── FAQ row ───────────────────────────────────────────────────────────────────

function FaqRow({ entry, needle, isOpen, onToggle }: {
  entry: FaqEntry;
  needle: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const searching = !!needle;
  const open = searching || isOpen;
  const num = String(entry.id).padStart(2, "0");

  return (
    <div
      className="guide-faq-row"
      data-open={open}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      onClick={searching ? undefined : onToggle}
      onKeyDown={searching ? undefined : (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onToggle(); }
      }}
      style={{ cursor: searching ? "default" : "pointer" }}
    >
      <span className="guide-faq-n">{num}</span>
      <div>
        <p className="guide-faq-q">{searching ? highlight(entry.question, needle) : entry.question}</p>
        <div className="guide-faq-a">
          {searching
            ? <p style={{ margin: 0, fontSize: 15, color: "var(--ink-2)", lineHeight: 1.65 }}>{highlight(entry.answer, needle)}</p>
            : renderAnswer(entry.answer)
          }
          {entry.attachments?.map((att) => (
            <a key={att.url} href={att.url} target="_blank" rel="noopener noreferrer" className="guide-faq-attachment">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              {att.label}
            </a>
          ))}
        </div>
      </div>
      <span className="guide-faq-toggle" aria-hidden style={{ visibility: searching ? "hidden" : "visible" }} />
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export function GuestGuideView() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<number | null>(null);

  const needle = normalise(searchQuery.trim());

  const filtered = useMemo(() => {
    return searchIndex.filter((e) => {
      if (needle) return e._s.includes(needle);
      if (activeCategory === "all") return true;
      return e.category === activeCategory;
    });
  }, [needle, activeCategory]);

  const grouped = !needle && activeCategory === "all";

  const groups = useMemo(() => {
    if (!grouped) return [];
    const seen: string[] = [];
    filtered.forEach((e) => { if (!seen.includes(e.category)) seen.push(e.category); });
    return seen.map((cat) => ({
      cat,
      label: FAQ_CATEGORIES.find((c) => c.id === cat)?.label ?? cat,
      items: filtered.filter((e) => e.category === cat),
    }));
  }, [grouped, filtered]);

  const handleClearSearch = useCallback(() => {
    setSearchQuery("");
  }, []);

  return (
    <div className="page-guide">
      {/* Hero */}
      <header className="guide-hero">
        <div className="guide-hero-inner">
          <h1 className="guide-hero-title">Welcome.</h1>
          <div className="guide-hero-meta">
            <p className="guide-hero-kicker">Laya Living · Kriens · Switzerland</p>
            <p className="guide-hero-lede">We&apos;ve put together everything you need for a comfortable stay. Search or browse by category — and reach out any time if you have a question.</p>
            <p className="guide-hero-address">Nidfeldstrasse 2G · 6010 Kriens</p>
          </div>
        </div>
      </header>

      {/* Spec row */}
      <SpecRow />

      {/* FAQ section */}
      <section className="guide-section">
        <div className="guide-sec-head">
          <span className="guide-sec-num">i.</span>
          <h2 className="guide-sec-title">Guest guide.</h2>
          <p className="guide-sec-lede">Everything you need for your stay. Search for anything or filter by category.</p>
        </div>

        {/* Search */}
        <div className="guide-search-row">
          <div className="guide-search-wrap">
            <svg className="guide-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              id="guide-search"
              className="guide-search-input"
              type="search"
              placeholder="WiFi, heating, parking, check-out…"
              aria-label="Search guest guide"
              autoComplete="off"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="guide-search-clear" aria-label="Clear search" onClick={handleClearSearch}>×</button>
            )}
          </div>

          {/* Category chips */}
          <div className="guide-chips" role="list" aria-label="Filter by category">
            {[{ id: "all", label: "All" }, ...FAQ_CATEGORIES].map((cat) => (
              <button
                key={cat.id}
                className={`guide-chip${cat.id === activeCategory ? " active" : ""}`}
                onClick={() => { setActiveCategory(cat.id); setOpenId(null); }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Counter */}
        <div className="guide-counter">Showing {filtered.length} of {FAQ.length} answers</div>

        {/* FAQ list */}
        {filtered.length === 0 ? (
          <div className="guide-empty">
            Nothing matched — try another word or{" "}
            <button
              style={{ textDecoration: "underline", cursor: "pointer", font: "inherit", background: "none", border: "none", color: "inherit" }}
              onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
            >
              reset
            </button>.
          </div>
        ) : (
          <div className="guide-faq" data-searching={needle ? "true" : "false"}>
            {grouped ? (
              groups.map(({ cat, label, items }) => (
                <div key={cat} className="guide-faq-group">
                  <div className="guide-faq-topic">{label}</div>
                  {items.map((e) => (
                    <FaqRow
                      key={e.id}
                      entry={e}
                      needle={searchQuery.trim()}
                      isOpen={openId === e.id}
                      onToggle={() => setOpenId(openId === e.id ? null : e.id)}
                    />
                  ))}
                </div>
              ))
            ) : (
              filtered.map((e) => (
                <FaqRow
                  key={e.id}
                  entry={e}
                  needle={searchQuery.trim()}
                  isOpen={openId === e.id}
                  onToggle={() => setOpenId(openId === e.id ? null : e.id)}
                />
              ))
            )}
          </div>
        )}
      </section>
    </div>
  );
}
