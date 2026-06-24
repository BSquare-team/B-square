// src/app/(main)/blog/page.tsx

import HeroSection from "../../../features/blog/components/HeroSection";
import BlogPostsSection from "../../../features/blog/components/BlogPostsSection";
import ChangelogCTA from "../../../features/blog/components/ChangelogCTA";
import { getAllPosts } from "@/src/features/blog/lib/posts";
import { APP_NAME, SERVER_URL } from "@/src/shared/lib/constants";
import { Metadata } from "next";
import PageHeader from "@/src/features/team/components/singlePost/PageHeader";

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
      <PageHeader
        heroTitle="Blog "
        description="Stay informed with product updates, company news, and insights on how
          to sell smarter at your company."
      />

      <BlogPostsSection posts={posts} />
      <ChangelogCTA />
    </div>
  );
}
