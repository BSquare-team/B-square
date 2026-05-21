// app/blog/[slug]/page.tsx

import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import PostContent from "@/components/PostContent";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
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
    <div className="min-h-screen max-w-3xl mx-auto px-4 py-16">
      {/* Back Button */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-zinc-400 hover:text-zinc-200 transition-colors mb-8"
      >
        ← Back to Blog
      </Link>

      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

        <p className="text-zinc-400 text-lg mb-4">{post.description}</p>

        <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500">
          <span>{post.author}</span>
          <span>·</span>
          <span>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>

          {post.techTags.length > 0 && (
            <div className="flex gap-1.5">
              {post.techTags.map((t) => (
                <span
                  key={t.tag}
                  className="px-2 py-0.5 rounded-full bg-blue-900/50 text-blue-300 text-xs"
                >
                  {t.tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Featured Image */}
      {post.featuredImage && (
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full rounded-xl mb-10 object-cover max-h-96"
        />
      )}

      {/* Content Blocks */}
      <PostContent blocks={post.blocks} />
    </div>
  );
}
