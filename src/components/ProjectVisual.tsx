import Image from "next/image";
import type { Project } from "@/data/content";
import { AppWindow } from "./AppWindow";

/**
 * Project visual inside an app-window frame (§9). Shows the first image from
 * /public/projects/<slug>/ when one is listed in content.ts; until then it
 * shows a plain summary built only from the project's own data.
 */
export function ProjectVisual({
  project,
  tone = "bg",
}: {
  project: Project;
  tone?: "surface" | "bg";
}) {
  const image = project.images?.[0];

  if (image) {
    return (
      <AppWindow title={project.slug} tone={tone}>
        <div className="relative aspect-[16/10]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 520px, 100vw"
            className="object-cover"
          />
        </div>
      </AppWindow>
    );
  }

  const rows: { label: string; values: string[] }[] = [];
  if (project.date) rows.push({ label: "dates", values: [project.date] });
  if (project.context) rows.push({ label: "type", values: [project.context] });
  if (project.inProgress) rows.push({ label: "status", values: ["In progress"] });
  rows.push({ label: "stack", values: project.stack });

  return (
    <AppWindow title={project.slug} tone={tone}>
      <dl className="grid grid-cols-[4.5rem_1fr] gap-x-4 gap-y-3 p-5 font-mono text-[0.8125rem] leading-relaxed sm:p-6">
        {rows.map((row) => (
          <div key={row.label} className="contents">
            <dt className="text-muted">{row.label}</dt>
            <dd className="text-fg">
              {row.values.map((value) => (
                <span key={value} className="block">
                  {value}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </AppWindow>
  );
}
