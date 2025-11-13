// app/sitemap.ts
import type { MetadataRoute } from "next";
import { posts, SITE_URL } from "./blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/kuchli-100`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // BLOG POSTLAR
    ...posts.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ];
}