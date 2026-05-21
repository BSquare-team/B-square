// app/blog/page.tsx

import { APP_NAME, SERVER_URL } from "@/lib/constants";
import { getAllPosts } from "@/lib/posts";
import { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog",
  description: `Read our latest blog posts about web development, programming, and technology.`,
  openGraph: {
    title: `Blog | ${APP_NAME}`,
    description: `Read our latest blog posts about web development, programming, and technology.`,
    url: `${SERVER_URL}/blog`,
  },
  alternates: {
    canonical: `${SERVER_URL}/blog`,
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  if (posts.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Blog</h1>
          <p className="text-zinc-400">
            No posts yet. Create your first post in the admin panel.
          </p>
          <Link
            href="/admin/"
            target="_blank"
            className="text-blue-500 hover:underline mt-4 inline-block"
          >
            Go to Admin Panel →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-6 rounded-lg border border-zinc-800 hover:border-zinc-600 transition-colors group"
          >
            <article>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-zinc-400 mb-3">{post.description}</p>

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
                  <>
                    <span>·</span>
                  </>
                )}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
