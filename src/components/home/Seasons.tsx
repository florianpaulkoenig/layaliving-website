"use client";

import Image from "next/image";
import { useState } from "react";
import { SEASONS } from "./content";

export function Seasons() {
  const [i, setI] = useState(1);
  const s = SEASONS[i];

  return (
    <section className="h-section">
      <div className="sec-head">
        <div className="sec-num">II — Through the year</div>
        <h2 className="sec-title">
          One apartment, <span className="it">four seasons</span>.
        </h2>
        <p className="sec-lede">
          The view shifts. The light shifts. The apartment rearranges itself
          around whatever season you arrive in.
        </p>
      </div>

      <div className="seasons-tabs" role="tablist">
        {SEASONS.map((ss, idx) => (
          <button
            key={ss.key}
            type="button"
            role="tab"
            aria-selected={idx === i}
            onClick={() => setI(idx)}
            className="seasons-tab"
          >
            <span>
              <span className="num">{ss.n}</span>
              <span
                className="eyebrow"
                style={{ fontSize: 10, display: "inline" }}
              >
                {ss.months}
              </span>
            </span>
            <span className="name">{ss.name}</span>
          </button>
        ))}
      </div>

      <div className="seasons-panel">
        <div className="seasons-media">
          <Image
            key={s.key}
            src={s.img}
            alt={s.name}
            fill
            sizes="(max-width: 768px) 100vw, 55vw"
            className="object-cover"
            style={{ transition: "opacity 0.4s" }}
          />
        </div>
        <div className="seasons-body">
          <h3>
            {s.titleLead},<span className="it">{s.titleTail}</span>
          </h3>
          <p>{s.body}</p>
          <div className="seasons-data">
            {s.data.map(([k, v]) => (
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
