import { site } from "@/lib/site";

/** Renders nothing until `site.calendarUrl` is set. */
export function BookingLink({ className = "" }: { className?: string }) {
  if (!site.calendarUrl) return null;

  return (
    <a
      href={site.calendarUrl}
      className={`block border border-line px-6 py-4 text-center font-display tracking-[0.16em] hover:border-accent ${className}`}
    >
      Schedule appointment
    </a>
  );
}
