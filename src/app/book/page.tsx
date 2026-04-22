import { BookView } from "@/components/book/BookView";
import { LodgifyBookNowBox } from "@/components/LodgifyBookNowBox";
import "../pages.css";

export const metadata = {
  title: "Book Now — Laya Living",
  description:
    "Check availability and book Triangolo directly — no platform fees.",
};

/**
 * The main /book route ships the Alpine Quiet façade (custom calendar +
 * guest picker + summary). "Request to reserve" opens a mailto to the
 * host with the proposed stay; they confirm the reservation via their
 * Lodgify backend.
 *
 * `?view=lodgify` falls back to the embedded Lodgify Book-Now-Box for
 * guests who prefer the calendar-partner's direct online flow.
 */
export default function BookPage({
  searchParams,
}: {
  searchParams?: { view?: string };
}) {
  if (searchParams?.view === "lodgify") {
    return (
      <section className="wrap py-20 md:py-28">
        <div className="mx-auto max-w-xl">
          <p className="kicker">Book directly</p>
          <h1 className="mt-4 text-5xl text-balance">
            Book <em className="it-accent">directly</em> — the best rate.
          </h1>
          <p className="mt-6 text-ink-soft">
            Reserve Triangolo straight through our calendar partner — same
            quality, no middlemen.
          </p>
          <div className="mt-10">
            <LodgifyBookNowBox language="en" />
          </div>
        </div>
      </section>
    );
  }

  return <BookView heroImage="/images/living-room.jpg" />;
}
