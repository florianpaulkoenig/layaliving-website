import type { ReactNode } from "react";

const CELLS: [string, string | ReactNode][] = [
  ["Location", "Kriens near Lucerne"],
  ["Coordinates", "47°03′N · 8°17′E"],
  ["Accommodation", "Up to four Guests"],
  ["Views", "Rigi, Bürgenstock and Alps in the background"],
  ["From", <span key="price">CHF 295 / Night <span style={{ fontSize: "0.72em", opacity: 0.65, fontWeight: 400 }}>· approx. USD 330 / EUR 305</span></span>],
];

export function Spec() {
  return (
    <div className="spec">
      {CELLS.map(([k, v]) => (
        <div key={k} className="spec-cell">
          <div className="spec-k">{k}</div>
          <div className="spec-v">{v}</div>
        </div>
      ))}
    </div>
  );
}
