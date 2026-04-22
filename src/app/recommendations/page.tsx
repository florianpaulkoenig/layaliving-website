import Link from "next/link";

export const metadata = {
  title: "Our Recommendations — Laya Living",
  description: "Hand-picked places to eat, drink, hike, cycle, and explore in Lucerne.",
};

const CATEGORIES = [
  { slug: "eat", title: "Eat", hint: "Family-run kitchens to quiet fine dining" },
  { slug: "drink", title: "Drink", hint: "Third-wave coffee, wine bars, late-night cocktails" },
  { slug: "hike", title: "Hike & Nature", hint: "Rigi, Pilatus, Stanserhorn & more" },
  { slug: "bike", title: "Bike Routes", hint: "Velohighway and scenic loops" },
  { slug: "culture", title: "Culture", hint: "Museums, old town, seasonal events" },
  { slug: "daytrips", title: "Day Trips", hint: "Engelberg, Interlaken, Zurich" },
  { slug: "family", title: "Family & Kids", hint: "Tested by locals with small humans" },
  { slug: "gems", title: "Hidden Gems", hint: "The places we don't share online" },
];

export default function RecommendationsPage() {
  return (
    <>
      <section className="wrap py-20 md:py-28">
        <p className="kicker">Our Recommendations</p>
        <h1 className="mt-4 text-5xl sm:text-6xl text-balance lg:text-7xl">
          Our Lucerne, <em className="italic text-sage-dark">curated</em> for
          you.
        </h1>
        <p className="mt-6 max-w-prose text-pretty text-lg text-ink-muted">
          The restaurants, trails and rituals we&rsquo;d take a friend to.
          Filter by mood, distance, or season — coming soon to your
          Triangolo welcome guide.
        </p>
      </section>

      <section className="bg-cream-light py-16 md:py-20">
        <div className="wrap grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <div
              key={c.slug}
              className="group flex flex-col gap-2 rounded border border-line bg-white p-6 transition hover:border-ink/25"
            >
              <p className="kicker text-sage-dark">{c.title}</p>
              <h3 className="text-2xl">{c.hint}</h3>
              <span className="mt-auto pt-4 text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                Coming soon
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap py-16 text-center">
        <p className="text-ink-muted">
          Want a sneak peek of our favourites?{" "}
          <Link href="/contact" className="text-ink underline underline-offset-4">
            Get in touch
          </Link>
          .
        </p>
      </section>
    </>
  );
}
