import Image from "next/image";
import { HOME_IMG } from "./content";

export function Bikes() {
  return (
    <section className="h-section">
      <div className="sec-head">
        <div className="sec-num">IV — Cruise like a local</div>
        <h2 className="sec-title">
          Two vintage bikes, and a city waiting to be rolled through.
        </h2>
        <p className="sec-lede">
          In Lucerne, cycling is a way of life. Glide the scenic riverside
          path and reach the old town in minutes.
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
            Swiss-made, lovingly maintained, and parked right by the front
            door. Helmets, locks, and a small map of the best cafés are tucked
            in the basket.
          </p>
          <p>
            Within ten minutes you are on the old wooden Kapellbrücke; in
            twenty, on a forest trail along the lake.
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
