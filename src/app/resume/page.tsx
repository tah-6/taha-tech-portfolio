import { existsSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { links, profile } from "@/data/content";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Resume",
  description: `Resume of ${profile.name}: ${profile.headline}`,
  path: "/resume",
});

export default function ResumePage() {
  // Checked at build time. Until the PDF is added to /public the page shows
  // a short fallback instead of a broken embed.
  const hasPdf = existsSync(
    path.join(process.cwd(), "public", profile.resumePath),
  );

  return (
    <div className="wrap pt-14 pb-24 sm:pt-20 lg:pb-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h1 className="text-[2.375rem] leading-[1.08] font-normal tracking-[-0.03em] sm:text-5xl">
          Resume
        </h1>
        {hasPdf && (
          <div className="flex flex-wrap gap-3">
            <Button href={profile.resumePath} download>
              Download PDF
            </Button>
            <Button href={links.email} variant="secondary">
              Email me
            </Button>
          </div>
        )}
      </div>

      {hasPdf ? (
        <>
          <div className="mt-10 overflow-hidden rounded-xl border border-line bg-surface">
            <iframe
              src={`${profile.resumePath}#view=FitH`}
              title={`${profile.name} resume (PDF)`}
              className="block h-[80svh] min-h-[32rem] w-full"
            />
          </div>
          <p className="mt-4 text-sm text-muted">
            PDF not showing?{" "}
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Open it in a new tab <span aria-hidden="true">→</span>
            </a>
          </p>
        </>
      ) : (
        <div className="mt-10 rounded-xl border border-line bg-surface p-7 sm:p-10">
          <p className="max-w-xl text-lg leading-relaxed">
            Email me for a copy of my resume.
          </p>
          <div className="mt-6">
            <Button href={links.email}>Email me</Button>
          </div>
        </div>
      )}
    </div>
  );
}
