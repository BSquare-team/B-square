// src/app/(main)/blog/page.tsx

import HeroSection from "./_components/HeroSection";
import CategorySection from "./_components/CategorySection";
import BlogPostsSection from "./_components/BlogPostsSection";
import { getAllPosts } from "@/src/features/blog/lib/posts";
import { APP_NAME, SERVER_URL } from "@/src/shared/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read our latest blog posts about web development, programming, and technology.",
  openGraph: {
    title: `Blog | ${APP_NAME}`,
    description:
      "Read our latest blog posts about web development, programming, and technology.",
    url: `${SERVER_URL}/blog`,
  },
  alternates: {
    canonical: `${SERVER_URL}/blog`,
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container m-auto max-w-7xl">
      <HeroSection />
      <CategorySection />
      <BlogPostsSection posts={posts} />
    </div>
  );
}
