import Image from "next/image";
import { JOURNAL } from "./content";

export function Journal() {
  return (
    <section className="h-section">
      <div className="sec-head">
        <div className="sec-num">VI — The Journal</div>
        <h2 className="sec-title">
          Small dispatches <span className="it">from Kriens</span>.
        </h2>
        <p className="sec-lede">
          A slow, occasional journal — recipes, walks, favourite corners.
          Written when there&apos;s something worth saying.
        </p>
      </div>
      <div className="journal">
        {JOURNAL.map((j) => (
          <article key={j.n} className="journal-card">
            <div className="fig">
              <Image
                src={j.img}
                alt={j.title}
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover"
              />
            </div>
            <div className="kicker-row">
              <span>{j.kicker}</span>
              <span>{j.date}</span>
            </div>
            <h4>{j.title}</h4>
            <p>{j.body}</p>
            <span className="read">Read the piece →</span>
          </article>
        ))}
      </div>
    </section>
  );
}
