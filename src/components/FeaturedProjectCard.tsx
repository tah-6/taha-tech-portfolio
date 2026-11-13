import Link from "next/link";
import type { Project } from "@/data/content";
import { cardClasses, cardInteractiveClasses } from "./Card";
import { ProjectVisual } from "./ProjectVisual";

/** Large home-page card: text on the left, app-window visual on the right. */
export function FeaturedProjectCard({ project }: { project: Project }) {
  const meta = [project.date, project.context].filter(Boolean).join(" · ");

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`${cardClasses} ${cardInteractiveClasses} group grid gap-7 p-5 sm:p-8 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-12`}
    >
      <div>
        {meta && <p className="font-mono text-xs text-muted">{meta}</p>}
        <h3 className="mt-3 text-2xl leading-tight tracking-tight">
          {project.title}
        </h3>
        {project.tagline && (
          <p className="mt-1 text-muted">{project.tagline}</p>
        )}
        <p className="mt-4 leading-relaxed text-muted">{project.bullets[0]}</p>
        <p className="mt-6 text-sm font-medium transition-colors duration-150 group-hover:text-accent">
          View project <span aria-hidden="true">→</span>
        </p>
      </div>
      <ProjectVisual project={project} />
    </Link>
  );
}
