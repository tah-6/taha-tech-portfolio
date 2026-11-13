import Link from "next/link";
import { nav, profile } from "@/data/content";
import { Button } from "./Button";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

/**
 * Sticky header (§8). Desktop: name, nav links, theme toggle, Contact
 * (outline) + Resume (filled). Mobile: name, Contact, menu icon.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur-md">
      <div className="wrap flex h-14 items-center gap-8">
        <Link href="/" className="font-medium tracking-tight text-fg">
          {profile.name}
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors duration-150 hover:text-fg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <Button href="/#contact" variant="outline" size="sm">
            Contact
          </Button>
          <div className="hidden md:block">
            <Button href="/resume" variant="primary" size="sm">
              Resume
            </Button>
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
