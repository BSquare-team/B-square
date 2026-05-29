// src/app/(main)/blog/[slug]/page.tsx

import { getPostBySlug, getAllPosts } from "@/src/features/blog/lib/posts";
import PostHeader from "@/src/features/blog/components/singlePost/PostHeader";
import PostContent from "@/src/features/blog/components/singlePost/PostContent";
import { APP_NAME, SERVER_URL } from "@/src/shared/lib/constants";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

export const revalidate = 3600;

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: `Post Not Found | ${APP_NAME}` };
  }

  const tags = [
    ...post.categoryTags.map((t) => t.tag),
    ...post.techTags.map((t) => t.tag),
  ];

  const postUrl = `${SERVER_URL}/blog/${slug}`;

  return {
    title: post.title,
    description: post.description,
    keywords: tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: `${post.title} | ${APP_NAME}`,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.featuredImage
        ? [
            {
              url: post.featuredImage,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : undefined,
      url: postUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.featuredImage ? [post.featuredImage] : undefined,
    },
    alternates: { canonical: postUrl },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen container m-auto px-6">
      {/* Back Button */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors pt-8"
      >
        ← Back to Blog
      </Link>

      {/* Post Header */}
      <PostHeader
        title={post.title}
        author={post.author}
        date={post.date}
        categoryTags={post.categoryTags}
        techTags={post.techTags}
        featuredImage={post.featuredImage}
      />

      {/* Post Content */}
      <PostContent blocks={post.blocks} />
    </div>
  );
}
