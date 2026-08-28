import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { QuoteButton } from "@/components/QuoteButton";
import { featuredWork, partners, review, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "PPF & Ceramic Coating in Santa Clara | XPEL Installer | Song Auto Detail LLC",
  description: site.description,
};

export default function Home() {
  return (
    <>
      <section className="relative min-h-[78vh] overflow-hidden">
        <Image
          src="/images/work/lamborghini.jpeg"
          alt="Lamborghini PPF at Song Auto Detail in Santa Clara"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/30" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:pb-24">
          <h1 className="max-w-5xl text-4xl leading-[1.05] md:text-7xl">
            {site.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-base font-normal normal-case tracking-normal text-white/80 md:text-xl">
            {site.subhead}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <QuoteButton className="px-10 py-3.5 text-base" />
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-white px-10 py-3.5 font-display text-base tracking-[0.22em] text-black hover:bg-zinc-200"
            >
              Services
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-4 md:py-6">
        <div className="mx-auto grid max-w-6xl gap-3 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.href} href={service.href} className="group relative block min-h-72 overflow-hidden">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h2 className="text-2xl tracking-[0.18em]">{service.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="font-display text-7xl leading-none text-white">“</p>
          <blockquote className="text-lg font-normal normal-case tracking-normal text-white md:text-2xl">
            {review.quote}
          </blockquote>
          <p className="mt-8 font-display tracking-[0.22em] text-muted">
            {review.name}
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-3xl md:text-5xl">Recent work</h2>
            <Link
              href="/projects"
              className="hidden font-display text-sm tracking-[0.22em] text-white hover:text-accent md:inline"
            >
              Gallery
            </Link>
          </div>
          <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
            {featuredWork.slice(0, 8).map((item) => (
              <li key={item.src} className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-sm tracking-[0.28em] text-muted">Our partners</h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-10">
            {partners.map((partner) => (
              <Image
                key={partner.src}
                src={partner.src}
                alt={partner.alt}
                width={180}
                height={60}
                className="h-10 w-auto object-contain md:h-12"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
