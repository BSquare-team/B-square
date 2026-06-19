// app/sitemap.ts

import { MetadataRoute } from "next";
import { SERVER_URL } from "@/src/shared/lib/constants";
import { getAllPosts } from "@/src/features/blog/lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = getAllPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SERVER_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SERVER_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SERVER_URL}/team/amin`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SERVER_URL}/team/omid`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SERVER_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...postRoutes];
}
