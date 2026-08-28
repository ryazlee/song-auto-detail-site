import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { featuredWork } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Recent PPF, ceramic coating, and detailing projects from Song Auto Detail in Santa Clara.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        intro="Work ranging from daily drivers to exotic vehicles. Full project pages with writeups will come from the CMS in a later phase."
        image="/images/work/tesla-cybertruck.jpeg"
        imageAlt="Tesla Cybertruck XPEL satin black color-change PPF"
      />
      <section className="mx-auto max-w-6xl px-5 py-10 pb-20">
        <ul className="grid grid-cols-2 gap-2 md:grid-cols-3">
          {featuredWork.map((item) => (
            <li key={item.src} className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
