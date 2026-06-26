"use client";
import { ArrowBigDown } from "lucide-react";
import Link from "next/link";
import React from "react";

interface BlogPostsItems {
  category: string;
  title: string;
  desc: string;
  href: string;
}

interface propstype {
  blogPosts: BlogPostsItems[];
}

export default function BlogHighlite({ blogPosts }: propstype) {
  return (
    <section className="container mx-auto max-w-7xl px-[34px] py-25">
      <div className="flex items-center gap-4 text-[13px] font-medium text-(--text) mb-14">
        Blog
        <ArrowBigDown size={"15px"} />
      </div>
      <div className="mb-10">
        <h2 className="text-[13px] font-medium text-(--text) mb-2">About me</h2>
        <p className="text-[12px] text-[var(--muted2)] leading-[1.7] font-light max-w-sm">
          I'm Amin Bagheri. Most of my story — how I got into front-end
          development and what I've been through so far — you can read on this
          blog.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border-[0.5px] border-border">
        {blogPosts.map((item, index) => {
          const isLastOdd =
            blogPosts.length % 2 !== 0 && index === blogPosts.length - 1;

          return (
            <Link
              key={index}
              href={item.href}
              className={`bg-background px-7 py-8 flex flex-col gap-2.5 transition-colors duration-200 min-w-0
            ${isLastOdd ? "sm:col-span-2" : ""}
          `}
            >
              <div className="text-[11px] text-[#555] tracking-widest mb-4 uppercase">
                {item.category}
              </div>

              <div className="text-[18px] font-light italic text-(--text) mb-2.5">
                {item.title}
              </div>

              <div className="text-[13px] text-(--muted2) leading-[1.78] font-light">
                {item.desc}
              </div>

              <a className="mt-auto p-dur-tag w-fit px-2 py-1 flex flex-row gap-2 items-center">
                <span className="p-dur-tag-dot inline-block" />
                <span className="relative z-[3] text-[11px] tracking-[0.04em] text-[var(--text)] font-medium whitespace-nowrap">
                  Read more
                </span>
              </a>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
