import { GUESTS } from "./content";

export function Guestbook() {
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
        {GUESTS.map((g, i) => (
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
