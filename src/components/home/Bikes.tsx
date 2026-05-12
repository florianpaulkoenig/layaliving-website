import Image from "next/image";
import { HOME_IMG } from "./content";

export function Bikes() {
  return (
    <section className="h-section">
      <div className="sec-head">
        <div className="sec-num">IV — Cruise like a local</div>
        <h2 className="sec-title">
          Bicycles to rent, and a city waiting to be explored.
        </h2>
        <p className="sec-lede">
          On the campus you can find bicycles to rent — the perfect way to
          explore Lucerne like a local.
        </p>
      </div>
      <div className="split">
        <div className="split-media">
          <Image
            src={HOME_IMG.bike}
            alt="Vintage bike at the Kapellbrücke"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
        <div className="split-body">
          <h3>The kind of bikes the locals love.</h3>
          <p>
            Glide along the scenic bike highway and reach the heart of the
            Old Town in just five minutes.
          </p>
          <p>
            Helmets, locks, and a small laminated guide to our favourite café
            stops are tucked in the basket.
          </p>
          <div className="split-ledger">
            <div><div className="k">Bikes</div><div className="v">2</div></div>
            <div><div className="k">To old town</div><div className="v">10 min</div></div>
            <div><div className="k">Elevation</div><div className="v">Flat</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
