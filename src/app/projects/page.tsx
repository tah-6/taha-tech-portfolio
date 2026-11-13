import type { Metadata } from "next";
import { ProjectFilter } from "@/components/ProjectFilter";
import { profile, visibleProjects } from "@/data/content";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description: `Embedded, hardware and software projects by ${profile.name}, Computer Engineering student at the University of Guelph.`,
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="wrap pt-14 pb-24 sm:pt-20 lg:pb-32">
      <h1 className="text-[2.375rem] leading-[1.08] font-normal tracking-[-0.03em] sm:text-5xl">
        Projects
      </h1>
      <div className="mt-10">
        <ProjectFilter projects={visibleProjects} />
      </div>
    </div>
  );
}
