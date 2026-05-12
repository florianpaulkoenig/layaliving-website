import Image from "next/image";
import Link from "next/link";
import { LocationMap } from "@/components/location/LocationMap";
import "../pages.css";

export const metadata = {
  title: "Location — Laya Living",
  description:
    "Our apartment in Kriens near Lucerne — the perfect base for your Alpine getaway.",
};

export default function LocationPage() {
  return (
    <div className="page-location">
      {/* ─── Page header ─── */}
      <header className="ph">
        <div className="ph-kicker">Location</div>
        <h1>
          Kriens near Lucerne —{" "}
          <span className="it-accent">urban and new, with the mountains close</span>.
        </h1>
        <p className="lede">
          The apartment sits on the top floor of a newly built campus near
          Lucerne. Close enough to the city — but high enough to breathe. The
          bus stop is right in front of the building, and the local train
          station (with trains to Lucerne and Engelberg) is around ten minutes
          on foot.
        </p>
      </header>

      {/* ─── Styled map ─── */}
      <div className="loc-hero">
        <div className="loc-map-wrap">
          <LocationMap />
        </div>
      </div>

      {/* ─── Transit ledger ─── */}
      <div className="loc-stats">
        <Stat k="Lucerne old town" n="10" unit="min" mode="by bus (Bus 14)" />
        <Stat k="Mount Pilatus base" n="15" unit="min" mode="by bus from Kriens Sternmatt" />
        <Stat k="Zurich airport" n="50 / 80" unit="min" mode="by car / by train" />
        <Stat k="Engelberg (Mt. Titlis)" n="35 / 60" unit="min" mode="by car / by train" />
      </div>

      {/* ─── Two content blocks ─── */}
      <div className="loc-blocks">
        <div className="b">
          <h2>
            The view <span className="it-accent">from the couch</span>.
          </h2>
          <p>On clear days, the Rigi is visible from the balcony. The Bürgenstock sits to the right.</p>
          <div className="ledger">
            <div><div className="k">Rigi</div><div className="v">1 798 m</div></div>
            <div><div className="k">Bürgenstock</div><div className="v">874 m</div></div>
          </div>
        </div>
        <div className="b">
          <h2>
            Getting around, <span className="it-accent">effortlessly</span>.
          </h2>
          <p>
            Bus No. 14 stops right in front of the building and takes you to
            Lucerne main station in about ten minutes. Mattenhof S-Bahn station
            is a short walk away — from there it&apos;s around five minutes by
            train to Lucerne Bahnhof.
          </p>
          <p>
            Bikes are available to rent near the apartment — a flat, scenic
            ride along the river brings you to the Kapellbrücke in roughly
            ten minutes.
          </p>
          <div className="ledger">
            <div><div className="k">Bus</div><div className="v">№ 14 · at the door</div></div>
            <div><div className="k">Train</div><div className="v">Mattenhof S-Bahn · 10 min walk</div></div>
            <div><div className="k">Bikes</div><div className="v">To rent nearby</div></div>
            <div><div className="k">Parking</div><div className="v">~CHF 1 / hour</div></div>
          </div>
        </div>
      </div>

      {/* ─── Photo panels ─── */}
      <div className="loc-panels">
        <figure className="p">
          <div className="fig">
            <Image
              src="/images/balcony-view.jpg"
              alt="View from the balcony"
              fill
              sizes="(max-width: 768px) 100vw, 48vw"
              className="object-cover"
            />
          </div>
          <div className="cap"><span>Fig. 02</span><span>VIEW FROM THE BALCONY</span></div>
          <h3>The Rigi from the balcony.</h3>
          <p>On clear days, you can see the Rigi from the balcony. The Bürgenstock sits to the right.</p>
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
          <h3>Car-free into the city from the door.</h3>
          <p>
            The Velohighway starts right outside the building — a dedicated,
            flat cycle path that takes you car-free into Lucerne old town in
            about ten minutes.
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
