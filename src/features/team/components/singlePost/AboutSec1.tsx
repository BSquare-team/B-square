import Link from "next/link";
import React from "react";

export default function AboutSec1() {
  return (
    <section className="container m-auto max-w-7xl mt-20 px-6">
      <div className="space-y-16">
        {/* بیوگرافی - همون که داری */}
        <div className="prose dark:prose-invert max-w-3xl mx-auto text-center">
          <h2>Hey, I’m Omid Bagheri</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            I'm a web developer who started with graphic design and WordPress,
            but moved toward modern web development to build websites that are
            not just good-looking, but fast, scalable, and professional. I
            mainly work with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>

        {/* سه کارت */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* کارت ۱: داستان من */}
          <Link
            href="/blog/my-story"
            className="group block p-8 rounded-3xl border border-gray-200 dark:border-gray-800 
                   bg-white dark:bg-gray-900/50 hover:shadow-xl dark:hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] 
                   transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-amber-600 dark:text-amber-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
              My Story
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
              From Iran's broken education system to building modern web apps —
              a raw personal journey through the medical field and beyond.
            </p>
            <span className="inline-block mt-4 text-sm font-medium text-amber-600 dark:text-amber-400 group-hover:translate-x-1 transition-transform">
              Read my story →
            </span>
          </Link>

          {/* کارت ۲: تخصص و مهارت */}
          <Link
            href="/blog"
            className="group block p-8 rounded-3xl border border-gray-200 dark:border-gray-800 
                   bg-white dark:bg-gray-900/50 hover:shadow-xl dark:hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] 
                   transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-teal-600 dark:text-teal-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
              What I Build
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
              Fast, responsive websites and web apps using Next.js, TypeScript,
              and Tailwind CSS. Clean architecture, smooth UX, real performance.
            </p>
            <span className="inline-block mt-4 text-sm font-medium text-teal-600 dark:text-teal-400 group-hover:translate-x-1 transition-transform">
              See my work →
            </span>
          </Link>

          {/* کارت ۳: همکاری - مهمترین کارت */}
          <div
            className="block p-8 rounded-3xl border-2 border-teal-500/30 dark:border-teal-400/20 
                      bg-gradient-to-br from-teal-50 to-white dark:from-teal-950/30 dark:to-gray-900/50 
                      hover:shadow-xl dark:hover:shadow-[0_20px_50px_-12px_rgba(20,184,166,0.2)] 
                      transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
          >
            {/* glow پس‌زمینه */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl -z-10" />

            <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-teal-600 dark:text-teal-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Let's Work Together
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Have a project in mind? Need a fast, modern website? Let's build
              something great together.
            </p>
            <a
              href="mailto:your-email@example.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 
                     text-white text-sm font-medium rounded-full transition-colors shadow-lg 
                     shadow-teal-500/25 hover:shadow-teal-500/40"
            >
              Get in touch
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
