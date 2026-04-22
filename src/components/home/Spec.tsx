const CELLS: [string, string][] = [
  ["Location", "Kriens, LU"],
  ["Coordinates", "47°03′N · 8°17′E"],
  ["Sleeps", "Up to four"],
  ["Views", "Rigi · Pilatus · Stanserhorn"],
  ["From", "CHF 220 / night"],
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
