"use client";
import { Play } from "lucide-react";
import React, { useState } from "react";

export default function FeaturedProjects() {
 
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="container m-auto max-w-7xl mt-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border-[0.5px] border-border">
          <div className="bg-background px-6 pt-6 pb-7 flex flex-col gap-2.5 transition-colors duration-200 min-w-0">
            <div
              className="w-full aspect-video bg-bg3 rounded-[2px] overflow-hidden mb-1 border-[0.5px] border-border relative cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <video
                autoPlay
                muted
                loop
                playsInline // این برای موبایل حیاتیه
                className="absolute inset-0 w-full h-full object-cover block"
              >
                <source src="/videos/D14-1.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>

              <div className="absolute inset-0 flex items-center justify-center bg-black/15 transition-colors duration-250 z-[2]">
                <div className="w-13 h-13 rounded-full bg-white/15 backdrop-blur-sm border border-white/40 flex items-center justify-center cursor-pointer">
                  <Play size="18px" />
                </div>
              </div>
            </div>

            {isOpen && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
                onClick={() => setIsOpen(false)}
              >
                <div
                  className="relative w-[90vw] max-w-4xl aspect-video"
                  onClick={(e) => e.stopPropagation()}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/uQBPZqRhAr4?si=-R-agwfGJLg624s6"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full rounded-xl"
                  />
                </div>
              </div>
            )}

            <div className="text-[13px] font-medium text-(--text) leading-[1.4]">
              Video for Secureframe: Compliance Automation Platform
            </div>
            <div className="text-[12px] text-[var(--muted2)] leading-[1.7] font-light">
              A crisp 40s explainer that turns a complex compliance product into
              something prospects actually want to watch — and act on.
            </div>
            <a
              className="p-dur-tag w-fit px-2 py-1 flex flex-row gap-2 items-center"
              href="#"
            >
              <span
                className="p-dur-tag-dot inline-block"
                style={{ "--text": "#ffffff" } as React.CSSProperties}
              />
              <span className="relative z-[3] text-[11px] tracking-[0.04em] text-[var(--text)] font-medium transition-colors duration-[250ms] whitespace-nowrap">
                View case study
              </span>
            </a>
          </div>

          <div className="bg-background px-6 pt-6 pb-7 flex flex-col gap-2.5 transition-colors duration-200 min-w-0">
            <div
              className="w-full aspect-video bg-bg3 rounded-[2px] overflow-hidden mb-1 border-[0.5px] border-border relative cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <video
                autoPlay
                muted
                loop
                playsInline // این برای موبایل حیاتیه
                className="absolute inset-0 w-full h-full object-cover block"
              >
                <source src="/videos/ui-style.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>

              <div className="absolute inset-0 flex items-center justify-center bg-black/15 transition-colors duration-250 z-[2]">
                <div className="w-13 h-13 rounded-full bg-white/15 backdrop-blur-sm border border-white/40 flex items-center justify-center cursor-pointer">
                  <Play size="18px" />
                </div>
              </div>
            </div>

            {isOpen && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
                onClick={() => setIsOpen(false)}
              >
                <div
                  className="relative w-[90vw] max-w-4xl aspect-video"
                  onClick={(e) => e.stopPropagation()}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/uQBPZqRhAr4?si=-R-agwfGJLg624s6"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full rounded-xl"
                  />
                </div>
              </div>
            )}

            <div className="text-[13px] font-medium text-(--text) leading-[1.4]">
              Video for Secureframe: Compliance Automation Platform
            </div>
            <div className="text-[12px] text-[var(--muted2)] leading-[1.7] font-light">
              A crisp 40s explainer that turns a complex compliance product into
              something prospects actually want to watch — and act on.
            </div>
            <a
              className="p-dur-tag w-fit px-2 py-1 flex flex-row gap-2 items-center"
              href="#"
            >
              <span
                className="p-dur-tag-dot inline-block"
                style={{ "--text": "#ffffff" } as React.CSSProperties}
              />
              <span className="relative z-[3] text-[11px] tracking-[0.04em] text-[var(--text)] font-medium transition-colors duration-[250ms] whitespace-nowrap">
                View case study
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
