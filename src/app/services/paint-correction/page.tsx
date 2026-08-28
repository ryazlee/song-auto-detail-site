import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Paint correction",
  description:
    "Paint correction in Santa Clara. Enhancement polish, one-stage, and two-stage correction to restore gloss and remove swirls.",
};

export default function PaintCorrectionPage() {
  return (
    <>
      <PageHero
        title="Paint correction"
        intro="Paint correction uses a polishing machine to level the clear coat. It removes swirl marks, etchings, marring, and light scratches, restoring original clarity and gloss."
        image="/images/services/paint-correction.jpg"
        imageAlt="Paint correction at Song Auto Detail"
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-3">
        {[
          { name: "Enhancement polish", price: "Starting at $500+", note: "Removes oxidation and fine swirls. SiO2 sealant applied." },
          { name: "One-stage", price: "Starting at $800+", note: "2 days. Removes 60–75% of swirls and fine scratches." },
          { name: "Two-stage", price: "Starting at $1,200+", note: "3 days. Removes 80–95% of swirls and scratches." },
        ].map((pkg) => (
          <article key={pkg.name} className="border border-line bg-elevated p-6">
            <h2 className="text-2xl">{pkg.name}</h2>
            <p className="mt-3 text-sm text-accent">{pkg.price}</p>
            <p className="mt-4 text-sm normal-case tracking-normal text-muted">{pkg.note}</p>
            <p className="mt-4 text-xs normal-case tracking-normal text-muted">
              Ceramic coating recommended after correction.
            </p>
          </article>
        ))}
      </section>
    </>
  );
}
