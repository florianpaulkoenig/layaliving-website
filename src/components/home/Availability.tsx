import Link from "next/link";

export function Availability() {
  return (
    <section className="h-section">
      <div className="sec-head">
        <div className="sec-num">III — Availability</div>
        <h2 className="sec-title">
          Next few months, <span className="it">at a glance</span>.
        </h2>
        <div>
          <p className="sec-lede" style={{ marginBottom: "1.5rem" }}>
            Live availability, straight from our calendar. Pick your dates and
            book directly — no platform fees, no middlemen.
          </p>
          <Link href="/book" className="h-btn">Check availability →</Link>
        </div>
      </div>
    </section>
  );
}
