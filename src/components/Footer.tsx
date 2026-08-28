import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-elevated">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-lg tracking-[0.16em]">{site.shortName}</p>
          <p className="mt-2 max-w-xs text-sm text-muted">{site.subhead}</p>
          <p className="mt-4">
            <Link href="/about" className="text-sm hover:text-accent">
              About
            </Link>
          </p>
        </div>
        <div className="text-sm">
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
        <div className="text-sm text-muted">
          {site.hours.map((row) => (
            <p key={row.days}>
              {row.days}: {row.time}
            </p>
          ))}
          <div className="mt-4 flex gap-4">
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
