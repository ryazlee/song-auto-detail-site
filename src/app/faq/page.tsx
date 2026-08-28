import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about PPF, ceramic coating, paint correction, and detailing at Song Auto Detail.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="Frequently asked questions"
        intro="Common questions about our Santa Clara shop and paint protection services. More FAQs from the current site will be migrated in a later pass."
      />
      <section className="mx-auto max-w-3xl space-y-10 px-5 pb-20">
        <div>
          <h2 className="text-2xl">What is ceramic coating?</h2>
          <p className="mt-3 text-sm normal-case tracking-normal text-muted">
            A liquid polymer made from silicon dioxide that bonds to the paint and forms a sacrificial protective layer.
          </p>
        </div>
        <div>
          <h2 className="text-2xl">What is paint correction?</h2>
          <p className="mt-3 text-sm normal-case tracking-normal text-muted">
            A polishing process that levels the clear coat to remove swirls, etching, and light scratches and restore gloss.
          </p>
        </div>
        <div>
          <h2 className="text-2xl">Why get professional detailing?</h2>
          <p className="mt-3 text-sm normal-case tracking-normal text-muted">
            Professional detailing goes beyond a wash: decontamination, interior extraction, and protection that last longer than a driveway clean.
          </p>
        </div>
      </section>
    </>
  );
}
