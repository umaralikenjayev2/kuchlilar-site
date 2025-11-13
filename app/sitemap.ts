import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/site";
import { posts } from "./blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`,               lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/kuchli-100`,     lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/blog`,           lastModified: new Date(), changeFrequency: "daily",  priority: 0.9 },
  ];

  const blog = posts.map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: p.updatedAt ? new Date(p.updatedAt) : new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...base, ...blog];
}