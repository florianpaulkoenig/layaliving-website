import Image from "next/image";
import { HOME_IMG } from "./content";

type Fig = {
  cls: "apt-1" | "apt-2" | "apt-3" | "apt-4" | "apt-5" | "apt-6";
  src: string;
  alt: string;
  title: string;
  n: string;
  sizes: string;
};

const FIGS: Fig[] = [
  { cls: "apt-1", src: HOME_IMG.living,     alt: "Main living area",                  title: "Main living area",                  n: "01 / 06", sizes: "(max-width: 768px) 100vw, 55vw" },
  { cls: "apt-2", src: HOME_IMG.kitchen,    alt: "Fully equipped kitchen",             title: "Fully equipped kitchen",             n: "02 / 06", sizes: "(max-width: 768px) 100vw, 42vw" },
  { cls: "apt-3", src: HOME_IMG.bed,        alt: "Thoughtful design for cozy nights",  title: "Thoughtful design for cozy nights",  n: "03 / 06", sizes: "(max-width: 768px) 100vw, 65vw" },
  { cls: "apt-4", src: HOME_IMG.bathroom,   alt: "Bathroom",                           title: "Bathroom",                           n: "04 / 06", sizes: "(max-width: 768px) 100vw, 30vw" },
  { cls: "apt-5", src: HOME_IMG.naturalLight, alt: "Large windows, plenty of light",   title: "Large windows, plenty of light",     n: "05 / 06", sizes: "(max-width: 768px) 100vw, 50vw" },
  { cls: "apt-6", src: HOME_IMG.sofabed,    alt: "The sofa converts into a bed",        title: "The sofa converts into a bed",       n: "06 / 06", sizes: "(max-width: 768px) 100vw, 45vw" },
];

export function Apartment() {
  return (
    <section className="h-section" id="apartment">
      <div className="sec-head">
        <div className="sec-num">I — The Apartment</div>
        <h2 className="sec-title">
          Open views <span className="it">over the rooftops</span>.
        </h2>
        <p className="sec-lede">
          Step onto the balcony and you&apos;ll see the Rigi on a clear day.
          Designed with a modern, minimalist aesthetic, the apartment blends
          natural materials and a carefully curated colour palette to create
          a sense of calm and balance.
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
