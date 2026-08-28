import Image from "next/image";
import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <Logo className="h-10 w-auto" />
          <p className="mt-4 max-w-xs text-sm normal-case tracking-normal text-muted">
            {site.subhead}
          </p>
          <p className="mt-4">
            <Link href="/about" className="font-display text-xs tracking-[0.2em] hover:text-accent">
              About
            </Link>
          </p>
        </div>
        <div className="text-sm normal-case tracking-normal">
          <p>
            <a href={site.mapsUrl} className="hover:text-accent">
              {site.address}
            </a>
          </p>
          <p className="mt-2">
            <a href={site.phoneHref} className="hover:text-accent">
              {site.phone}
            </a>
          </p>
          <p className="mt-2">
            <a href={`mailto:${site.email}`} className="hover:text-accent">
              {site.email}
            </a>
          </p>
        </div>
        <div className="text-sm normal-case tracking-normal text-muted">
          {site.hours.map((row) => (
            <p key={row.days}>
              {row.days}: {row.time}
            </p>
          ))}
          <div className="mt-4 flex gap-4 font-display text-xs tracking-[0.18em] text-white">
            <a href={site.social.instagram}>Instagram</a>
            <a href={site.social.facebook}>Facebook</a>
            <a href={site.social.tiktok}>TikTok</a>
            <a href={site.social.yelp}>Yelp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
