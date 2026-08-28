import { QuoteButton } from "./QuoteButton";

type PageHeroProps = {
  title: string;
  intro: string;
};

export function PageHero({ title, intro }: PageHeroProps) {
  return (
    <section className="border-b border-line px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h1 className="max-w-4xl text-4xl leading-tight md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base normal-case tracking-normal text-muted md:text-lg">
          {intro}
        </p>
        <div className="mt-8">
          <QuoteButton />
        </div>
      </div>
    </section>
  );
}
