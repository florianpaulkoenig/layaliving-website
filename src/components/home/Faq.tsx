"use client";

import { useState } from "react";
import { FAQ } from "./content";

export function Faq() {
  const [open, setOpen] = useState<string | null>("01");
  return (
    <section className="h-section">
      <div className="sec-head">
        <div className="sec-num">VIII — Before you book</div>
        <h2 className="sec-title">
          A few practical <span className="it">answers</span>.
        </h2>
        <p className="sec-lede">
          The most common questions. If yours isn&apos;t here, a short email
          will always be answered within the day.
        </p>
      </div>
      <div className="faq">
        {FAQ.map((row) => {
          const isOpen = open === row.n;
          const toggle = () => setOpen(isOpen ? null : row.n);
          return (
            <div
              key={row.n}
              className="faq-row"
              data-open={isOpen}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              onClick={toggle}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggle();
                }
              }}
            >
              <div className="n">{row.n}</div>
              <div>
                <h3 className="q">{row.q}</h3>
                <p className="a">{row.a}</p>
              </div>
              <div className="toggle" aria-hidden />
            </div>
          );
        })}
      </div>
    </section>
  );
}
