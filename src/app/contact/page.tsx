import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact Song Auto Detail LLC at ${site.address} or ${site.phone}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        intro="For a faster response, call us. A Google Form will replace the current Wix quote form in a later phase."
      />
      <section className="mx-auto max-w-3xl space-y-4 px-5 pb-20 text-base normal-case tracking-normal">
        <p>
          <a href={site.phoneHref} className="text-accent">
            {site.phone}
          </a>
        </p>
        <p>
          <a href={`mailto:${site.email}`} className="text-accent">
            {site.email}
          </a>
        </p>
        <p>
          <a href={site.mapsUrl}>{site.address}</a>
        </p>
        {site.hours.map((row) => (
          <p key={row.days} className="text-muted">
            {row.days}: {row.time}
          </p>
        ))}
      </section>
    </>
  );
}
