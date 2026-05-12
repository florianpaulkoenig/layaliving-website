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
          Travel cot and full kitchen available. Outside:
          lakeshore walks, the Pilu Land playground at Krienseregg, the
          Verkehrshaus (Swiss Transport Museum) in Lucerne, family-friendly
          hikes on Rigi — and sledding in winter.
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
          <h3>Easy to get around.</h3>
          <p>
            A Nextbike station is in front of the building. The bus stop is
            across the street — about 10 minutes to Lucerne old town on bus 14.
          </p>
          <p>
            Rigi and Pilatus are reachable within the hour by bus, boat, and
            cable car or cogwheel. Engelberg (Mt. Titlis, snow park in winter)
            is about 35 minutes by car or 50 minutes by train.
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
