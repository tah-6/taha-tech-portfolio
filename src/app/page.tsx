import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { AvailabilityPill } from "@/components/AvailabilityPill";
import { Button } from "@/components/Button";
import { ChipList } from "@/components/Chip";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { FeaturedProjectCard } from "@/components/FeaturedProjectCard";
import { FlipDeck } from "@/components/FlipDeck";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { TerminalDemo } from "@/components/TerminalDemo";
import {
  alsoNote,
  certifications,
  contactBlurb,
  education,
  experience,
  featuredProjects,
  links,
  profile,
  skills,
} from "@/data/content";

export const metadata: Metadata = { alternates: { canonical: "/" } };

function Section({
  id,
  title,
  action,
  children,
}: {
  id: string;
  title: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="wrap">
      <div className="section-gap border-t border-line">
        <div className="reveal">
        <div className="mb-10 flex items-baseline justify-between gap-6 lg:mb-14">
          <h2
            id={`${id}-title`}
            className="text-[1.75rem] leading-tight tracking-tight sm:text-[2rem]"
          >
            {title}
          </h2>
          {action}
        </div>
        {children}
        </div>
      </div>
    </section>
  );
}

const iconLinkClasses =
  "inline-flex size-9 items-center justify-center rounded-full text-muted transition-colors duration-150 hover:bg-surface hover:text-fg";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="wrap grid items-center gap-12 pt-14 pb-20 sm:pt-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:pt-28 lg:pb-32">
        <div className="min-w-0">
          <AvailabilityPill />
          <h1 className="mt-7 text-[2.375rem] leading-[1.08] font-normal tracking-[-0.03em] sm:text-5xl lg:text-[3.375rem]">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {profile.subline}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href={links.email}>Email me</Button>
            <Button href="/resume" variant="secondary">
              View resume
            </Button>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className={iconLinkClasses}
              >
                <GitHubIcon />
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className={iconLinkClasses}
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
        <TerminalDemo />
      </section>

      {/* Featured projects */}
      <Section
        id="projects"
        title="Featured projects"
        action={
          <Link href="/projects" className="link shrink-0 text-sm">
            All projects <span aria-hidden="true">→</span>
          </Link>
        }
      >
        <div className="grid gap-5">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      {/* Experience: Flip Deck (§11) */}
      <Section id="experience" title="Experience">
        <FlipDeck items={experience} />
        <p className="mx-auto mt-12 max-w-[520px] border-t border-line pt-6 text-sm leading-relaxed text-muted">
          <span className="font-mono text-xs">Also</span>
          <span className="mt-1.5 block">
            <span className="text-fg">{alsoNote.label}:</span> {alsoNote.text}
          </span>
        </p>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <dl className="divide-y divide-line border-y border-line">
          {skills.map((group) => (
            <div
              key={group.label}
              className="grid gap-3 py-5 md:grid-cols-[220px_1fr] md:gap-8"
            >
              <dt className="text-sm text-muted md:pt-1">{group.label}</dt>
              <dd>
                <ChipList items={group.items} label={group.label} />
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Education + certifications */}
      <Section id="education" title="Education and certifications">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div>
            <h3 className="text-sm text-muted">Education</h3>
            <p className="mt-4 text-xl tracking-tight">{education.school}</p>
            <p className="mt-1 text-muted">{education.degree}</p>
            <p className="mt-3 font-mono text-xs text-muted">
              {education.date} · {education.location}
            </p>
            <h4 className="mt-7 text-sm text-muted">Relevant coursework</h4>
            <div className="mt-3">
              <ChipList
                items={education.coursework}
                label="Relevant coursework"
              />
            </div>
          </div>
          <div>
            <h3 className="text-sm text-muted">Certifications</h3>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {certifications.map((certification) => (
                <li key={certification.name} className="py-4 leading-snug">
                  {certification.url ? (
                    <a
                      href={certification.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      {certification.name}{" "}
                      <span aria-hidden="true">→</span>
                    </a>
                  ) : (
                    certification.name
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <p className="max-w-3xl text-2xl leading-snug tracking-tight sm:text-[1.75rem]">
          {contactBlurb}
        </p>
        <p className="mt-8">
          <a href={links.email} className="link font-mono text-base sm:text-lg">
            {profile.email}
          </a>
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={links.email}>Email me</Button>
          <CopyEmailButton />
          <Button href={links.linkedin} variant="secondary">
            LinkedIn
          </Button>
          <Button href={links.github} variant="secondary">
            GitHub
          </Button>
          <Button href="/resume" variant="secondary">
            Resume
          </Button>
        </div>
      </Section>
    </>
  );
}
