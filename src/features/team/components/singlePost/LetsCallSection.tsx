"use client";
import Link from "next/link";
import React from "react";
import MyApp from "./Letscal";

export default function LetsCallSection() {
  return (
    <>
      <section className="container h-screen mx-auto py-20 px-8.5 flex flex-col justify-center items-center ">
        <div className="mb-[56px] w-full flex items-center justify-center flex-col">
          <h2 className="text-[clamp(28px,4vw,52px)] font-light italic tracking-[-0.02em] mb-3">
            Let's <span className="font-semibold not-italic">talk</span>
          </h2>
          <p className="text-sm text-muted-foreground font-light">
            Prefer async?
            <Link
              className="dark:text-white text-black underline underline-offset-[3px] decoration-[rgba(250,248,248,0.3)]"
              href={"#"}
            >
              Telegram
            </Link>{" "}
            <Link
              className="dark:text-white text-black underline underline-offset-[3px] decoration-[rgba(250,248,248,0.3)]"
              href={"#"}
            >
              Email
            </Link>{" "}
            <Link
              className="dark:text-white text-black underline underline-offset-[3px] decoration-[rgba(250,248,248,0.3)]"
              href={"#"}
            >
              Linkedin
            </Link>
          </p>
        </div>

        <MyApp />
      </section>
    </>
  );
}
