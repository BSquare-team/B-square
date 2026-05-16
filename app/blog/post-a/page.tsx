"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import SwiperCards from "@/components/ui/swiper";
import { Small } from "@/components/ui/typography";

// import کامپوننت‌های اصلی
import { Swiper, SwiperSlide } from "swiper/react";

// import ماژول‌هایی که نیاز داری
import { Navigation, Pagination, Autoplay, EffectCards } from "swiper/modules";

// import استایل‌های اصلی Swiper (این خط خیلی مهمه!)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import SwiperThreeView from "@/components/ui/swiperThreeView";

export default function Home() {
  return (
    <div className="min-h-screen container m-auto ">
      {/* Hero section  */}
      <div className="mx-auto flex flex-col justify-center items-center pt-10 sm:pt22 pb-12 ">
        <Button
          variant={"outline"}
          size={"sm"}
          className="mb-6 text-gray-500 bg-white rounded-4xl font-medium text-[12px] "
        >
          Web Development
        </Button>

        <h1 className="text-center text-4xl max-w-165 font-extrabold">
          Best Next.js Personal Website Templates (2026): 12 Options Ranked
        </h1>

        <div className="mt-6">By Amin</div>

        <div className="mt-2 flex flex-row">
          <time dateTime="2026">February 18, 2026 </time>
          <span>Updated: February 19, 2026</span>
          <span>15 min read</span>
        </div>

        <Button
          variant={"outline"}
          className="mt-6 rounded-4xl text-gray-500 font-medium text-[12px]"
        >
          Human Written
        </Button>
      </div>
      {/* main content */}
      <div className="m-auto prose prose-lg">
        <p className="prose-p">
          Your personal website is the one project you never seem to finish. You
          start from scratch, burn a weekend on layout decisions, and end up
          with something that looks worse than a GitHub README.
        </p>

        <p>
          A good nextjs personal website template fixes this. You get a
          production-ready foundation with responsive design, dark mode, SEO,
          and a blog system built in. Customize the content, deploy to Vercel,
          and move on to work that actually matters.
        </p>

        <h2> Key Takeaways</h2>
        <blockquote>
          <p>if you remember nothing else</p>
          <ul>
            <li>
              Tailwind Next.js Starter Blog (6k+ stars) is the best free option
              for writers and bloggers
            </li>
            <li>
              Chronark.com is the cleanest developer portfolio template with
              built-in analytics
            </li>
          </ul>
        </blockquote>

        <h2>#1: Tailwind Next.js Starter Blog</h2>

        <div className="flex flex-col lg:flex-row gap-3">
          <div className="lg:w-1/2">
            <p>
              Best for: Writers, bloggers, and developers who prioritize content
            </p>

            <p>
              GitHub: timlrx/tailwind-nextjs-starter-blog | Demo:
              tailwind-nextjs-starter-blog.vercel.app
            </p>
          </div>
          <div className="lg:w-1/2">
            <SwiperCards />
          </div>
        </div>

        <p>
          The most complete nextjs personal website template for content
          creators. With over 6,000 GitHub stars, it is the most popular
          personal site template in the Next.js ecosystem and for good reason.
        </p>

        <Swiper
          slidesPerView={2}
          spaceBetween={-10}
          centeredSlides={true}
          pagination={{ clickable: true }}
          className=" w-full  rounded-xl "
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <SwiperSlide className="">
            <div className="bg-amber-400"></div>{" "}
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="bg-amber-400"></div>{" "}
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="bg-amber-400"></div>{" "}
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="bg-amber-400"></div>{" "}
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="bg-amber-400"></div>{" "}
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="bg-amber-400"></div>{" "}
          </SwiperSlide>
        </Swiper>

        <SwiperThreeView />

        <h2>Frequently Asked Questions</h2>

        <Accordion type="multiple" className="">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left font-semibold text-lg">
              What is the best free Next.js personal website template?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The Tailwind Next.js Starter Blog by timlrx is the best free
              option with over 6,000 GitHub stars. It includes MDX blog support,
              dark mode, SEO optimization, RSS feeds, sitemap generation, and
              tag-based filtering. It uses the App Router with TypeScript and
              Tailwind CSS and works on Vercel with one-click deployment.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left font-semibold text-lg">
              Do Next.js personal website templates support the App Router?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Most templates released after 2024 support the App Router. All 12
              templates in this list use the App Router with TypeScript. If you
              find a template still using the Pages Router, check the last
              commit date. Templates not updated in the past 6 months are likely
              outdated and may have dependency issues with Next.js 15.
            </AccordionContent>
          </AccordionItem>
        </Accordion>


      </div>
    </div>
  );
}
