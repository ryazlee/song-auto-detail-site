import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Paint protection film, ceramic coating, paint correction, and auto detailing in Santa Clara, California.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        intro="Premium vehicle paint protection in the San Francisco Bay Area and Silicon Valley — PPF, ceramic coatings, paint correction, and detailing."
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-2">
        {services.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="border border-line bg-elevated p-8 hover:border-accent"
          >
            <h2 className="text-3xl">{service.name}</h2>
            <p className="mt-4 text-base normal-case tracking-normal text-muted">
              {service.summary}
            </p>
            <p className="mt-6 font-display text-sm tracking-[0.16em] text-accent">
              More info
            </p>
          </Link>
        ))}
      </section>
    </>
  );
}
