"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import { Small } from "@/components/ui/typography";

export default function Home() {
  return (
    <div className="min-h-screen container m-auto ">
      {/* Hero section  */}
      <div className="mx-auto flex flex-col justify-center items-center pt-10 sm:pt22 pb-12 ">

        <Button variant={"outline"} size={"sm"} className="mb-6 text-gray-500 bg-white rounded-4xl font-medium text-[12px] ">
          Web Development
        </Button>

        <h1 className="text-center text-4xl max-w-165 font-extrabold">
          Best Next.js Website 
        </h1>

        <div className="mt-6">By Amin</div>

        <div className="mt-2 flex flex-row">
          <time dateTime="2026">February 18, 2026 </time>
          <span>Updated: February 19, 2026</span>
          <span>15 min read</span>
        </div>

        <Button variant={"outline"} className="mt-6 rounded-4xl text-gray-500 font-medium text-[12px]">Human Written</Button>
      </div>
    </div>
  );
}
