import { profile } from "@/data/content";

/** Small pill with a green dot (§1). */
export function AvailabilityPill() {
  return (
    <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-line px-3 py-1.5 text-[0.8125rem] leading-snug text-muted sm:text-sm">
      <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-dot" />
      {profile.availability}
    </p>
  );
}
