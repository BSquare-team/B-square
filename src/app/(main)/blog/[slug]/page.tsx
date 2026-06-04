// src/app/(main)/blog/[slug]/page.tsx

import { getPostBySlug, getAllPosts } from "@/src/features/blog/lib/posts";
import PostHeader from "@/src/features/blog/components/singlePost/PostHeader";
import PostContent from "@/src/features/blog/components/singlePost/PostContent";
import { APP_NAME, SERVER_URL } from "@/src/shared/lib/constants";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { FAQItem } from "@/src/features/blog/types/blog.types";

export const revalidate = 3600;

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

function generateFAQSchema(faqs: FAQItem[]): object | null {
  if (!faqs || faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.replace(/<[^>]*>/g, ""), // حذف تگ‌های HTML
      },
    })),
  };
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

  const seo = post.seo;
  const metaTitle = seo?.metaTitle || post.title;
  const metaDescription = seo?.metaDescription || post.description;

  const seoKeywords = seo?.keywords || [];
  const postTags = [...post.categoryTags, ...post.techTags];
  const allKeywords = [...seoKeywords, ...postTags];

  const postUrl = seo?.canonical || `${SERVER_URL}/blog/${slug}`;

  // ⬇️ پیدا کردن اولین بلاک FAQ توی محتوا
  const faqBlock = post.blocks.find((block) => block.type === "faq");
  const faqSchema = faqBlock?.questions
    ? generateFAQSchema(faqBlock.questions)
    : null;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: allKeywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: `${metaTitle} | ${APP_NAME}`,
      description: metaDescription,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.featuredImage
        ? [
            {
              url: post.featuredImage,
              width: 1200,
              height: 630,
              alt: metaTitle,
            },
          ]
        : undefined,
      url: postUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: post.featuredImage ? [post.featuredImage] : undefined,
    },
    alternates: { canonical: postUrl },
    // ⬇️ JSON-LD Schema
    other: faqSchema
      ? {
          "application/ld+json": JSON.stringify(faqSchema),
        }
      : undefined,
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
