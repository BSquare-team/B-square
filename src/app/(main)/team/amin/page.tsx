"use client";

import { Button } from "@/src/shared/components/ui/button";
import Image from "next/image";

import picMe2 from "@/src/assets/image/mePic.jpg";
import hp6 from "@/src/assets/image/hp6.jpg";
import hp5 from "@/src/assets/image/hp5.jpg";
import hp4 from "@/src/assets/image/hp4.jpg";
import hp3 from "@/src/assets/image/hp3.jpg";
import hp2 from "@/src/assets/image/hp2.jpg";

import { ArrowBigDown, LucideStar, Play } from "lucide-react";
import CommentsSec from "../../../../features/team/components/singlePost/CommentsSec";
import Link from "next/link";

import { embedData } from "@/data/embedData";
import { CompanyBanner } from "@/src/features/team/components/singlePost/CompanyBanner";
import FeaturedProjects from "@/src/features/team/components/singlePost/FeaturedProjects";
import LetsCallSection from "@/src/features/team/components/singlePost/LetsCallSection";
import { ProjectsAminData } from "@/data/FeaturedProjectsData";
import Workflow from "@/src/features/team/components/singlePost/Workflow";
import { blogPostsData, workFlowData } from "@/data/workFlowData";
import PageHeader from "@/src/features/team/components/singlePost/PageHeader";
import BlogHighlite from "@/src/features/team/components/singlePost/BlogHighlite";
import { useRef } from "react";

export default function page() {
  const featuredRef = useRef<HTMLDivElement>(null);
  const letsCallRef = useRef<HTMLDivElement>(null);

  const scrollToFeatured = () => {
    featuredRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const scrollToLetsCall = () => {
    letsCallRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="">
      {/* hero section  */}

      <PageHeader
        heroTitle="Amin Bagheri "
        description="  Frontend Developer | Video Editor"
      />

      <section className="relative overflow-hidden shadow-xl dark:shadow-2xl">
        <div className="absolute inset-0 -z-10 ">
          <div className="absolute inset-0 bg-[radial-gradient(circle,#73737340_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-center">
            <div className="w-full lg:text-left space-y-6 max-w-2xl mx-auto lg:mx-0">
              {/* <Button
                variant="ghost"
                size="sm"
                className="mx-auto lg:mx-0 w-fit sm:text-xs text-[10px] font-medium bg-white dark:bg-gray-900/50 text-gray-600 dark:text-gray-300 rounded-full px-4 py-1.5 border border-gray-200 dark:border-gray-800 shadow-sm"
              >
                Frontend Developer| Video Editor
              </Button> */}

              <h1 className=" text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                ELEVATING BRANDS <br /> through <br />{" "}
                <span className="w-full text-transparent bg-clip-text bg-linear-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400">
                  CREATIVE SOLUTIONS
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0">
                Over 3 years of creative work, helping companies and creators
                strengthen their digital presence.
              </p>

              <div className="flex flex-wrap lg:justify-start gap-4 pt-2">
                {/* دکمه Let's Call */}

                <button
                  className="btn-premium relative inline-block rounded-[9px] cursor-pointer bg-transparent border-none"
                  onClick={scrollToLetsCall}
                >
                  <span className="btn-premium-inner relative z-[2] inline-flex items-center gap-2 lg:text-[13px] text-[11px] font-medium tracking-[0.08em] uppercase text-[#0c0c0c] py-[10px] px-[14px] lg:py-[13px] lg:px-7 rounded-[7px] cursor-pointer bg-[#e8e5df] overflow-hidden whitespace-nowrap transition-[color,background] duration-300 ease-in-out">
                    Let's call
                  </span>
                </button>
                <button
                  className="btn-premium relative inline-block rounded-[9px] cursor-pointer bg-transparent border-none"
                  onClick={scrollToFeatured}
                >
                  <span className="btn-premium-inner relative z-[2] inline-flex items-center gap-2 lg:text-[13px] text-[11px] font-medium tracking-[0.08em] uppercase text-[#e8e5df] py-[10px] px-[14px] lg:py-[13px] rounded-[7px] cursor-pointer bg-[#161616] overflow-hidden whitespace-nowrap transition-[color,background] duration-300 ease-in-out">
                    View portfolio
                  </span>
                </button>
              </div>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative w-[220px] lg:w-[280px]">
                <div className="rounded-3xl  shadow-2xl border border-white/20 dark:border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-sm p-2">
                  <div className="relative rounded-2xl ">
                    <Image
                      src={picMe2}
                      alt="Hero"
                      width={500}
                      height={500}
                      quality={100}
                      className=" w-full h-auto object-cover rounded-2xl"
                    />

                    <div className="flex flex-col items-center w-45 p-3 rounded-2xl gap-4 justify-center absolute -bottom-10 -right-9 scale-80 md:scale-100 dark:bg-white/10 bg-black/70 backdrop-blur-md border border-white/20">
                      <div className="flex items-center -space-x-3.5 sm:-space-x-2">
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

                      <div className="text-center">
                        <div className="flex gap-1 justify-center ">
                          {[...Array(5)].map((_, i) => (
                            <LucideStar
                              key={i}
                              stroke="#F39D0B"
                              fill="#F39D0B"
                              size={18}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400  ">
                          Trusted by{" "}
                          <span className="font-semibold text-teal-400">
                            300+
                          </span>{" "}
                          developers and editors
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CompanyBanner />
      {/* comments  */}
      <div ref={featuredRef}>
        <FeaturedProjects
          data={ProjectsAminData}
          buttonHref=""
          buttonText="Let's call"
        />
      </div>
      <div className="h-0.5 bg-border"></div>
      <Workflow WorkflowProps={workFlowData} />
      <div className="h-0.5 bg-border"></div>
      <CommentsSec />
      <div className="h-0.5 bg-border mt-20"></div>
      <div ref={letsCallRef} id="lets-call">
        <LetsCallSection />
      </div>
      <div className="h-0.5 bg-border"></div>
      {/* <section className="container m-auto max-w-7xl mt-20 px-6">
        <div className="flex flex-col md:flex-row justify-between ">
          <div className="prose dark:prose-invert lg:w-[60%] md:w-1/2">
            <h2>My Resume</h2>
            <p>work I've done</p>
          </div>
          <div className=" w-full lg::w-[40%] md:w-1/2 ">
            <SwiperThreeView videos={embedData} />
          </div>
        </div>
      </section> */}

      <BlogHighlite blogPosts={blogPostsData} />
    </div>
  );
}
