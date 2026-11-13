import Link from "next/link";
import type { Project } from "@/data/content";
import { cardClasses, cardInteractiveClasses } from "./Card";
import { Chip } from "./Chip";

/** Compact card used in the /projects grid. The whole card is one link. */
export function ProjectCard({ project }: { project: Project }) {
  const meta = [project.date, project.context].filter(Boolean).join(" · ");

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`${cardClasses} ${cardInteractiveClasses} group flex h-full flex-col p-6 sm:p-7`}
    >
      <div className="flex min-h-5 flex-wrap items-center justify-between gap-x-4 gap-y-2">
        {meta && <p className="font-mono text-xs text-muted">{meta}</p>}
        {project.inProgress && (
          <p className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 font-mono text-xs leading-none text-muted">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-dot" />
            In progress
          </p>
        )}
      </div>
      <h2 className="mt-4 text-xl leading-tight tracking-tight">
        {project.title}
      </h2>
      {project.tagline && (
        <p className="mt-1 text-sm text-muted">{project.tagline}</p>
      )}
      <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
        {project.bullets[0]}
      </p>
      <div className="mt-auto pt-6">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((item) => (
            <Chip key={item}>{item}</Chip>
          ))}
        </div>
        <p className="mt-5 text-sm font-medium transition-colors duration-150 group-hover:text-accent">
          View project <span aria-hidden="true">→</span>
        </p>
      </div>
    </Link>
  );
}
