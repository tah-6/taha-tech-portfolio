import type { ReactNode } from "react";

/** Small monospace tag for stack items, skills and status labels (§9). */
export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-bg px-2 py-1 font-mono text-xs leading-none text-muted">
      {children}
    </span>
  );
}

export function ChipList({
  items,
  label,
}: {
  items: readonly string[];
  label: string;
}) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item} className="flex">
          <Chip>{item}</Chip>
        </li>
      ))}
    </ul>
  );
}
