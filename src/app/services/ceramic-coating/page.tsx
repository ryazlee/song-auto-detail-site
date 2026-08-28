import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Ceramic coating in Santa Clara",
  description:
    "XPEL and Artdeshine ceramic coating in Santa Clara. Multi-year warranty packages with paint, wheels, windows, and exterior plastics included.",
};

export default function CeramicPage() {
  return (
    <>
      <PageHero
        title="Ceramic coating"
        intro="Ceramic coating is composed of silicon dioxide (SiO2). Applied by hand, it bonds with the paint and forms a protective layer that can last several years with proper maintenance. We install XPEL and Artdeshine coatings in Santa Clara."
      />
      <section className="mx-auto max-w-6xl px-5 pb-8">
        <h2 className="text-3xl">Our process</h2>
        <ol className="mt-6 max-w-3xl list-decimal space-y-2 pl-5 text-sm normal-case tracking-normal text-muted">
          <li>Full prep and decontamination wash</li>
          <li>Cracks and crevices blown dry</li>
          <li>One-step paint correction removing 60–75% of paint defects</li>
          <li>IPA wipe down</li>
          <li>Ceramic applied on exterior paint, wheel faces, exterior windows, and exterior plastics</li>
        </ol>
      </section>
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-12 md:grid-cols-2">
        {[
          { brand: "XPEL", name: "Fusion Plus Classic", warranty: "4 year", duration: "2 full days" },
          { brand: "XPEL", name: "Fusion Plus Premium V2", warranty: "8 year", duration: "2 full days" },
          { brand: "Artdeshine", name: "AYICON Pro", warranty: "5 year", duration: "2 full days" },
          { brand: "Artdeshine", name: "Nano Graphene NGC+", warranty: "7 year", duration: "2 full days" },
        ].map((pkg) => (
          <article key={pkg.name} className="border border-line bg-elevated p-6">
            <p className="font-display text-sm tracking-[0.2em] text-accent">{pkg.brand}</p>
            <h2 className="mt-3 text-2xl">{pkg.name}</h2>
            <p className="mt-3 text-sm normal-case tracking-normal text-muted">
              {pkg.warranty} warranty · {pkg.duration}
            </p>
            <p className="mt-4 text-sm normal-case tracking-normal text-muted">
              Covered: all painted surfaces, headlights, taillights, wheel faces, exterior windows, exterior plastics.
            </p>
          </article>
        ))}
      </section>
    </>
  );
}
