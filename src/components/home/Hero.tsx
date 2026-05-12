import Image from "next/image";
import Link from "next/link";
import { HOME_IMG } from "./content";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-head">
        <h1 className="hero-title">
          A little <span className="it" style={{ color: "var(--h-accent)" }}>paradise</span>,
          <br />
          near Lucerne.
        </h1>
        <div className="hero-meta">
          <div className="eyebrow">Kriens near Lucerne · Switzerland</div>
          <p>A thoughtfully designed top-floor apartment in Kriens — bright, comfortable, and well connected. The old town is ten minutes by bus, and Pilatus, Rigi and Engelberg are all within easy reach by train or bus.</p>
          <div className="hero-actions">
            <Link href="/book" className="h-btn">Reserve your stay</Link>
            <Link href="#apartment" className="h-btn ghost">Look inside</Link>
          </div>
        </div>
      </div>
      <div className="hero-media">
        <Image
          src={HOME_IMG.hero}
          alt="Main living area"
          fill
          sizes="(max-width: 768px) 100vw, 90vw"
          priority
          className="object-cover"
          style={{ filter: "saturate(0.95)" }}
        />
        <div className="hero-caption">Fig. 01 — VIEW OF THE MAIN LIVING AREA</div>
      </div>
    </section>
  );
}
