import { Button } from "@/src/shared/components/ui/button";
import Image from "next/image";

import picMe2 from "@/src/assets/image/omidPic.webp";
import hp6 from "@/src/assets/image/op1.jpg";
import hp5 from "@/src/assets/image/op2.jpg";
import hp4 from "@/src/assets/image/op3.jpg";
import hp3 from "@/src/assets/image/op4.jpg";
import hp2 from "@/src/assets/image/op5.jpg";

import { LucideStar } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <div className="">
      {/* hero section  */}
      <section className="relative overflow-hidden shadow-xl dark:shadow-2xl">
        {/* نقطه‌ها (dot grid) - فقط برای تم تاریک */}
        <div className="absolute inset-0 -z-10 ">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle,#73737340_1px,transparent_1px)] 
          bg-size-[24px_24px] 
          mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"
          />
        </div>

        {/* گرادیان ملایم در پشت عکس (برای تم روشن و تاریک) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-linear-to-r from-primary/10 via-primary/5 to-transparent dark:from-primary/20 dark:via-primary/10 blur-3xl -z-10" />

        <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-20">
          <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center">
            {/* سمت چپ: محتوای متنی */}
            <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl mx-auto lg:mx-0">
              <Button
                variant="ghost"
                size="sm"
                className="mx-auto lg:mx-0 w-fit text-xs font-medium bg-white dark:bg-gray-900/50 text-gray-600 dark:text-gray-300 rounded-full px-4 py-1.5 border border-gray-200 dark:border-gray-800 shadow-sm"
              >
                NEXT.JS • TYPESCRIPT • PERFORMANCE
              </Button>

              <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight leading-tight">
                Building Fast,
                <br />
                Scalable Web Apps
                <br />
                <span
                  className="text-transparent bg-clip-text bg-linear-to-r
    from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400"
                >
                  Under Real Constraints
                </span>
              </h2>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0">
                Frontend developer focused on clean architecture, performance
                and modern web experiences using Next.js, TypeScript and
                Tailwind CSS.
              </p>

              {/* ردیف آواتارها و امتیاز */}
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <div className="flex items-center -space-x-2">
                  {[hp6, hp4, hp3, hp2, hp5].map((pic, i) => (
                    <div
                      key={i}
                      className="relative w-10 h-10 rounded-full border-2 border-white dark:border-gray-900 shadow-md overflow-hidden"
                      style={{ zIndex: 5 - i }}
                    >
                      <Image
                        src={pic}
                        alt=""
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="text-center sm:text-left">
                  <div className="flex gap-1 justify-center sm:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <LucideStar
                        key={i}
                        stroke="#F39D0B"
                        fill="#F39D0B"
                        size={18}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Building modern products with{" "}
                    <span className="font-semibold text-gray-900 dark:text-teal-400">
                      scalable frontend systems
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* سمت راست: عکس */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative w-[280px] sm:w-[320px] lg:w-[380px]">
                {/* افکت درخشان (glow) پشت عکس */}
                <div className="absolute inset-0 rounded-full bg-teal-500/20 dark:bg-teal-400/20 blur-3xl -z-10 transform scale-110" />

                {/* یک باکس شیشه‌ای دور عکس (اختیاری) */}
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-sm p-2">
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src={picMe2}
                      alt="Hero"
                      width={500}
                      height={500}
                      quality={80}
                      loading="eager"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* نقطه‌های تزئینی کوچک (اختیاری) */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-teal-500/20 rounded-full blur-2xl -z-10" />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container m-auto max-w-7xl mt-20 px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* سمت چپ: بیوگرافی */}
          <div className="lg:w-[40%] flex flex-col justify-center">
            <div className="prose dark:prose-invert">
              <h2>Hey, I'm Omid Bagheri</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                I'm a web developer who started with graphic design and
                WordPress, but moved toward modern web development to build
                websites that are not just good-looking, but fast, scalable, and
                professional. I mainly work with Next.js, TypeScript, and
                Tailwind CSS.
              </p>
            </div>
          </div>

          {/* سمت راست: دو تا کارت + CTA */}
          <div className="lg:w-[60%] space-y-6">
            {/* ردیف بالا: دو کارت کنار هم */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                  From Iran's broken education system to building modern web
                  apps — a raw personal journey through the medical field and
                  beyond.
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
                  Fast, responsive websites and web apps using Next.js,
                  TypeScript, and Tailwind CSS. Clean architecture, smooth UX,
                  real performance.
                </p>
                <span className="inline-block mt-4 text-sm font-medium text-teal-600 dark:text-teal-400 group-hover:translate-x-1 transition-transform">
                  See my work →
                </span>
              </Link>
            </div>

            {/* ردیف پایین: CTA تمام عرض */}
            <div
              className="block p-8 rounded-3xl border-2 border-teal-500/30 dark:border-teal-400/20 
                    bg-gradient-to-r from-teal-50 to-white dark:from-teal-950/30 dark:to-gray-900/50 
                    hover:shadow-xl dark:hover:shadow-[0_20px_50px_-12px_rgba(20,184,166,0.2)] 
                    transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* glow پس‌زمینه */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl -z-10" />

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center shrink-0">
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
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Let's Work Together
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Have a project in mind? Let's build something great.
                    </p>
                  </div>
                </div>
                <a
                  href="mailto:your-email@example.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 
                     text-white text-sm font-medium rounded-full transition-colors shadow-lg 
                     shadow-teal-500/25 hover:shadow-teal-500/40 shrink-0"
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
        </div>
      </section>
    </div>
  );
}
