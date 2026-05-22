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

export default function page() {
  const posts = getAllPosts();
  if (posts.length === 0) {
    return <p>not found</p>;
  }

  return (
    <div className="container m-auto max-w-7xl ">
      {/* // hero section */}
      <section className="p-6 ">
        <div className="flex flex-col justify-center prose prose-h1:mb-2 dark:prose-invert">
          <p>Blog</p>
          <h1>What's happening</h1>
          <p>
            Stay informed with product updates, company news, and insights on
            how to sell smarter at your company.
          </p>
        </div>
      </section>

      {/* // categories*/}

      <section className="px-6 mt-12 lg:mt-16">
        <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-gray-950 dark:via-gray-900 dark:to-black shadow-2xl border border-gray-800/50 transition-all duration-500 hover:shadow-2xl dark:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.05)] dark:hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.08)]">
          {/* Subtle animated gradient overlay (purely decorative) */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 animate-pulse pointer-events-none"></div>

          <div className="relative p-8 md:p-12 lg:p-16 flex flex-col items-center text-center">
            {/* Eyebrow / Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 text-xs font-mono font-medium text-gray-300 uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Live & Open
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl">
              What We Are{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                Working On
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mt-6 leading-relaxed">
              Stay up to date with our latest progress, features, and
              behind-the-scenes updates. We continuously improve our platform —
              here's what's new right now.
            </p>

            {/* Feature highlights as mini badges/stats */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {[
                "📦 2 Active Projects",
                "🔄 15+ Updates This Month",
                "🌍 100% Free Access",
              ].map((feature) => (
                <span
                  key={feature}
                  className="text-sm font-medium text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Call to Action Button */}
            <div className="mt-12">
              <Link
                href="/blog/changelog"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <span>Explore the latest updates</span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* // All posts */}
      <section className=" px-6 py-20">
        <h2 className="text-3xl font-medium mb-6">All posts</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-9">
          <div
            className="rounded-3xl overflow-hidden hover:shadow-2xl shadow-lg col-span-1
           dark:bg-[#0a0a0a94] dark:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.03)] dark:hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.08)] transition-all duration-300 flex flex-col h-full"
          >
            <Link href="/blog/post-a" className="flex flex-col h-full">
              <div className="p-8 border-t-4 border-blue-800 flex flex-col justify-between flex-1">
                <div>
                  <p className="text-sm/5 text-gray-500">
                    Monday, December 1, 2025
                  </p>
                  <h1 className="mt-2 text-xl/7 font-bold text-gray-900 dark:text-white line-clamp-3">
                    Best Next.js Personal Website Templates (2026): 12 Options
                    Ranked
                  </h1>
                  <p className="mt-2 text-sm/6 text-gray-600 line-clamp-4">
                    Your personal website is the one project you never seem to
                    finish. You start from scratch, burn a weekend on layout
                    decisions, and end up with something that looks worse than a
                    GitHub README.
                  </p>
                </div>
                <p className="mt-6 text-sm/5 font-medium">Amin</p>
              </div>
            </Link>
          </div>
          <div
            className="rounded-3xl overflow-hidden hover:shadow-2xl shadow-lg col-span-1
           dark:bg-[#0a0a0a94] dark:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.03)] dark:hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.08)] transition-all duration-300 flex flex-col h-full"
          >
            <Link href="/blog/post-b" className="flex flex-col h-full">
              <div className="p-8 border-t-4 border-blue-800 flex flex-col justify-between flex-1">
                <div>
                  <p className="text-sm/5 text-gray-500">
                    Monday, December 1, 2025
                  </p>
                  <h1 className="mt-2 text-xl/7 font-bold text-gray-900 dark:text-white line-clamp-3">
                    Lovable vs Bolt vs v0: We Tested All 4 AI Builders
                  </h1>
                  <p className="mt-2 text-sm/6 text-gray-600 line-clamp-4">
                    We tested Lovable, Bolt, v0, and Forge by building the same
                    SaaS app. See head-to-head benchmarks, pricing, code quality
                    scores, and which tool fits your project.
                  </p>
                </div>
                <p className="mt-6 text-sm/5 font-medium">Amin</p>
              </div>
            </Link>
          </div>
          <div
            className="rounded-3xl overflow-hidden hover:shadow-2xl shadow-lg col-span-1
           dark:bg-[#0a0a0a94] dark:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.03)] dark:hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.08)] transition-all duration-300 flex flex-col h-full"
          >
            <Link href="/blog/post-b" className="flex flex-col h-full">
              <div className="p-8 border-t-4 border-blue-800 flex flex-col justify-between flex-1">
                <div>
                  <p className="text-sm/5 text-gray-500">
                    Monday, December 1, 2025
                  </p>
                  <h1 className="mt-2 text-xl/7 font-bold text-gray-900 dark:text-white line-clamp-3">
                    Lovable vs Bolt vs v0: We Tested All 4 AI Builders
                  </h1>
                  <p className="mt-2 text-sm/6 text-gray-600 line-clamp-4">
                    We tested Lovable, Bolt, v0, and Forge by building the same
                    SaaS app. See head-to-head benchmarks, pricing, code quality
                    scores, and which tool fits your project.
                  </p>
                </div>
                <p className="mt-6 text-sm/5 font-medium">Amin</p>
              </div>
            </Link>
          </div>
          <div
            className="rounded-3xl overflow-hidden hover:shadow-2xl shadow-lg col-span-1
           dark:bg-[#0a0a0a94] dark:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.03)] dark:hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.08)] transition-all duration-300 flex flex-col h-full"
          >
            <Link href="/blog/post-b" className="flex flex-col h-full">
              <div className="p-8 border-t-4 border-blue-800 flex flex-col justify-between flex-1">
                <div>
                  <p className="text-sm/5 text-gray-500">
                    Monday, December 1, 2025
                  </p>
                  <h1 className="mt-2 text-xl/7 font-bold text-gray-900 dark:text-white line-clamp-3">
                    Lovable vs Bolt vs v0: We Tested All 4 AI Builders
                  </h1>
                  <p className="mt-2 text-sm/6 text-gray-600 line-clamp-4">
                    We tested Lovable, Bolt, v0, and Forge by building the same
                    SaaS app. See head-to-head benchmarks, pricing, code quality
                    scores, and which tool fits your project.
                  </p>
                </div>
                <p className="mt-6 text-sm/5 font-medium">Amin</p>
              </div>
            </Link>
          </div>
          <div
            className="rounded-3xl overflow-hidden hover:shadow-2xl shadow-lg col-span-1
           dark:bg-[#0a0a0a94] dark:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.03)] dark:hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.08)] transition-all duration-300 flex flex-col h-full"
          >
            <Link href="/blog/post-b" className="flex flex-col h-full">
              <div className="p-8 border-t-4 border-blue-800 flex flex-col justify-between flex-1">
                <div>
                  <p className="text-sm/5 text-gray-500">
                    Monday, December 1, 2025
                  </p>
                  <h1 className="mt-2 text-xl/7 font-bold text-gray-900 dark:text-white line-clamp-3">
                    Lovable vs Bolt vs v0: We Tested All 4 AI Builders
                  </h1>
                  <p className="mt-2 text-sm/6 text-gray-600 line-clamp-4">
                    We tested Lovable, Bolt, v0, and Forge by building the same
                    SaaS app. See head-to-head benchmarks, pricing, code quality
                    scores, and which tool fits your project.
                  </p>
                </div>
                <p className="mt-6 text-sm/5 font-medium">Amin</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="min-h-screen max-w-3xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-8">Blog</h1>
        </div>

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
      </section>
    </div>
  );
}
