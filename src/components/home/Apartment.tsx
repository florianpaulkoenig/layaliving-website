import Image from "next/image";
import { HOME_IMG } from "./content";

type Fig = {
  cls: "apt-1" | "apt-2" | "apt-3" | "apt-4";
  src: string;
  alt: string;
  title: string;
  n: string;
  sizes: string;
};

const FIGS: Fig[] = [
  { cls: "apt-1", src: HOME_IMG.living,  alt: "Living room", title: "Living room", n: "01 / 04", sizes: "(max-width: 768px) 100vw, 55vw" },
  { cls: "apt-2", src: HOME_IMG.sofa,    alt: "Details",     title: "Details",     n: "02 / 04", sizes: "(max-width: 768px) 100vw, 40vw" },
  { cls: "apt-3", src: HOME_IMG.bed,     alt: "Bedroom",     title: "Bedroom",     n: "03 / 04", sizes: "(max-width: 768px) 100vw, 30vw" },
  { cls: "apt-4", src: HOME_IMG.titlis,  alt: "The view",    title: "The view",    n: "04 / 04", sizes: "(max-width: 768px) 100vw, 65vw" },
];

export function Apartment() {
  return (
    <section className="h-section" id="apartment">
      <div className="sec-head">
        <div className="sec-num">I — The Apartment</div>
        <h2 className="sec-title">
          Above the rooftops, <span className="it">face to face</span> with the Alps.
        </h2>
        <p className="sec-lede">
          Designed with a modern, minimalist hand — natural materials, a
          carefully curated palette, and a view that does most of the talking.
        </p>
      </div>
      <div className="apt-grid">
        {FIGS.map((f) => (
          <figure key={f.cls} className={`apt-fig ${f.cls}`}>
            <div className="apt-img">
              <Image
                src={f.src}
                alt={f.alt}
                fill
                sizes={f.sizes}
                className="object-cover"
              />
            </div>
            <figcaption>
              <span className="t">{f.title}</span>
              <span>{f.n}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
