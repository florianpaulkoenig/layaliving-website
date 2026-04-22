import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <FeatureSections />
      <LocalExperience />
      <Cta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-cream">
      <div className="wrap grid gap-10 py-20 md:py-28 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="flex flex-col justify-center">
          <p className="kicker">Lucerne · Switzerland</p>
          <h1 className="mt-5 font-display text-5xl text-balance sm:text-6xl lg:text-7xl">
            A little <em className="not-italic text-sage-dark">paradise</em>{" "}
            near Lucerne.
          </h1>
          <p className="mt-6 max-w-prose text-pretty text-lg text-ink-muted">
            Triangolo — a bright apartment with panoramic Alpine views,
            perfect for your city trip, a romantic weekend, or a day on Mount
            Pilatus.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/book" className="btn-primary">
              Book Now
            </Link>
            <Link href="/location" className="btn-ghost">
              See the apartment
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded bg-cream-dark shadow-image">
          <div className="absolute inset-0 flex items-center justify-center text-center text-sm text-ink-muted/60">
            <span>
              Hero image
              <br />
              (Triangolo / Lucerne)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="wrap py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="kicker">The Apartment</p>
        <h2 className="mt-4 text-4xl sm:text-5xl">
          Above the rooftops,{" "}
          <em className="italic text-sage-dark">face to face</em> with the Alps.
        </h2>
        <p className="mt-6 text-lg text-pretty text-ink-muted">
          Perched above Kriens, Triangolo offers panoramic views that bring the
          mountains to your doorstep. Wake up to the majestic Rigi from your
          bed and enjoy unobstructed vistas of the iconic Pilatus and
          Stanserhorn.
        </p>
        <p className="mt-4 text-lg text-pretty text-ink-muted">
          Designed with a modern, minimalist aesthetic, the apartment blends
          natural materials and a carefully curated colour palette to create a
          sense of calm and balance.
        </p>
      </div>
    </section>
  );
}

const FEATURES = [
  {
    kicker: "Living Room",
    title: "A spacious space to share",
    body: "Enjoy a glass of wine on the couch — or a romantic dinner with breathtaking mountain views.",
  },
  {
    kicker: "Design",
    title: "Thoughtful details, colour, and craft",
    body: "Our interior designer has a passion for colours and materials, thoughtfully curating every detail of the apartment.",
  },
  {
    kicker: "Bedroom",
    title: "Soft linens, layered textures",
    body: "Designed for restful nights. Warm, calm, and instantly inviting.",
  },
  {
    kicker: "Space for 4",
    title: "Room to spread out",
    body: "The apartment comfortably sleeps up to four. A high-quality sofa bed turns the living area into a second bedroom.",
  },
  {
    kicker: "The view",
    title: "Rigi. Titlis. Pilatus. All from the couch.",
    body: "From sunrise on Rigi to sunset over the Pilatus ridge — you have the full panorama.",
  },
];

function FeatureSections() {
  return (
    <section className="bg-cream-light py-20 md:py-28">
      <div className="wrap">
        <div className="grid gap-10 md:grid-cols-2 lg:gap-14">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="flex flex-col gap-3 border-t border-line pt-6"
            >
              <p className="kicker">{f.kicker}</p>
              <h3 className="text-3xl sm:text-4xl text-balance">{f.title}</h3>
              <p className="max-w-prose text-pretty text-ink-muted">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocalExperience() {
  return (
    <section className="wrap py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
        <div>
          <p className="kicker">Cruise like a local</p>
          <h2 className="mt-4 text-4xl sm:text-5xl text-balance">
            Two vintage bikes — and a city waiting to be rolled through.
          </h2>
          <p className="mt-5 max-w-prose text-pretty text-ink-muted">
            In Lucerne, cycling is a way of life. Triangolo comes with two
            charming vintage bikes — the kind beloved by locals. Glide along
            the scenic &ldquo;bike highway&rdquo; and reach the heart of the
            old town in minutes.
          </p>
        </div>
        <div>
          <p className="kicker">Wine & dine at hidden gems</p>
          <h2 className="mt-4 text-4xl sm:text-5xl text-balance">
            The places locals don&rsquo;t share online — we share with you.
          </h2>
          <p className="mt-5 max-w-prose text-pretty text-ink-muted">
            Lucerne&rsquo;s culinary scene is full of hidden gems. In your
            Triangolo apartment you&rsquo;ll find a curated guide to our
            favourite local spots — from cosy wine bars to family-run
            kitchens.
          </p>
          <Link
            href="/recommendations"
            className="btn-ghost mt-6 !px-5 !py-2.5 !text-[12px]"
          >
            Our Recommendations →
          </Link>
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="border-t border-line bg-cream-dark/40">
      <div className="wrap py-20 text-center md:py-24">
        <p className="kicker">Lucerne at its best</p>
        <h2 className="mt-4 text-4xl sm:text-5xl text-balance">
          See you soon <em className="italic text-sage-dark">in Lucerne</em>.
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/book" className="btn-primary">
            Book Now
          </Link>
          <Link href="/contact" className="btn-ghost">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
