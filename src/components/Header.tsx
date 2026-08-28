"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";
import { QuoteButton } from "./QuoteButton";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Logo className="h-9 w-auto md:h-11" priority />

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-[13px] tracking-[0.22em] text-white hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <QuoteButton />
        </nav>

        <button
          type="button"
          className="font-display text-sm tracking-[0.22em] text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-white/10 px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-5">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-base tracking-[0.22em]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <QuoteButton className="w-fit" />
            <a href={site.phoneHref} className="text-sm text-muted">
              {site.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
