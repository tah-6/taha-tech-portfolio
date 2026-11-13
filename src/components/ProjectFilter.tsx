"use client";

import { useState } from "react";
import type { Project, ProjectCategory } from "@/data/content";
import { projectCategories } from "@/data/content";
import { ProjectCard } from "./ProjectCard";

type Filter = "all" | ProjectCategory;

const tabs: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  ...projectCategories,
];

/** Filter tabs (All · Embedded & Hardware · Software) above the project grid. */
export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const shown =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      <div
        role="group"
        aria-label="Filter projects"
        className="flex flex-wrap gap-2"
      >
        {tabs.map((tab) => {
          const selected = tab.id === filter;
          return (
            <button
              key={tab.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(tab.id)}
              className={`inline-flex h-9 cursor-pointer items-center rounded-full px-4 text-sm font-medium whitespace-nowrap transition-colors duration-150 ${
                selected
                  ? "bg-fg text-bg"
                  : "bg-surface text-fg hover:bg-surface-hover"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        Showing {shown.length} {shown.length === 1 ? "project" : "projects"}
      </p>

      <ul className="mt-8 grid gap-5 md:grid-cols-2">
        {shown.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </>
  );
}
