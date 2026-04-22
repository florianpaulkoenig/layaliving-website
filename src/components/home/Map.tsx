"use client";

import { useState } from "react";
import { PICKS, type Pick } from "./content";

function MapSVG({
  picks,
  hovered,
  onHover,
}: {
  picks: Pick[];
  hovered: string | null;
  onHover: (n: string | null) => void;
}) {
  return (
    <svg viewBox="0 0 600 480" style={{ position: "absolute", inset: 0 }}>
      <defs>
        <pattern
          id="home-map-hatch"
          width="6"
          height="6"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line x1="0" y1="0" x2="0" y2="6" stroke="#d9d2c4" strokeWidth="0.6" />
        </pattern>
      </defs>

      <path
        d="M60,260 C120,210 220,200 320,230 C420,255 520,220 560,260 C540,320 460,360 380,345 C300,330 220,360 160,340 C110,325 70,300 60,260 Z"
        fill="#c9d7d6"
        stroke="#8faba8"
        strokeWidth="1"
      />
      <path
        d="M60,260 C120,210 220,200 320,230 C420,255 520,220 560,260 C540,320 460,360 380,345 C300,330 220,360 160,340 C110,325 70,300 60,260 Z"
        fill="url(#home-map-hatch)"
        opacity="0.35"
      />
      <path
        d="M280,240 C300,180 340,140 380,80"
        fill="none"
        stroke="#8faba8"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M0,420 L80,320 L140,380 L210,300 L280,400 L360,330 L430,410 L520,340 L600,420 L600,480 L0,480 Z"
        fill="#b9b099"
        opacity="0.6"
      />
      <path
        d="M0,440 L100,380 L180,430 L260,370 L340,430 L420,380 L500,430 L600,400 L600,480 L0,480 Z"
        fill="#9a9078"
        opacity="0.8"
      />

      <g>
        <circle cx="252" cy="312" r="8" fill="#1d1a15" />
        <circle
          cx="252"
          cy="312"
          r="16"
          fill="none"
          stroke="#1d1a15"
          strokeWidth="1"
          strokeDasharray="2 3"
        />
        <text
          x="268"
          y="316"
          fontFamily="var(--h-serif)"
          fontSize="14"
          fontStyle="italic"
          fill="#1d1a15"
        >
          Triangolo
        </text>
      </g>

      {picks.map((p) => {
        const cx = (p.x / 100) * 600;
        const cy = (p.y / 100) * 480;
        const active = hovered === p.n;
        return (
          <g
            key={p.n}
            onMouseEnter={() => onHover(p.n)}
            onMouseLeave={() => onHover(null)}
            style={{ cursor: "pointer" }}
          >
            <circle
              cx={cx}
              cy={cy}
              r={active ? 14 : 10}
              fill={active ? "var(--h-accent)" : "var(--h-bg)"}
              stroke="#1d1a15"
              strokeWidth="1.2"
            />
            <text
              x={cx}
              y={cy + 4}
              fontFamily="var(--h-serif)"
              fontStyle="italic"
              fontSize="11"
              textAnchor="middle"
              fill={active ? "var(--h-bg)" : "#1d1a15"}
            >
              {p.n}
            </text>
          </g>
        );
      })}

      <g transform="translate(540,60)">
        <circle r="22" fill="none" stroke="#1d1a15" strokeWidth="0.8" />
        <path d="M0,-18 L4,0 L0,18 L-4,0 Z" fill="#1d1a15" />
        <text
          y="-26"
          textAnchor="middle"
          fontFamily="var(--h-serif)"
          fontStyle="italic"
          fontSize="10"
          fill="#1d1a15"
        >
          N
        </text>
      </g>
    </svg>
  );
}

export function MapSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="h-section">
      <div className="sec-head">
        <div className="sec-num">V — Our Lucerne</div>
        <h2 className="sec-title">
          The places locals don&apos;t share online.
        </h2>
        <p className="sec-lede">
          A curated field guide to the neighbourhood, the lake, and the
          quieter corners of the old town. Updated after every stay.
        </p>
      </div>
      <div className="map-wrap">
        <div className="map-canvas">
          <MapSVG picks={PICKS} hovered={hovered} onHover={setHovered} />
        </div>
        <div className="map-list">
          {PICKS.map((p) => (
            <div
              key={p.n}
              className="map-item"
              data-active={hovered === p.n ? "true" : "false"}
              onMouseEnter={() => setHovered(p.n)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="num">{p.n}</div>
              <div>
                <div className="name">{p.name}</div>
                <div className="kind">{p.kind}</div>
              </div>
              <div className="dist">{p.dist}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
