import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About",
  description: "About Song Auto Detail LLC and owner Yong in Santa Clara, California.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Song Auto Detail"
        intro="A Santa Clara shop focused on paint protection film, ceramic coating, paint correction, and detailing."
      />
      <section className="mx-auto max-w-3xl space-y-5 px-5 pb-20 text-base normal-case tracking-normal text-muted">
        <p>
          At Song Auto Detail, we are a team of passionate and experienced auto detailing professionals who take pride in delivering exceptional services to our clients.
        </p>
        <p>
          The owner, Yong, started his detailing career as a hobby and quickly developed a passion for it. Over time, he honed his skills and expertise, and eventually opened his own detailing company. Yong’s commitment to attention to detail and strong work ethic are at the core of our company’s values.
        </p>
        <p>
          We believe in providing the highest quality detailing services possible, and we go above and beyond to ensure that every vehicle we work on is returned in pristine condition.
        </p>
      </section>
    </>
  );
}
