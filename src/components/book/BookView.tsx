"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Range = { from: Date | null; to: Date | null };

type Guests = { adults: number; children: number; infants: number };

/** Seeded deterministic occupancy — replace with Lodgify availability feed. */
function bookOccupancy(y: number, m: number, d: number): boolean {
  const key = ((((y * 31 + (m + 1)) * 31 + d) * 2654435761) >>> 0);
  return key % 100 < 36;
}

function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function formatDate(d: Date | null): string {
  return d
    ? d.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "—";
}

function formatIso(d: Date | null): string | null {
  if (!d) return null;
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

type MonthProps = {
  year: number;
  month: number;
  range: Range;
  onPick: (d: Date) => void;
};

function BookMonth({ year, month, range, onPick }: MonthProps) {
  const first = new Date(year, month, 1);
  const start = (first.getDay() + 6) % 7; // Monday-first
  const days = new Date(year, month + 1, 0).getDate();

  const cells: Array<{ day?: number; empty?: boolean }> = [];
  for (let i = 0; i < start; i++) cells.push({ empty: true });
  for (let d = 1; d <= days; d++) cells.push({ day: d });

  const label = first.toLocaleString("en-US", { month: "long", year: "numeric" });

  const inRange = (d: number) => {
    if (!range.from) return false;
    const date = new Date(year, month, d);
    if (!range.to) return sameDay(date, range.from);
    return date >= range.from && date <= range.to;
  };
  const edge = (d: number, which: "start" | "end") => {
    const date = new Date(year, month, d);
    if (which === "start") return !!range.from && sameDay(date, range.from);
    return !!range.to && sameDay(date, range.to);
  };

  return (
    <div className="bc-month">
      <h4>{label}</h4>
      <div className="bc-grid">
        {["M", "T", "W", "T", "F", "S", "S"].map((x, i) => (
          <div key={i} className="bc-dow">{x}</div>
        ))}
        {cells.map((c, i) => {
          if (c.empty) return <div key={i} className="bc-cell empty">·</div>;
          const d = c.day!;
          const booked = bookOccupancy(year, month, d);
          const cls = [
            "bc-cell",
            booked && "booked",
            !booked && inRange(d) && "in-range",
            edge(d, "start") && "range-start",
            edge(d, "end") && "range-end",
          ]
            .filter(Boolean)
            .join(" ");
          return (
            <div
              key={i}
              className={cls}
              onClick={() => !booked && onPick(new Date(year, month, d))}
              role="button"
              tabIndex={booked ? -1 : 0}
              aria-disabled={booked}
            >
              {d}
            </div>
          );
        })}
      </div>
    </div>
  );
}

type Props = { heroImage: string };

export function BookView({ heroImage }: Props) {
  const today = new Date();
  const defaultFrom = new Date(today.getFullYear(), today.getMonth() + 1, 14);
  const defaultTo = new Date(today.getFullYear(), today.getMonth() + 1, 19);

  const [range, setRange] = useState<Range>({ from: defaultFrom, to: defaultTo });
  const [guests, setGuests] = useState<Guests>({ adults: 2, children: 0, infants: 0 });

  const onPick = (d: Date) => {
    setRange((r) => {
      if (!r.from || (r.from && r.to)) return { from: d, to: null };
      if (d < r.from) return { from: d, to: r.from };
      return { from: r.from, to: d };
    });
  };

  const nights = useMemo(() => {
    if (!range.from || !range.to) return 0;
    return Math.round((+range.to - +range.from) / 86_400_000);
  }, [range]);
  const rate = 240;
  const cleaning = nights ? 80 : 0;
  const subtotal = nights * rate;
  const total = subtotal + cleaning;

  const monthOffset = today.getMonth() + 1;
  const monthA: [number, number] = [
    new Date(today.getFullYear(), monthOffset, 1).getFullYear(),
    new Date(today.getFullYear(), monthOffset, 1).getMonth(),
  ];
  const monthB: [number, number] = [
    new Date(today.getFullYear(), monthOffset + 1, 1).getFullYear(),
    new Date(today.getFullYear(), monthOffset + 1, 1).getMonth(),
  ];

  // ─── Mailto handoff ────────────────────────────────────────────────────
  // "Option A" from the handoff: custom UI is a façade, actual booking
  // flow is handled off-site. We email the host with the proposed stay so
  // they can confirm via Lodgify. The `/book?view=lodgify` route keeps
  // the original Book-Now-Box as a direct-booking fallback.
  const reserveHref = (() => {
    const params = new URLSearchParams();
    const from = formatIso(range.from);
    const to = formatIso(range.to);
    if (from) params.set("arrival", from);
    if (to) params.set("departure", to);
    params.set("adults", String(guests.adults));
    params.set("children", String(guests.children));
    params.set("infants", String(guests.infants));

    const subject = "Reservation request — Triangolo, Laya Living";
    const body = [
      "Hi Laya team,",
      "",
      `I'd like to reserve Triangolo from ${formatDate(range.from)} to ${formatDate(range.to)} (${nights} night${nights === 1 ? "" : "s"}).`,
      "",
      `Guests: ${guests.adults} adult${guests.adults === 1 ? "" : "s"}${
        guests.children ? `, ${guests.children} child${guests.children === 1 ? "" : "ren"}` : ""
      }${guests.infants ? `, ${guests.infants} infant${guests.infants === 1 ? "" : "s"}` : ""}.`,
      "",
      `Estimated total: CHF ${total.toLocaleString()}.`,
      "",
      "Thanks!",
    ].join("\n");

    return `mailto:info@layaliving.ch?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  })();

  return (
    <div className="page-book">
      <header className="ph">
        <div className="ph-kicker">Book now</div>
        <h1>
          Reserve your <span className="it-accent">quiet week</span>.
        </h1>
        <p className="lede">
          Pick your dates, count your party, and we&apos;ll hold the apartment
          for you in the next step.
        </p>
      </header>

      <div className="book">
        {/* Main flow */}
        <div className="book-main">
          {/* Stepper */}
          <div className="book-steps">
            <div className="book-step active">
              <span className="n">01</span>
              <span className="t">Dates &amp; guests</span>
            </div>
            <div className="book-step">
              <span className="n">02</span>
              <span className="t">Your details</span>
            </div>
            <div className="book-step">
              <span className="n">03</span>
              <span className="t">Payment</span>
            </div>
            <div className="book-step">
              <span className="n">04</span>
              <span className="t">Confirmation</span>
            </div>
          </div>

          <h2 className="book-section-title">
            Pick your <span className="it-accent">dates</span>.
          </h2>
          <p className="book-section-sub">
            Click a start date, then an end date. Cross-hatched cells are
            already booked.
          </p>
          <div className="book-cal-wrap">
            <BookMonth year={monthA[0]} month={monthA[1]} range={range} onPick={onPick} />
            <BookMonth year={monthB[0]} month={monthB[1]} range={range} onPick={onPick} />
          </div>

          {/* Guests */}
          <div className="book-guests">
            <GuestStep
              label="Adults"
              sub="Age 13 +"
              v={guests.adults}
              min={1}
              max={4}
              onChange={(n) => setGuests((g) => ({ ...g, adults: n }))}
            />
            <GuestStep
              label="Children"
              sub="Age 2 – 12"
              v={guests.children}
              min={0}
              max={3}
              onChange={(n) => setGuests((g) => ({ ...g, children: n }))}
            />
            <GuestStep
              label="Infants"
              sub="Under 2"
              v={guests.infants}
              min={0}
              max={2}
              onChange={(n) => setGuests((g) => ({ ...g, infants: n }))}
            />
          </div>
        </div>

        {/* Sticky summary */}
        <aside className="book-side">
          <div className="fig">
            <Image
              src={heroImage}
              alt="Triangolo living room"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <h3>Triangolo</h3>
          <div className="loc">Kriens · Lucerne</div>
          <div className="summary">
            <div className="row"><span className="k">Check-in</span><span className="v">{formatDate(range.from)}</span></div>
            <div className="row"><span className="k">Check-out</span><span className="v">{formatDate(range.to)}</span></div>
            <div className="row">
              <span className="k">Guests</span>
              <span className="v">
                {guests.adults + guests.children}
                {guests.infants
                  ? ` + ${guests.infants} infant${guests.infants === 1 ? "" : "s"}`
                  : ""}
              </span>
            </div>
          </div>
          <div className="summary">
            <div className="row">
              <span className="k">
                CHF {rate} × {nights} night{nights === 1 ? "" : "s"}
              </span>
              <span className="v">CHF {subtotal.toLocaleString()}</span>
            </div>
            <div className="row">
              <span className="k">Cleaning fee</span>
              <span className="v">CHF {cleaning}</span>
            </div>
          </div>
          <div className="total">
            <span className="k">Total (CHF)</span>
            <span className="v">CHF {total.toLocaleString()}</span>
          </div>
          <a
            className="btn-primary confirm"
            href={nights > 0 ? reserveHref : undefined}
            aria-disabled={nights === 0}
            onClick={(e) => {
              if (nights === 0) e.preventDefault();
            }}
          >
            Request to reserve →
          </a>
          <p className="fine">
            You won&apos;t be charged yet — we&apos;ll confirm within 3 hours.
          </p>
        </aside>
      </div>

      {/* Fallback: full Lodgify widget for direct online booking */}
      <div className="book-fallback">
        <p>
          Prefer to book straight through our calendar partner?{" "}
          <Link href="/book?view=lodgify">Open the Lodgify booking widget →</Link>
        </p>
      </div>
    </div>
  );
}

type GuestStepProps = {
  label: string;
  sub: string;
  v: number;
  min: number;
  max: number;
  onChange: (n: number) => void;
};

function GuestStep({ label, sub, v, min, max, onChange }: GuestStepProps) {
  return (
    <div className="row">
      <div className="k">{label}</div>
      <div className="stepper">
        <button
          type="button"
          aria-label={`Decrease ${label.toLowerCase()}`}
          onClick={() => onChange(Math.max(min, v - 1))}
          disabled={v <= min}
        >
          −
        </button>
        <div className="v">{v}</div>
        <button
          type="button"
          aria-label={`Increase ${label.toLowerCase()}`}
          onClick={() => onChange(Math.min(max, v + 1))}
          disabled={v >= max}
        >
          +
        </button>
      </div>
      <div className="sub">{sub}</div>
    </div>
  );
}
