import Image from "next/image";
import { HOME_IMG } from "./content";

const ACTIVITIES = [
  { k: "Rigi", v: "Cable car · family hikes" },
  { k: "Pilatus", v: "Golden Round Trip" },
  { k: "Lake Lucerne", v: "Boat trips · swimming" },
  { k: "Engelberg", v: "Titlis · snow park" },
];

export function Families() {
  return (
    <section className="h-section">
      <div className="sec-head">
        <div className="sec-num">IV — Made for Families</div>
        <h2 className="sec-title">
          Everything you need, <span className="it">nothing in the way</span>.
        </h2>
        <p className="sec-lede">
          The apartment is set up to make family travel easy: a travel cot,
          high chair, and all the kitchen equipment you need are on hand.
          Outside, Lucerne and the surrounding mountains offer endless
          adventures for every age — from calm lake days to cable-car rides
          and gentle mountain hikes.
        </p>
      </div>
      <div className="split">
        <div className="split-media">
          <Image
            src={HOME_IMG.bike}
            alt="Rental bikes near the apartment"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
        <div className="split-body">
          <h3>Adventures right on the doorstep.</h3>
          <p>
            Bike rentals are available near the apartment. The bus stop is
            directly in front of the building — ten minutes and you&apos;re in
            the old town.
          </p>
          <p>
            Mount Rigi and Mount Pilatus are both reachable within the hour,
            with family-friendly trails and unforgettable views. In winter,
            Engelberg&apos;s snow park is just 35 minutes away by car.
          </p>
          <div className="split-ledger">
            {ACTIVITIES.map(({ k, v }) => (
              <div key={k}>
                <div className="k">{k}</div>
                <div className="v">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
