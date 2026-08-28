"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/site";
import { QuoteButton } from "./QuoteButton";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="shrink-0 leading-none" onClick={() => setOpen(false)}>
          <span className="font-display text-xl tracking-[0.18em] text-foreground">
            Song
          </span>
          <span className="ml-2 font-display text-xl tracking-[0.18em] text-muted">
            Auto Detail
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-sm tracking-[0.16em] text-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <QuoteButton />
        </nav>

        <button
          type="button"
          className="font-display text-sm tracking-[0.16em] text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-line px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-base tracking-[0.16em]"
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
