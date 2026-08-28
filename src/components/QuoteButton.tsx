import Link from "next/link";

type QuoteButtonProps = {
  className?: string;
};

export function QuoteButton({ className = "" }: QuoteButtonProps) {
  return (
    <Link
      href="/quote"
      className={`inline-flex items-center justify-center bg-accent px-5 py-2.5 font-display text-[13px] tracking-[0.22em] text-black hover:bg-accent-hover ${className}`}
    >
      Get a quote
    </Link>
  );
}
