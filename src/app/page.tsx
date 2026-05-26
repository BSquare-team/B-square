import React from "react";
import { Button } from "../shared/components/ui/button";
import Link from "next/link";
export default function HomePage() {
  return (
    <div className="home-gradient">
      <section className="relative mx-auto lg:w-[1020px] px-6 flex items-center h-screen justify-center md:justify-start ">
        <div className="flex flex-col w-full lg:w-[41%] sm::w-[64%] text-center md:text-start items-center md:items-start prose dark:prose-invert">
          <h1>Powerful tools for web professionals</h1>
          <p>
            We help designers and developers finish their projects on time and
            ship faster.
          </p>
          <Link href={"/portfolio/amin"}>
            <Button
              className="w-44.25 rounded-full bg-[#2d53fe] hover:bg-[#0533ff] border-0 shadow-2xl shadow-[#2d53fe]"
            >
              View my portfolio
            </Button>
          </Link>


        
        </div>
      </section>
    </div>
  );
}
