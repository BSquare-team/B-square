"use client";

import { APP_NAME } from "@/src/shared/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/src/shared/components/ui/button";
import { useEffect, useState } from "react";
import LightDarkToggle from "../ui/lightDarkToggle";
import MobileDrawer from "../ui/mobileDrawer";
import { Headroom } from "nextjs-headroom";
import LoginPage from "../ui/loginDialog";

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
              <svg
                id="Layer_2"
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 112.11 133.33"
                className="w-6 h-6 text-black dark:text-white"
              >
                <g id="Layer_2-2" data-name="Layer 2">
                  <g>
                    <path fill="currentColor" d="M16.15,100.15c-5.33-5.19-10.7-10.11-16.04-15.3C-.19,56.56.3,28.3,0,0c5.48,3.11,10.96,7.11,16.44,10.22.15,30.37-.44,59.56-.3,89.93Z" />
                    <path fill="currentColor" d="M22.37,38.5l-.11-15.56,34.15.09s17.93,1.81,26.81,16.26,5.26,28.44,5.26,28.44c0,0-1.93,7.56-7.26,13.78s-36.52,36.89-36.52,36.89l33.41.07-.22-19.52,34.22,34.3-103.96.07,44.07-44.74s-1.26-10.3-12.89-9.85-16.96,8.15-16.96,8.15l.07-16.96s7.33-4.81,19.19-5.93,21.04,8.74,22.96,11.33,8.37-10.44,8.15-16.22-2.67-17.41-16-20.74c0,0-34.37.19-34.37.13Z" />
                  </g>
                </g>
              </svg>
              <span className=" font-semibold text-2xl ml-3">{APP_NAME}</span>
            </Link>
          </div>

          <div className="hidden lg:flex gap-4 text-lg">
            <Link href="/blog" className="font-medium text-gray-500">
              Blog
            </Link>

            <Link href="/changelog" className="font-medium text-gray-500">
              changelog
            </Link>
          </div>
          <div dir="rtl" className="min-w-34.5 ">
            <div className=" lg:hidden ">
              <MobileDrawer />
            </div>

            <div className=" flex-row hidden lg:flex">
              <div className="hidden lg:flex">
                <LoginPage />
              </div>
              <Button variant={"ghost"} className="hidden lg:flex">
                EN
              </Button>
              <Button variant={"ghost"}>
                <LightDarkToggle className=" " />
              </Button>
            </div>
          </div>
        </div>
      </header>
    </Headroom>
  );
}
