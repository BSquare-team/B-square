"use client";
import { ArrowBigDown, Play } from "lucide-react";
import React, { useState } from "react";

export interface ProjectsProps {
  topText: string;
  bottomText: string;
  YoutubeEmbed: string;
  thumbNail: string;
}

interface FeaturedProjectsProps {
  data: ProjectsProps[];
}

function getColSpan(total: number, index: number) {
  const isLastIndex = index === total - 1;
  const isOddTotal = total % 2 === 1;

  const classes: string[] = [];
  let isWideCard = false; // فقط آیتمی که واقعاً عریض می‌شه (col-span-2/3) لازم داره flex-row بگیره

  // ===== md (۲ ستونه) =====
  // اگه کل آیتم‌ها فرد بود، آخرین آیتم (که تک‌وتنها تو ردیف آخر می‌مونه)
  // تمام عرض (md:col-span-2) رو می‌گیره تا گپ خالی نسازه.
  // اگه زوج بود، نیازی به override نیست (پیش‌فرض col-span-1 درسته).
  if (isOddTotal && isLastIndex) {
    classes.push("md:col-span-2");
  }

  // ===== lg (۳ ستونه) =====
  const remainder = total % 3;

  if (remainder === 1 && isLastIndex) {
    // یکی بیشتر از مضرب ۳ → آخرین آیتم تمام عرض (col-span-3) و flex-row
    classes.push("lg:col-span-3");
    isWideCard = true;
  } else if (remainder === 2 && isLastIndex) {
    // دو تا بیشتر از مضرب ۳ → فقط آخرین آیتم col-span-2 و flex-row می‌گیره
    // ماقبل‌آخر دست‌نخورده و معمولی (col-span-1 + flex-col) می‌مونه
    classes.push("lg:col-span-2");
    isWideCard = true;
  } else if (remainder === 0 && isLastIndex && isOddTotal) {
    // تو lg همه‌چی دقیقاً پر می‌شه (نیاز به span خاصی نیست)، ولی چون از md
    // کلاس col-span-2 به ارث رسیده، باید این‌جا صراحتاً ریست بشه
    classes.push("lg:col-span-1");
  }

  return { colSpan: classes.join(" "), isLastRow: isWideCard };
}

export default function FeaturedProjects({ data }: FeaturedProjectsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="container mx-auto max-w-7xl px-[34px] py-[100px]">
      <div className="flex items-center gap-4 text-[13px] font-medium text-(--text) mb-14">
        Featured projects
        <ArrowBigDown size={15} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border-[0.5px] border-border">
        {data.map((project, index) => {
          const { colSpan, isLastRow } = getColSpan(data.length, index);
          const hasEmbed = !!project.YoutubeEmbed;

          return (
            <div
              key={index}
              className={`bg-background px-6 pt-6 pb-7 flex flex-col gap-2.5 min-w-0 
                ${colSpan}
                ${isLastRow ? "lg:flex lg:flex-row items-start lg:gap-4 lg:items-center" : "flex flex-col"}`}
            >
              {/* ===== ویدیو تامبیل ===== */}
              <div
                className={` w-full aspect-video bg-bg3 rounded-[2px] overflow-hidden mb-1 border-[0.5px] border-border relative 
                  ${hasEmbed ? "cursor-pointer" : "cursor-default"}
                       ${isLastRow ? "" : "" }
                `}
                onClick={() => hasEmbed && setOpenIndex(index)}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover block"
                >
                  <source
                    src={`/videos/${project.thumbNail}`}
                    type="video/webm"
                  />
                  Your browser does not support the video tag.
                </video>

                {hasEmbed && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/15 hover:bg-black/30 transition-colors duration-250 z-[2]">
                    <div className="w-13 h-13 rounded-full bg-white/15 backdrop-blur-sm border border-white/40 flex items-center justify-center cursor-pointer transition-transform duration-250 hover:scale-110">
                      <Play size={18} className="ml-0.5" />
                    </div>
                  </div>
                )}
              </div>

              {/* ===== مودال فقط برای کارت کلیک شده ===== */}
              {openIndex === index && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                  onClick={() => setOpenIndex(null)}
                >
                  <div
                    className="relative w-[90vw] max-w-4xl aspect-video"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setOpenIndex(null)}
                      className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition z-10"
                    >
                      ✕
                    </button>
                    <iframe
                      src={project.YoutubeEmbed}
                      height="500"
                      width="100%"
                      frameBorder="0"
                      allowFullScreen
                      title="Embedded post"
                    ></iframe>
                  </div>
                </div>
              )}

              {/* ===== محتوای متن ===== */}
              <div
                className={`gap-2.5 ${isLastRow ? "flex flex-col lg:gap-4 lg:my-auto " : "flex flex-col gap-2.5"}`}
              >
                <div className="text-[13px] font-medium text-(--text) leading-[1.4]">
                  {project.topText}
                </div>
                <div className="text-[12px] text-[var(--muted2)] leading-[1.7] font-light line-clamp-4">
                  {project.bottomText}
                </div>

                {/* لینک View case study — برای ردیف آخر */}
                <a
                  className={`mt-auto p-dur-tag w-fit px-2 py-1 flex flex-row gap-2 items-center
                    ${isLastRow ? "" : "hidden"}`}
                  href="#"
                >
                  <span
                    className="p-dur-tag-dot inline-block"
                    style={{ "--text": "#ffffff" } as React.CSSProperties}
                  />
                  <span className="relative z-[3] text-[11px] tracking-[0.04em] text-[var(--text)] font-medium transition-colors duration-250 whitespace-nowrap">
                    View case study
                  </span>
                </a>
              </div>

              {/* لینک View case study — برای بقیه ردیف‌ها */}
              <a
                className={`mt-auto p-dur-tag w-fit px-2 py-1 flex flex-row gap-2 items-center
                  ${isLastRow ? "hidden" : ""}`}
                href="#"
              >
                <span
                  className="p-dur-tag-dot inline-block"
                  style={{ "--text": "#ffffff" } as React.CSSProperties}
                />
                <span className="relative z-[3] text-[11px] tracking-[0.04em] text-[var(--text)] font-medium transition-colors duration-250 whitespace-nowrap">
                  View case study
                </span>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
