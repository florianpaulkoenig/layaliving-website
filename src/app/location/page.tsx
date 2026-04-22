import Image from "next/image";
import Link from "next/link";
import "../pages.css";

export const metadata = {
  title: "Location — Laya Living",
  description:
    "Triangolo apartment in Kriens, Lucerne — the base for your Alpine getaway.",
};

export default function LocationPage() {
  return (
    <div className="page-location">
      {/* ─── Page header ─── */}
      <header className="ph">
        <div className="ph-kicker">Location</div>
        <h1>
          Kriens, Lucerne —{" "}
          <span className="it-accent">quiet above, lively below</span>.
        </h1>
        <p className="lede">
          Triangolo sits on the hill above Kriens, ten minutes by bike from the
          old town of Lucerne. Close enough to feel part of the city; high
          enough to breathe mountain air.
        </p>
      </header>

      {/* ─── Panoramic hero ─── */}
      <div className="loc-hero">
        <div className="fig">
          <Image
            src="/images/lucerne-vista.jpg"
            alt="Panoramic view of Lucerne"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* ─── Transit ledger ─── */}
      <div className="loc-stats">
        <Stat k="To Lucerne old town" n="10" unit="min" mode="by bike or bus" />
        <Stat k="To Mount Pilatus base" n="15" unit="min" mode="on foot" />
        <Stat k="To Zurich airport" n="55" unit="min" mode="by train + car" />
      </div>

      {/* ─── Two content blocks ─── */}
      <div className="loc-blocks">
        <div className="b">
          <h2>
            The view <span className="it-accent">from the couch</span>.
          </h2>
          <p>Rigi to the east. Stanserhorn opposite. Pilatus a handshake away.</p>
          <p>
            From sunrise gold on the Rigi face to evening blue over the Pilatus
            ridge, the panorama is yours — from the couch, the bed, or the
            balcony.
          </p>
          <div className="ledger">
            <div><div className="k">Rigi</div><div className="v">1 798 m</div></div>
            <div><div className="k">Pilatus</div><div className="v">2 128 m</div></div>
            <div><div className="k">Stanserhorn</div><div className="v">1 898 m</div></div>
          </div>
        </div>
        <div className="b">
          <h2>
            Car-free <span className="it-accent">by design</span>.
          </h2>
          <p>
            Two vintage city bikes are parked at the door. Bus stop ninety
            seconds away.
          </p>
          <p>
            The Lucerne bike highway runs right past the building — you&rsquo;ll
            reach the Kapellbrücke in about ten easy minutes, mostly along the
            river.
          </p>
          <div className="ledger">
            <div><div className="k">Bus</div><div className="v">№ 1 · 90 s</div></div>
            <div><div className="k">Bikes</div><div className="v">2 included</div></div>
            <div><div className="k">Parking</div><div className="v">On request</div></div>
          </div>
        </div>
      </div>

      {/* ─── Photo panels ─── */}
      <div className="loc-panels">
        <figure className="p">
          <div className="fig">
            <Image
              src="/images/titlis.jpg"
              alt="Alps from the balcony"
              fill
              sizes="(max-width: 768px) 100vw, 48vw"
              className="object-cover"
            />
          </div>
          <div className="cap"><span>Fig. 02</span><span>From the balcony</span></div>
          <h3>A panorama that changes by the hour.</h3>
          <p>
            The Föhn light in autumn; the thin pink edge at sunrise in
            February; the long blue of July evenings. The view is the sixth
            member of the family.
          </p>
        </figure>
        <figure className="p">
          <div className="fig">
            <Image
              src="/images/bike-kapellbrucke.jpg"
              alt="Old town by bike"
              fill
              sizes="(max-width: 768px) 100vw, 48vw"
              className="object-cover"
            />
          </div>
          <div className="cap"><span>Fig. 03</span><span>Ten minutes to the old town</span></div>
          <h3>Along the Reuss, through the wooden bridge.</h3>
          <p>
            A mostly-flat ride along the river. You arrive in the old town
            without breaking a sweat, and leave again at your own pace.
          </p>
        </figure>
      </div>

      {/* ─── CTA band ─── */}
      <section className="cta-band">
        <div className="kicker">Ready?</div>
        <h2>
          Check availability <span className="it-accent">for your dates</span>.
        </h2>
        <div className="actions">
          <Link href="/book" className="btn-primary">Book now</Link>
          <Link href="/contact" className="btn-ghost">Ask a question</Link>
        </div>
      </section>
    </div>
  );
}

function Stat({
  k,
  n,
  unit,
  mode,
}: {
  k: string;
  n: string;
  unit: string;
  mode: string;
}) {
  return (
    <div className="loc-stat">
      <div className="k">{k}</div>
      <div className="v">
        {n}
        <span className="unit">{unit}</span>
      </div>
      <div className="mode">{mode}</div>
    </div>
  );
}
