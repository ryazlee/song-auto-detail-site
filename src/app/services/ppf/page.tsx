import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Authorized XPEL PPF installer in Santa Clara",
  description:
    "XPEL paint protection film in Santa Clara. Gloss and satin 8 mil film, 10-year XPEL warranty, and 30-day workmanship warranty.",
};

export default function PpfPage() {
  return (
    <>
      <PageHero
        title="Quality paint protection film"
        intro="Paint protection film is a transparent, thermoplastic urethane layer applied to painted surfaces to protect them from rock chips, scratches, and everyday wear. We are an authorized XPEL installer in Santa Clara."
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-3">
        {[
          { name: "Full front", duration: "2 days", areas: "Bumper, hood, headlights, fenders, mirrors" },
          { name: "Track pack", duration: "3 days", areas: "Full front, rocker panels, A-pillars" },
          { name: "Full body", duration: "6 days", areas: "All painted surfaces and headlights" },
        ].map((pkg) => (
          <article key={pkg.name} className="border border-line bg-elevated p-6">
            <h2 className="text-2xl">{pkg.name}</h2>
            <p className="mt-3 text-sm text-accent">Duration: {pkg.duration}</p>
            <p className="mt-4 text-sm normal-case tracking-normal text-muted">{pkg.areas}</p>
            <p className="mt-4 text-xs normal-case tracking-normal text-muted">
              Prices may change slightly due to the complexity of the installation.
            </p>
          </article>
        ))}
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <h2 className="text-3xl">FAQ</h2>
        <dl className="mt-8 space-y-8">
          <div>
            <dt className="font-display text-xl">Do you wrap edges?</dt>
            <dd className="mt-2 max-w-3xl text-sm normal-case tracking-normal text-muted">
              Yes. We wrap edges as much as the vehicle allows. Edge wrapping takes extra time, which is why many shops skip it.
            </dd>
          </div>
          <div>
            <dt className="font-display text-xl">What is the warranty on XPEL PPF?</dt>
            <dd className="mt-2 max-w-3xl text-sm normal-case tracking-normal text-muted">
              XPEL offers a warranty lasting up to 10 years. We are an authorized XPEL dealer and provide warranty documentation and registration when the job is completed. We also offer a 30-day warranty on our PPF work.
            </dd>
          </div>
        </dl>
      </section>
    </>
  );
}
