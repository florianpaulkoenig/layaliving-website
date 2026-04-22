import Link from "next/link";

function monthName(d: Date) {
  return d.toLocaleString("en-US", { month: "long", year: "numeric" });
}

function buildMonth(year: number, month: number) {
  const first = new Date(year, month, 1);
  const start = (first.getDay() + 6) % 7; // Monday-first
  const days = new Date(year, month + 1, 0).getDate();
  const cells: Array<{ day?: number; empty?: boolean }> = [];
  for (let i = 0; i < start; i++) cells.push({ empty: true });
  for (let d = 1; d <= days; d++) cells.push({ day: d });
  while (cells.length < 42) cells.push({ empty: true });
  return cells;
}

// Deterministic seeded occupancy so the preview calendar looks intentional.
function occupancy(year: number, month: number, day: number): "free" | "held" | "booked" {
  const key = (((year * 31 + (month + 1)) * 31 + day) * 2654435761) >>> 0;
  const r = key % 100;
  if (r < 44) return "booked";
  if (r < 58) return "held";
  return "free";
}

type CalMonthProps = { year: number; month: number; today: Date };

function CalMonth({ year, month, today }: CalMonthProps) {
  const cells = buildMonth(year, month);
  const d = new Date(year, month, 1);
  const rate =
    month >= 5 && month <= 8
      ? "CHF 280 / n"
      : month === 11 || month <= 1
      ? "CHF 260 / n"
      : "CHF 220 / n";
  return (
    <div className="cal-month">
      <h4>
        {monthName(d)}
        <span className="rate">{rate}</span>
      </h4>
      <div className="cal-grid">
        {["M", "T", "W", "T", "F", "S", "S"].map((x, i) => (
          <div key={i} className="cal-dow">{x}</div>
        ))}
        {cells.map((c, i) => {
          if (c.empty) return <div key={i} className="cal-cell empty">·</div>;
          const st = occupancy(year, month, c.day!);
          const isToday =
            c.day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();
          return (
            <div key={i} className={`cal-cell ${st}${isToday ? " today" : ""}`}>
              {c.day}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Availability() {
  const today = new Date();
  const base = new Date(today.getFullYear(), today.getMonth(), 1);
  const months: [number, number][] = [0, 1, 2].map((offset) => {
    const d = new Date(base.getFullYear(), base.getMonth() + offset, 1);
    return [d.getFullYear(), d.getMonth()];
  });

  return (
    <section className="h-section">
      <div className="sec-head">
        <div className="sec-num">III — Availability</div>
        <h2 className="sec-title">
          Next few months, <span className="it">at a glance</span>.
        </h2>
        <p className="sec-lede">
          A quiet ledger of the apartment&apos;s availability. Booked, held,
          or yours to claim.
        </p>
      </div>

      <div className="cal-wrap">
        <div className="cal-aside">
          <h3>
            Pick a week. We&apos;ll keep the{" "}
            <span className="it">lights on</span>.
          </h3>
          <p>
            Most guests stay three to five nights; the minimum is two. Longer
            stays (a week or more) are usually available at a reduced nightly
            rate — write to us for the long-stay ledger.
          </p>
          <div className="cal-legend">
            <div className="row">
              <span
                className="cal-swatch"
                style={{ background: "color-mix(in oklab, var(--h-accent) 10%, transparent)" }}
              />{" "}
              Available
            </div>
            <div className="row">
              <span
                className="cal-swatch"
                style={{ background: "color-mix(in oklab, var(--h-accent-warm) 25%, transparent)" }}
              />{" "}
              On hold
            </div>
            <div className="row">
              <span className="cal-swatch" style={{ background: "var(--h-ink)" }} /> Booked
            </div>
          </div>
          <Link
            href="/book"
            className="h-btn"
            style={{ alignSelf: "flex-start", marginTop: 8 }}
          >
            Open full calendar
          </Link>
        </div>
        <div className="cal-months">
          {months.map(([y, m]) => (
            <CalMonth key={`${y}-${m}`} year={y} month={m} today={today} />
          ))}
        </div>
      </div>
    </section>
  );
}
