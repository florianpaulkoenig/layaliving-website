import Link from "next/link";

export const metadata = {
  title: "Location — Laya Living",
  description: "Triangolo apartment in Kriens, Lucerne — the base for your Alpine getaway.",
};

export default function LocationPage() {
  return (
    <>
      <section className="wrap py-20 md:py-28">
        <p className="kicker">Location</p>
        <h1 className="mt-4 text-5xl sm:text-6xl text-balance lg:text-7xl">
          Kriens, Lucerne —{" "}
          <em className="italic text-sage-dark">quiet above,</em> lively below.
        </h1>
        <p className="mt-6 max-w-prose text-pretty text-lg text-ink-muted">
          Triangolo sits on the hill above Kriens, 10 minutes by bike from
          the old town of Lucerne. Close enough to feel part of the city;
          high enough to breathe mountain air.
        </p>
      </section>

      <section className="bg-cream-light py-16 md:py-24">
        <div className="wrap grid gap-10 md:grid-cols-3">
          <Stat label="To Lucerne old town" value="10 min" sub="by bike or bus" />
          <Stat label="To Mount Pilatus base" value="15 min" sub="on foot" />
          <Stat label="To Zurich airport" value="55 min" sub="by train + car" />
        </div>
      </section>

      <section className="wrap py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl">The view from the couch.</h2>
            <p className="mt-4 max-w-prose text-ink-muted">
              Rigi to the east. Stanserhorn opposite. Pilatus a handshake
              away. From sunrise gold on the Rigi face to evening blue over
              the Pilatus ridge, the panorama is yours — from the couch,
              the bed, or the balcony.
            </p>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl">Car-free by design.</h2>
            <p className="mt-4 max-w-prose text-ink-muted">
              Two vintage city bikes are parked at the door. Bus stop 90
              seconds away. The Lucerne bike highway runs right past the
              building — you&rsquo;ll reach the Kapellbrücke in about 10
              easy minutes, mostly along the river.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-cream-dark/40">
        <div className="wrap py-16 md:py-20 text-center">
          <p className="kicker">Ready?</p>
          <h2 className="mt-3 text-4xl">Check availability for your dates.</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/book" className="btn-primary">Book Now</Link>
            <Link href="/contact" className="btn-ghost">Ask a question</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div>
      <p className="kicker">{label}</p>
      <p className="mt-2 font-display text-5xl text-ink">{value}</p>
      <p className="text-sm text-ink-muted">{sub}</p>
    </div>
  );
}
