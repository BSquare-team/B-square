"use client";
import React, { useRef } from "react";
import { Button } from "../shared/components/ui/button";
import Link from "next/link";

import { motion, useInView } from "motion/react";
const FadeUpScale = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

// این کامپوننت، تاخیر زنجیره‌ای (Stagger) را مدیریت می‌کند
const StaggerWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

const RevealLeftBlurUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: -50,           // ← از چپ شروع بشه
        filter: "blur(10px)" 
      }}
      animate={{ 
        opacity: 1, 
        x: 0, 
        filter: "blur(0px)" 
      }}
      transition={{ 
        duration: 0.7, 
        ease: [0.25, 0.1, 0.25, 1], 
        delay 
      }}
    >
      {children}
    </motion.div>
  );
};


export default function HomePage() {
  return (
    <div className="home-gradient">
      <section className="relative mx-auto lg:w-[1020px] px-6 flex items-center h-screen justify-center md:justify-start ">
        <div className="flex flex-col w-full lg:w-[41%] sm::w-[64%] text-center md:text-start items-center md:items-start prose dark:prose-invert">
          <h1>ELEVATING BRANDS. Grow like a Fortune 500.</h1>
          <p>
            We help designers and developers ship faster, solve problems
            cleanly, and build brands that compete with the best. 
          </p>
          <Link href={"/team"}>
            <Button className="w-44.25 rounded-full bg-[#2d53fe] hover:bg-[#0533ff] border-0 shadow-2xl shadow-[#2d53fe]">
              View our profiles
            </Button>
          </Link>


        
        </div>
      </section>
    </div>
  );
}
