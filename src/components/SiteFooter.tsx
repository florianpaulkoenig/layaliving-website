import Image from "next/image";
import Link from "next/link";

/**
 * Editorial 4-col footer. Columns: brand/tagline · Visit · Say hello · Legal.
 * No social/phone fields since there's no canonical source for them.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-line" style={{ background: "var(--bg)" }}>
      <div className="grid gap-10 px-5 pb-8 pt-16 text-[13px] sm:px-14 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <Image
            src="/logo-laya.png"
            alt="Laya"
            width={160}
            height={106}
            className="h-14 w-auto"
          />
          <p className="mt-4 max-w-xs leading-[1.7] text-ink-soft">
            A little paradise near Lucerne — yours for a weekend, a week, or as
            long as you want to stay.
          </p>
        </div>

        <div>
          <h4 className="kicker">Visit</h4>
          <address className="mt-3 not-italic leading-[1.7] text-ink-soft">
            Nidfeldstrasse 2G<br />
            6010 Kriens – Lucerne<br />
            Switzerland
          </address>
        </div>

        <div>
          <h4 className="kicker">Say hello</h4>
          <a
            href="mailto:info@layaliving.ch"
            className="mt-3 block leading-[1.7] text-ink-soft hover:text-ink"
          >
            info@layaliving.ch
          </a>
        </div>

        <div>
          <h4 className="kicker">Legal</h4>
          <div className="mt-3 flex flex-col gap-1 leading-[1.7] text-ink-soft">
            <Link href="/impressum" className="hover:text-ink">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-ink">Datenschutz</Link>
          </div>
        </div>

        <div className="col-span-full mt-10 flex flex-col justify-between gap-2 border-t border-line pt-5 text-[12px] text-ink-muted md:flex-row">
          <span>© {new Date().getFullYear()} Laya Living</span>
          <span>Kriens — Lucerne, Switzerland</span>
        </div>
      </div>
    </footer>
  );
}
