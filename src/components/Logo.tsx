import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "h-10 w-auto", priority = false }: LogoProps) {
  return (
    <Link href="/" className="inline-flex shrink-0">
      <Image
        src="/images/logo.png"
        alt="Song Auto Detail"
        width={399}
        height={161}
        className={className}
        priority={priority}
      />
    </Link>
  );
}
