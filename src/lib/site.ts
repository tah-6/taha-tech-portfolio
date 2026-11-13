import type { Metadata } from "next";
import { profile } from "@/data/content";

/**
 * Public URL of the site, used for canonical links, the sitemap and Open
 * Graph tags. Set NEXT_PUBLIC_SITE_URL to the production domain. On Vercel
 * the production URL is picked up automatically when the variable is unset.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

/**
 * Metadata for a sub-page: title, description, canonical URL and matching
 * Open Graph tags (including the shared image, which Next.js drops from a
 * page as soon as that page sets its own `openGraph`).
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: profile.name,
      locale: "en_CA",
      title,
      description,
      url: path,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${profile.name}: ${profile.headline}`,
        },
      ],
    },
  };
}
