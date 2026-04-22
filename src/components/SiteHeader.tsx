"use client";

import Image from "next/image";
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
    <header
      className="sticky top-0 z-40 border-b border-line backdrop-blur"
      style={{ background: "color-mix(in oklab, var(--bg) 92%, transparent)" }}
    >
      <nav className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 px-5 py-4 sm:px-14">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Laya Living — Home"
        >
          <Image
            src="/logo-laya.png"
            alt="Laya"
            width={120}
            height={80}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        <div className="hidden items-center gap-9 text-[13px] tracking-[0.02em] text-ink-soft md:flex">
          {NAV.map((it) => {
            const active = pathname?.startsWith(it.href);
            return (
              <Link
                key={it.href}
                href={it.href}
                className={`transition hover:text-ink ${active ? "text-ink" : ""}`}
                style={active ? { borderBottom: "1px solid var(--ink)", paddingBottom: 2 } : undefined}
              >
                {it.label}
              </Link>
            );
          })}
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded-pill border border-ink px-[18px] py-[10px] text-[13px] text-ink transition hover:bg-ink hover:text-cream-light"
          >
            Reserve <span aria-hidden>→</span>
          </Link>
        </div>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center border border-ink/25 text-ink md:hidden"
        >
          <span className="relative block h-[1px] w-5 bg-current before:absolute before:left-0 before:block before:h-[1px] before:w-5 before:-translate-y-[6px] before:bg-current after:absolute after:left-0 after:block after:h-[1px] after:w-5 after:translate-y-[6px] after:bg-current" />
        </button>

        {open && (
          <div className="order-last flex w-full flex-col gap-3 border-t border-line pt-4 text-[13px] tracking-[0.02em] text-ink-soft md:hidden">
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
            <Link
              href="/book"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-pill border border-ink px-[18px] py-[10px] text-[13px] text-ink"
            >
              Reserve <span aria-hidden>→</span>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
