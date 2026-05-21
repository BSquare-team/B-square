import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export default function page() {
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

      <section className="px-6 mt-7">
        <div className="flex flex-col justify-center prose prose-h2:mb-0 dark:prose-invert">
          <h2>What's happening</h2>
          <p>updating what we are working on currently ...</p>
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
    </div>
  );
}
