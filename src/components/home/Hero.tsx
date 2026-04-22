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
          above the Alps.
        </h1>
        <div className="hero-meta">
          <div className="eyebrow">Kriens · Lucerne · Switzerland</div>
          <p>
            Triangolo — a quiet apartment perched over Kriens, face to face
            with Rigi, Pilatus and Stanserhorn. For a city trip, a slow
            weekend, or a long Alpine pause.
          </p>
          <div className="hero-actions">
            <Link href="/book" className="h-btn">Reserve your stay</Link>
            <Link href="#apartment" className="h-btn ghost">Look inside</Link>
          </div>
        </div>
      </div>
      <div className="hero-media">
        <Image
          src={HOME_IMG.lucerne}
          alt="Lucerne riverside at dusk"
          fill
          sizes="(max-width: 768px) 100vw, 90vw"
          priority
          className="object-cover"
          style={{ filter: "saturate(0.95)" }}
        />
        <div className="hero-caption">Fig. 01 — Reuss at dusk</div>
      </div>
    </section>
  );
}
