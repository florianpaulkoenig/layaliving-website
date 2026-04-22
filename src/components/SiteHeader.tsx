"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/location", label: "Location" },
  { href: "/recommendations", label: "Our Recommendations" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-cream/90 backdrop-blur">
      <nav className="wrap flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-4">
        <Link
          href="/"
          className="font-script text-3xl leading-none text-ink"
          aria-label="Laya Living — Home"
        >
          Laya
        </Link>

        <div className="hidden items-center gap-8 text-[12px] uppercase tracking-[0.18em] text-ink-muted md:flex">
          {NAV.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className={`transition hover:text-ink ${
                pathname?.startsWith(it.href) ? "text-ink" : ""
              }`}
            >
              {it.label}
            </Link>
          ))}
          <Link href="/book" className="btn-primary !px-5 !py-2 !text-[11px]">
            Book Now
          </Link>
        </div>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded border border-ink/15 text-ink md:hidden"
        >
          <span className="relative block h-[1px] w-5 bg-current before:absolute before:left-0 before:block before:h-[1px] before:w-5 before:-translate-y-[6px] before:bg-current after:absolute after:left-0 after:block after:h-[1px] after:w-5 after:translate-y-[6px] after:bg-current" />
        </button>

        {open && (
          <div className="order-last flex w-full flex-col gap-3 border-t border-line pt-4 text-[12px] uppercase tracking-[0.18em] text-ink-muted md:hidden">
            {NAV.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className={`py-1 hover:text-ink ${
                  pathname?.startsWith(it.href) ? "text-ink" : ""
                }`}
              >
                {it.label}
              </Link>
            ))}
            <Link href="/book" className="btn-primary mt-2 !w-full">
              Book Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
