import Image from "next/image";
import { QuoteButton } from "./QuoteButton";

type PageHeroProps = {
  title: string;
  intro: string;
  image?: string;
  imageAlt?: string;
};

export function PageHero({ title, intro, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      {image ? (
        <Image
          src={image}
          alt={imageAlt || ""}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      ) : null}
      <div className={`relative px-5 py-16 md:py-24 ${image ? "bg-black/70" : ""}`}>
        <div className="mx-auto max-w-6xl">
          <h1 className="max-w-4xl text-4xl leading-tight md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base font-normal normal-case tracking-normal text-white/80 md:text-lg">
            {intro}
          </p>
          <div className="mt-8">
            <QuoteButton />
          </div>
        </div>
      </div>
    </section>
  );
}
