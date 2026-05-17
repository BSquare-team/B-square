"use client";

import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import LightDarkToggle from "./ui/lightDarkToggle";
import MobileDrawer from "./ui/mobileDrawer";
import { Headroom } from "nextjs-headroom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 110) {
        // آستانه 20 پیکسل
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Headroom>
      <header
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md  border-gray-200 dark:border-gray-800 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container m-auto flex-between h-14 px-6 py-8 max-w-7xl   ">
          <div className="flex-start">
            <Link href="/" className="flex-start">
              <Image
                src="/images/logo.svg"
                alt={`${APP_NAME} logo`}
                height={25}
                width={25}
                property="true"
              />
              <span className=" font-semibold text-2xl ml-3">{APP_NAME}</span>
            </Link>
          </div>

          <div className="hidden lg:flex gap-4 text-lg">
            <a href="/blog" className="font-medium text-gray-500">
              Blog
            </a>
            <a href="#" className="font-medium text-gray-500">
              Guides
            </a>
            <a href="#" className="font-medium text-gray-500">
              Alternatives
            </a>
          </div>
          <div dir="rtl" className="min-w-34.5 ">
            <div className=" lg:hidden ">
              <MobileDrawer />
            </div>

            <div className=" flex-row hidden lg:flex">
              <Button variant={"ghost"} className="hidden lg:flex">
                EN
              </Button>
              <Button variant={"ghost"}>
                <LightDarkToggle className="mt-1 " />
              </Button>
            </div>
          </div>
        </div>
      </header>
    </Headroom>
  );
}
