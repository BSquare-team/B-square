"use client";

import { Button } from "@/src/shared/components/ui/button";
import Image from "next/image";

import picMe2 from "@/src/assets/image/omidPic.webp";
import hp6 from "@/src/assets/image/op1.jpg";
import hp5 from "@/src/assets/image/op2.jpg";
import hp4 from "@/src/assets/image/op3.jpg";
import hp3 from "@/src/assets/image/op4.jpg";
import hp2 from "@/src/assets/image/op5.jpg";

import { LucideStar } from "lucide-react";

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

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
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
    </div>
  );
}
