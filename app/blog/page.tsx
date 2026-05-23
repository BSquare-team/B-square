import CategorySection from "@/components/layouts/blog/CategorySection";
import HeroSection from "@/components/layouts/blog/HeroSection";
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
      <HeroSection />
      <CategorySection />
      {/* // All posts */}
      <section className=" px-6 py-20">
        <h2 className="text-3xl font-medium mb-6">All posts</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-9">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex flex-col h-full"
            >
              <div
                className="rounded-3xl overflow-hidden hover:shadow-2xl shadow-lg col-span-1
           dark:bg-[#0a0a0a94] dark:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.03)] 
           dark:hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.08)] transition-all
            duration-300 flex flex-col h-full"
              >
                <div className="p-8 border-t-4 border-blue-800 flex flex-col justify-between flex-1">
                  <div>
                    <p className="text-sm/5 text-gray-500">{post.date}</p>
                    <h2 className="mt-2 text-xl/7 font-bold text-gray-900 dark:text-white line-clamp-3">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm/6 text-gray-600 line-clamp-4">
                      {post.description}
                    </p>
                  </div>
                  <p className="mt-6 text-sm/5 font-medium">{post.author}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
