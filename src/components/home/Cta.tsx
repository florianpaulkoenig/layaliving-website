import Link from "next/link";

export function Cta() {
  return (
    <section className="cta-band">
      <div className="eyebrow">Available May – November</div>
      <h2>
        See you soon, <span className="it">in Lucerne</span>.
      </h2>
      <div className="actions">
        <Link href="/book" className="h-btn">Check availability</Link>
        <Link href="/contact" className="h-btn ghost">Get in touch</Link>
      </div>
    </section>
  );
}
