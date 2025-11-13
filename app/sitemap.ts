// app/sitemap.ts
import type { MetadataRoute } from "next";
import { posts } from "./blog/posts";

const SITE_URL = "https://kuchlilar.com";

// Statik sahifalar konfiguratsiyasi
const staticRoutes: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly",  priority: 1.0 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.9 },
  { path: "/kuchli-100", changeFrequency: "monthly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Statik sahifalarni sitemapga aylantirish
  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Faqat published blog postlar
  const blogPages: MetadataRoute.Sitemap = posts
    .filter((p) => p.published)
    .map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.updatedAt ?? p.date),
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  return [...staticPages, ...blogPages];
}