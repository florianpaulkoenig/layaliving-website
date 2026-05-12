import { GUESTS } from "./content";
import type { SanitySiteContent } from "../../../sanity/lib/queries";

type Props = {
  sanityReviews?: SanitySiteContent["guestReviews"];
};

export function Guestbook({ sanityReviews }: Props = {}) {
  const reviews =
    sanityReviews && sanityReviews.length > 0
      ? sanityReviews.map((r) => ({ q: r.quote, who: r.who, where: r.where }))
      : GUESTS;

  return (
    <section className="h-section">
      <div className="sec-head">
        <div className="sec-num">VII — The Guestbook</div>
        <h2 className="sec-title">
          What people say <span className="it">on the way out</span>.
        </h2>
        <p className="sec-lede">
          A small, unedited selection from the book on the kitchen counter.
        </p>
      </div>
      <div className="guest">
        {reviews.map((g, i) => (
          <blockquote key={i} className="guest-card">
            <p className="guest-quote">&ldquo;{g.q}&rdquo;</p>
            <div className="guest-cite">
              <span className="who">{g.who}</span>
              <span>{g.where}</span>
            </div>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
