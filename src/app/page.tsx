import Link from "next/link";
import type { Metadata } from "next";
import { QuoteButton } from "@/components/QuoteButton";
import { featuredWork, review, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "PPF & Ceramic Coating in Santa Clara | XPEL Installer | Song Auto Detail LLC",
  description: site.description,
};

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-5 py-24 md:py-36">
        <div className="mx-auto max-w-6xl">
          <p className="font-display text-sm tracking-[0.28em] text-accent">
            Santa Clara, California
          </p>
          <h1 className="mt-6 max-w-5xl text-4xl leading-[1.05] md:text-7xl">
            {site.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base normal-case tracking-normal text-muted md:text-xl">
            {site.subhead}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <QuoteButton className="px-8 py-3 text-base" />
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-foreground px-8 py-3 font-display text-base tracking-[0.16em] text-background hover:bg-zinc-200"
            >
              Services
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="border border-line bg-elevated p-6 hover:border-accent"
            >
              <p className="font-display text-sm tracking-[0.2em] text-accent">
                {service.short}
              </p>
              <h2 className="mt-4 text-2xl">{service.name}</h2>
              <p className="mt-3 text-sm normal-case tracking-normal text-muted">
                {service.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-line px-5 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="font-display text-6xl leading-none text-accent">&ldquo;</p>
          <blockquote className="text-lg normal-case tracking-normal text-foreground md:text-2xl">
            {review.quote}
          </blockquote>
          <p className="mt-8 font-display tracking-[0.16em] text-muted">
            {review.name}
          </p>
        </div>
      </section>

      <section className="border-t border-line px-5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl md:text-5xl">Recent work</h2>
            <Link href="/projects" className="hidden font-display text-sm tracking-[0.16em] text-accent md:inline">
              All projects
            </Link>
          </div>
          <ul className="mt-10 grid gap-px bg-line md:grid-cols-2">
            {featuredWork.map((item) => (
              <li key={item} className="bg-background px-5 py-6 text-sm normal-case tracking-normal md:text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
