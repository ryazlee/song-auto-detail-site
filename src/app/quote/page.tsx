import type { Metadata } from "next";
import { BookingLink } from "@/components/BookingLink";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a quote",
  description:
    "Get a quote for PPF, ceramic coating, paint correction, or detailing at Song Auto Detail in Santa Clara.",
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        title="Get a quote"
        intro="Tell us the year, make, model, and service you want. Until the Google Form is connected, call or email is the fastest path."
        image="/images/work/bmw-m3-2025.jpg"
        imageAlt="BMW M3 with XPEL satin PPF"
      />
      <section className="mx-auto max-w-3xl space-y-6 px-5 pb-20">
        <a
          href={site.phoneHref}
          className="block border border-accent bg-accent px-6 py-4 text-center font-display tracking-[0.16em] text-black"
        >
          Call {site.phone}
        </a>
        <a
          href={`mailto:${site.email}?subject=Quote%20request`}
          className="block border border-line px-6 py-4 text-center font-display tracking-[0.16em] hover:border-accent"
        >
          Email {site.email}
        </a>
        <BookingLink />
        <p className="text-sm normal-case tracking-normal text-muted">
          Helpful details: name, phone, email, vehicle, color, desired service, preferred date, and whether we can text you.
        </p>
      </section>
    </>
  );
}
