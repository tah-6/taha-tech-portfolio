import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { AppWindow } from "@/components/AppWindow";
import { Button } from "@/components/Button";
import { cardClasses, cardInteractiveClasses } from "@/components/Card";
import { ChipList } from "@/components/Chip";
import { visibleProjects } from "@/data/content";
import { pageMetadata } from "@/lib/site";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return visibleProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = visibleProjects.find((item) => item.slug === slug);
  if (!project) return {};
  return pageMetadata({
    title: project.title,
    description: project.bullets[0],
    path: `/projects/${project.slug}`,
  });
}

function DetailSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="reveal grid gap-4 border-t border-line py-10 md:grid-cols-[220px_1fr] md:gap-8">
      <h2 className="text-sm text-muted md:pt-1">{title}</h2>
      <div className="max-w-2xl">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed">
          <span
            aria-hidden="true"
            className="mt-[0.7em] size-1 shrink-0 rounded-full bg-line-strong"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const index = visibleProjects.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const project = visibleProjects[index];
  const previous = visibleProjects[index - 1];
  const next = visibleProjects[index + 1];

  const meta = [project.date, project.context].filter(Boolean).join(" · ");
  const [overview, ...built] = project.bullets;

  return (
    <article className="wrap pt-10 pb-24 sm:pt-14 lg:pb-32">
      <Link href="/projects" className="link text-sm text-muted">
        <span aria-hidden="true">←</span> All projects
      </Link>

      <header className="mt-10 pb-12 lg:pb-16">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {meta && <p className="font-mono text-xs text-muted">{meta}</p>}
          {project.inProgress && (
            <p className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 font-mono text-xs leading-none text-muted">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-dot" />
              In progress
            </p>
          )}
        </div>
        <h1 className="mt-4 max-w-3xl text-[2.375rem] leading-[1.08] font-normal tracking-[-0.03em] sm:text-5xl">
          {project.title}
        </h1>
        {project.tagline && (
          <p className="mt-3 max-w-2xl text-lg text-muted">{project.tagline}</p>
        )}
        <div className="mt-7">
          <ChipList items={project.stack} label="Stack" />
        </div>
        {(project.github || project.live) && (
          <div className="mt-7 flex flex-wrap gap-3">
            {project.live && (
              <Button href={project.live}>
                Live site <span aria-hidden="true">→</span>
              </Button>
            )}
            {project.github && (
              <Button
                href={project.github}
                variant={project.live ? "secondary" : "primary"}
              >
                GitHub <span aria-hidden="true">→</span>
              </Button>
            )}
          </div>
        )}
      </header>

      <DetailSection title="Overview">
        <p className="text-lg leading-relaxed">{overview}</p>
      </DetailSection>

      {built.length > 0 && (
        <DetailSection title="What I built">
          <BulletList items={built} />
        </DetailSection>
      )}

      {project.results && project.results.length > 0 && (
        <DetailSection title="Results">
          <BulletList items={project.results} />
        </DetailSection>
      )}

      {project.images && project.images.length > 0 && (
        <DetailSection title="Images">
          <div className="grid gap-6">
            {project.images.map((image) => (
              <AppWindow key={image.src} title={project.slug}>
                <div className="relative aspect-[16/10]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-contain"
                  />
                </div>
              </AppWindow>
            ))}
          </div>
        </DetailSection>
      )}

      <nav
        aria-label="More projects"
        className="grid gap-4 border-t border-line pt-10 sm:grid-cols-2"
      >
        {previous ? (
          <Link
            href={`/projects/${previous.slug}`}
            className={`${cardClasses} ${cardInteractiveClasses} block p-5`}
          >
            <span className="block font-mono text-xs text-muted">
              <span aria-hidden="true">←</span> Previous project
            </span>
            <span className="mt-2 block font-medium">{previous.title}</span>
          </Link>
        ) : (
          <span className="hidden sm:block" />
        )}
        {next && (
          <Link
            href={`/projects/${next.slug}`}
            className={`${cardClasses} ${cardInteractiveClasses} block p-5 sm:text-right`}
          >
            <span className="block font-mono text-xs text-muted">
              Next project <span aria-hidden="true">→</span>
            </span>
            <span className="mt-2 block font-medium">{next.title}</span>
          </Link>
        )}
      </nav>
    </article>
  );
}
