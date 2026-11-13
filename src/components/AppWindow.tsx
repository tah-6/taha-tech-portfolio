import type { ReactNode } from "react";

/**
 * Signature "app window" frame (§9): title bar with three small gray dots
 * and a centered monospace title, content below.
 */
export function AppWindow({
  title,
  children,
  tone = "surface",
  className = "",
  bodyClassName = "",
}: {
  title: string;
  children: ReactNode;
  /** "surface" on the page background, "bg" when placed inside a card. */
  tone?: "surface" | "bg";
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-line ${tone === "bg" ? "bg-bg" : "bg-surface"} ${className}`}
    >
      <div className="relative flex h-9 items-center border-b border-line px-3.5">
        <div aria-hidden="true" className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
        </div>
        <p className="pointer-events-none absolute inset-x-16 truncate text-center font-mono text-xs text-muted">
          {title}
        </p>
      </div>
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}
