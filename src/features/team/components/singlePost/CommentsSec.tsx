"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import { Button } from "@/src/shared/components/ui/button";
import cp1 from "@/src/assets/image/cp1.jpg";
import cp2 from "@/src/assets/image/cp2.jpg";
import cp3 from "@/src/assets/image/cp3.jpg";
import cp4 from "@/src/assets/image/hp3.jpg";
import cp5 from "@/src/assets/image/cp5.jpg";

export default function CommentsSec() {
  const sectionRef = useRef<HTMLElement>(null);

  const [comments] = useState([
    {
      profile: cp5,
      name: "Hamed Tavakoli",
      job: "NYTimes Best sellers' video editor",
      comment: "That was a perfect edit, well done amin",
    },
    {
      profile: cp1,
      name: "Farzane Fazelian",
      job: "Let's Grow through My Edits /Video editor helping brands & creators tell their story",
      comment: "Powerful edit👌",
    },
    {
      profile: cp2,
      name: "Mostafa Miri",
      job: "Podcast/Talking Head Short Form Video Editor",
      comment: "very clean edit . well done Amin 👏 🔥",
    },
    {
      profile: cp3,
      name: "Ali Toorani",
      job: "Video Editor — I edit videos for cool people!🚀Bringing videos to life through video editing🚀",
      comment: "Anxiously waiting for your new Videos!",
    },
    {
      profile: cp4,
      name: "Mikaeel Jafari",
      job: "Mechanical Design Engineer | SolidWorks | CAD | Sheet Metal | DFM",
      comment: "u nailed it!!",
    },
  ]);

  const [showAll, setShowAll] = useState(false);
  const displayedComments = showAll ? comments : comments.slice(0, 3);

  const handleToggle = () => {
    if (showAll) {
      // وقتی جمع میکنیم، scroll به بالای section برگرده
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setShowAll(!showAll);
  };

  return (
    <section
      ref={sectionRef}
      className="relative container mx-auto max-w-7xl px-[34px] pt-25"
    >
      <div className="flex items-center gap-4 text-[13px] font-medium text-(--text) mb-14">
        Production Workflow
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border-[0.5px] border-border">
        {displayedComments.map((item, idx) => (
          <div
            key={idx} // ✅ key اضافه شد
            className={`bg-background px-7 py-8 flex flex-col gap-2.5 transition-colors duration-200 min-w-0
              ${
                // ✅ آخرین آیتم فرد، full-width میشه
                idx === displayedComments.length - 1 &&
                displayedComments.length % 2 !== 0
                  ? "sm:col-span-2"
                  : ""
              }`}
          >
            <div className="flex flex-row gap-3">
              <div className="rounded-full w-10 h-10 overflow-hidden shrink-0 bg-amber-800">
                <Image
                  src={item.profile}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="object-cover h-full w-full"
                />
              </div>
              <div>
                <div className="text-[18px] font-light text-(--text)">
                  {item.name}
                </div>
                <div className="text-[11px] text-[#555] tracking-widest mb-4 transition-colors duration-250">
                  {item.job}
                </div>
              </div>
            </div>

            <div className="text-[13px] text-(--muted2) leading-[1.78] font-light transition-colors duration-250">
              {item.comment}
            </div>
          </div>
        ))}
      </div>

      <button
        className={` mx-auto p-dur-tag w-fit px-2 py-1 flex flex-row gap-2 items-center`}
      >
        <span
          className="p-dur-tag-dot inline-block"
          style={{ "--text": "#ffffff" } as React.CSSProperties}
        />
        <span
          onClick={handleToggle}
          className="relative z-[3] text-[11px] tracking-[0.04em] text-[var(--text)] font-medium transition-colors duration-[250ms] whitespace-nowrap"
        >
          {showAll ? "Show less" : "Show more ..."}
        </span>
      </button>
      <div className="inset-x-0 bottom-5 bg-linear-to-t from-background pt-32 pb-8 pointer-events-none dark:from-[#030712] absolute"></div>
    </section>
  );
}
