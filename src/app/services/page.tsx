import type { Metadata } from "next";
import Image from "next/image";
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
        image="/images/work/corvette-z06.jpeg"
        imageAlt="2026 Corvette Z06 XPEL Track Pack PPF"
      />
      <section className="mx-auto grid max-w-6xl gap-3 px-5 py-10 md:grid-cols-2">
        {services.map((service) => (
          <Link key={service.href} href={service.href} className="group relative min-h-80 overflow-hidden">
            <Image
              src={service.image}
              alt={service.alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h2 className="text-3xl">{service.name}</h2>
              <p className="mt-3 max-w-md text-sm font-normal normal-case tracking-normal text-white/80">
                {service.summary}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
