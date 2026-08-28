import Link from "next/link";

type QuoteButtonProps = {
  className?: string;
};

export function QuoteButton({ className = "" }: QuoteButtonProps) {
  return (
    <Link
      href="/quote"
      className={`inline-flex items-center justify-center bg-accent px-4 py-2 font-display text-sm tracking-[0.16em] text-black hover:bg-accent-hover ${className}`}
    >
      Get a quote
    </Link>
  );
}
