import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { featuredWork } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Recent PPF, ceramic coating, and detailing projects from Song Auto Detail in Santa Clara.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Recent projects"
        intro="Work ranging from daily drivers to exotic vehicles. Full project pages with galleries will come from the CMS in a later phase."
      />
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <ul className="grid gap-px bg-line md:grid-cols-2">
          {featuredWork.map((item) => (
            <li key={item} className="bg-background px-5 py-8 text-base normal-case tracking-normal">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
