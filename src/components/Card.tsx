import type { ReactNode } from "react";

/** Shared card surface: hairline border, 12px radius, no shadow (§9). */
export const cardClasses = "rounded-xl border border-line bg-surface";

/** Add to cards that are links or buttons: subtle background change on hover. */
export const cardInteractiveClasses =
  "transition-colors duration-150 hover:bg-surface-hover";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`${cardClasses} ${className}`}>{children}</div>;
}
