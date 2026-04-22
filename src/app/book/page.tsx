import { LodgifyBookNowBox } from "@/components/LodgifyBookNowBox";

export const metadata = {
  title: "Book Now — Laya Living",
  description: "Check availability and book Triangolo directly — no platform fees.",
};

export default function BookPage() {
  return (
    <section className="wrap py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <p className="kicker">Book directly</p>
          <h1 className="mt-4 text-5xl sm:text-6xl text-balance lg:text-7xl">
            Book <em className="italic text-sage-dark">directly</em> — the best rate, no middlemen.
          </h1>
          <p className="mt-6 max-w-prose text-pretty text-lg text-ink-muted">
            Reserve Triangolo straight from us. Same calendar, same quality —
            without the Airbnb and Booking.com fees on top.
          </p>

          <ul className="mt-10 space-y-4 text-ink-muted">
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sage-dark" />
              <span>
                <strong className="text-ink">Best price guarantee.</strong>{" "}
                Direct is always the lowest rate.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sage-dark" />
              <span>
                <strong className="text-ink">Flexible communication.</strong>{" "}
                Reach us at any time on{" "}
                <a
                  href="mailto:info@layaliving.ch"
                  className="underline-offset-4 hover:underline"
                >
                  info@layaliving.ch
                </a>
                .
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sage-dark" />
              <span>
                <strong className="text-ink">Immediate confirmation.</strong>{" "}
                Secure checkout — no manual approval.
              </span>
            </li>
          </ul>
        </div>

        <div className="md:sticky md:top-24 md:self-start">
          <LodgifyBookNowBox language="en" />
        </div>
      </div>
    </section>
  );
}
