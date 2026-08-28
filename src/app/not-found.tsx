import Link from "next/link";
import { QuoteButton } from "@/components/QuoteButton";

export default function NotFound() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-5xl">Page not found</h1>
        <p className="mt-4 text-base normal-case tracking-normal text-muted">
          That URL is not on the new site yet.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/" className="font-display tracking-[0.16em] text-accent">
            Home
          </Link>
          <QuoteButton />
        </div>
      </div>
    </section>
  );
}
