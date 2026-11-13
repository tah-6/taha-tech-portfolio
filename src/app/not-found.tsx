import type { Metadata } from "next";
import { Button } from "@/components/Button";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="wrap py-24 sm:py-32">
      <p className="font-mono text-xs text-muted">404</p>
      <h1 className="mt-4 text-[2.375rem] leading-[1.08] font-normal tracking-[-0.03em] sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
        That page does not exist. The links below go to the main parts of the
        site.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/">Home</Button>
        <Button href="/projects" variant="secondary">
          Projects
        </Button>
      </div>
    </div>
  );
}
