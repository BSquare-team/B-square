import { Button } from "@/src/shared/components/ui/button";
import Image from "next/image";

import picMe2 from "@/src/assets/image/mePic.jpg";
import hp6 from "@/src/assets/image/hp6.jpg";
import hp5 from "@/src/assets/image/hp5.jpg";
import hp4 from "@/src/assets/image/hp4.jpg";
import hp3 from "@/src/assets/image/hp3.jpg";
import hp2 from "@/src/assets/image/hp2.jpg";

import { LucideStar } from "lucide-react";
import CommentsSec from "../../../../features/team/components/singlePost/CommentsSec";
import Link from "next/link";

import { embedData } from "@/data/embedData";
import SwiperThreeView from "@/src/shared/components/ui/swiperThreeView";
import { CompanyBanner } from "@/src/features/team/components/singlePost/CompanyBanner";

export default function page() {
  return (
    <div className="">
      {/* hero section  */}
      <section className="relative overflow-hidden shadow-xl dark:shadow-2xl">
        {/* نقطه‌ها (dot grid) - فقط برای تم تاریک */}
        <div className="absolute inset-0 -z-10 ">
          <div className="absolute inset-0 bg-[radial-gradient(circle,#73737340_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
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
                SOFTWARE ALTERNATIVES DIRECTORY
              </Button>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                ELEVATING BRANDS <br /> through <br />{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400">
                  ENGAGING VIDEOS
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0">
                Over 27 alternatives across 7 categories. Free, open source, and
                paid. Compare and switch with confidence.
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
                    Trusted by{" "}
                    <span className="font-semibold text-gray-900 dark:text-teal-400">
                      2,000+
                    </span>{" "}
                    developers
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
                      quality={100}
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

      <CompanyBanner />
      {/* comments  */}
      <CommentsSec />

      <section className="container m-auto max-w-7xl mt-20 px-6">
        <div className="flex flex-col md:flex-row justify-between ">
          <div className="prose dark:prose-invert lg:w-[60%] md:w-1/2">
            <h2>My Resume</h2>
            <p>work I've done</p>
          </div>
          <div className=" w-full lg::w-[40%] md:w-1/2 ">
            <SwiperThreeView videos={embedData} />
          </div>
        </div>
      </section>

      <section className="container m-auto max-w-7xl mt-20 px-6">
        <div className="flex flex-col md:flex-row justify-between ">
          <div className="prose dark:prose-invert md:w-[60%]">
            <h2>About me</h2>
            <p>
              I'm Amin Bagheri. <br />
              Most of my story — how I got into front-end development and what
              I've been through so far — you can read on this blog.
            </p>
          </div>

          <Link href="/blog/how-i-got-here" className="md:w-[40%] group mt-4">
            <div className="rounded-3xl overflow-hidden hover:shadow-2xl shadow-lg dark:bg-[#0a0a0a94] dark:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.03)] dark:hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.08)] transition-all duration-300 h-full">
              <div className="p-8 border-t-4 border-blue-800 flex flex-col justify-between h-full">
                <div>
                  <p className="text-sm/5 text-gray-500 dark:text-gray-400"></p>
                  <h2 className="mt-2 text-xl/7 font-bold text-gray-900 dark:text-white line-clamp-3 group-hover:text-blue-400 transition-colors">
                    How I got here
                  </h2>
                  <p className="mt-2 text-sm/6 text-gray-600 dark:text-gray-400 line-clamp-4"></p>
                </div>
                <p className="mt-6 text-sm/5 font-medium text-gray-700 dark:text-gray-300">
                  Read more →
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="container m-auto max-w-7xl mt-20 px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:sticky md:top-40 md:w-[60%] h-fit">
            <div className="prose dark:prose-invert">
              <h2>Opportunities </h2>
              <p>
                Stories of the valuable opportunities I've had — and what I
                learned from each one.
              </p>
            </div>
          </div>

          <Link
            href="/blog/first-real-client"
            className="md:w-[40%] group mt-4"
          >
            <div className="rounded-3xl overflow-hidden hover:shadow-2xl shadow-lg dark:bg-[#0a0a0a94] dark:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.03)] dark:hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.08)] transition-all duration-300">
              <div className="p-8 border-t-4 border-blue-800 flex flex-col justify-between">
                <div>
                  <p className="text-sm/5 text-gray-500 dark:text-gray-400"></p>
                  <h2 className="mt-2 text-xl/7 font-bold text-gray-900 dark:text-white line-clamp-3 group-hover:text-blue-400 transition-colors">
                    First real client
                  </h2>
                  <p className="mt-2 text-sm/6 text-gray-600 dark:text-gray-400 line-clamp-4"></p>
                </div>
                <p className="mt-6 text-sm/5 font-medium text-gray-700 dark:text-gray-300">
                  Read more →
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
