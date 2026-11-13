import Link from "next/link";
import { featuredProjects, links, profile } from "@/data/content";

type FooterLink = { label: string; href: string };

const pages: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Resume", href: "/resume" },
];

const projects: FooterLink[] = [
  ...featuredProjects.map((project) => ({
    label: project.title,
    href: `/projects/${project.slug}`,
  })),
  { label: "All projects", href: "/projects" },
];

const connect: FooterLink[] = [
  { label: "Email", href: links.email },
  { label: "LinkedIn", href: links.linkedin },
  { label: "GitHub", href: links.github },
  { label: "Resume", href: "/resume" },
];

function FooterColumn({ title, items }: { title: string; items: FooterLink[] }) {
  return (
    <nav aria-label={title}>
      <h2 className="text-sm text-muted">{title}</h2>
      <ul className="mt-3 space-y-2.5 text-sm">
        {items.map((item) => {
          const className =
            "text-fg transition-colors duration-150 hover:text-accent";
          const isExternal = /^https?:\/\//.test(item.href);
          return (
            <li key={item.label}>
              {isExternal || item.href.startsWith("mailto:") ? (
                <a
                  href={item.href}
                  className={className}
                  {...(isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.label}
                </a>
              ) : (
                <Link href={item.href} className={className}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/** Multi-column footer on every page (§8): Pages / Projects / Connect. */
export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="font-medium tracking-tight">{profile.name}</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
            {profile.availability}
          </p>
          <p className="mt-1 text-sm text-muted">{profile.location}</p>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:contents">
          <FooterColumn title="Pages" items={pages} />
          <FooterColumn title="Projects" items={projects} />
          <FooterColumn title="Connect" items={connect} />
        </div>
      </div>
      <div className="wrap">
        <p className="border-t border-line py-5 font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
