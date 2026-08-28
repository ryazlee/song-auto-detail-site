import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Auto detailing",
  description:
    "Interior and exterior auto detailing in Santa Clara, from express wash to signature detail packages.",
};

export default function DetailingPage() {
  return (
    <>
      <PageHero
        title="Auto detailing"
        intro="Professional detailing to restore, protect, and maintain the vehicle inside and out. Size guide: small coupes/sedans, medium SUVs, large third-row vehicles and trucks. Mini vans: contact us. Heavily soiled vehicles may have an additional 15–25% charge, disclosed before work begins. Please remove personal items before drop-off."
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-2">
        {[
          { name: "Signature detail", time: "6+ hours", price: "Small $550 · Medium $600 · Large $650" },
          { name: "Complete detail", time: "4+ hours", price: "Small $450 · Medium $500 · Large $550" },
          { name: "Exterior detail", time: "3+ hours", price: "Small $250 · Medium $300 · Large $350" },
          { name: "Express wash", time: "1+ hours", price: "Small $120 · Medium $130 · Large $140+" },
          { name: "Complete interior", time: "4+ hours", price: "Small $350 · Medium $400 · Large $450" },
          { name: "Interior detail", time: "3+ hours", price: "Small $250 · Medium $300 · Large $350" },
        ].map((pkg) => (
          <article key={pkg.name} className="border border-line bg-elevated p-6">
            <h2 className="text-2xl">{pkg.name}</h2>
            <p className="mt-3 text-sm text-accent">{pkg.time}</p>
            <p className="mt-4 text-sm normal-case tracking-normal text-muted">{pkg.price}</p>
          </article>
        ))}
      </section>
    </>
  );
}
