import type { MetadataRoute } from "next";
import { visibleProjects } from "@/data/content";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/projects",
    ...visibleProjects.map((project) => `/projects/${project.slug}`),
    "/resume",
  ];
  return paths.map((path) => ({ url: `${siteUrl}${path}` }));
}
