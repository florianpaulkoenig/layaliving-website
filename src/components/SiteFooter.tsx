import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line bg-cream-light">
      <div className="wrap grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Image
            src="/logo-laya.png"
            alt="Laya"
            width={160}
            height={106}
            className="h-16 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm text-ink-muted">
            A little paradise near Lucerne — yours for a weekend, a week,
            or as long as you want to stay.
          </p>
        </div>

        <div>
          <p className="kicker">Visit</p>
          <address className="mt-3 text-sm not-italic text-ink">
            Nidfeldstrasse 2G<br />
            6010 Kriens – Lucerne<br />
            Switzerland
          </address>
        </div>

        <div>
          <p className="kicker">Say hello</p>
          <p className="mt-3 text-sm text-ink">
            <a
              href="mailto:info@layaliving.ch"
              className="underline-offset-4 hover:underline"
            >
              info@layaliving.ch
            </a>
          </p>
          <div className="mt-4 flex gap-5 text-xs uppercase tracking-[0.16em] text-ink-muted">
            <Link href="/impressum" className="hover:text-ink">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-ink">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
      <div className="wrap border-t border-line/60 py-5 text-[11px] uppercase tracking-[0.18em] text-ink-muted">
        © {new Date().getFullYear()} Laya Living
      </div>
    </footer>
  );
}
