"use client";

import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import LightDarkToggle from "./ui/lightDarkToggle";
import MenuSlider from "./ui/swiperMenu";
import MobileDrawer from "./ui/mobileDrawer";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <header className=" w-full  ">
      <div
        className="container m-auto flex-between h-14 px-6 py-8 max-w-7xl   "
    
      >
        <div
          className="bg-linear-to-r via-[#ee87cb] from-[#fff1be] to-[#b060ff] dark:bg-linear-to-r 
         dark:from-[#06b6d4] dark:via-[#3b82f6] dark:to-[#df10ff]  rounded-2xl h-44 w-80 absolute -top-20 -right-5 z-[-1] blur-[80px] dark:blur-[110px] "
        ></div>

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
          {/* <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">My Account</Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>

                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem className="text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild className="pb-1">
            <Link href={"/login"}>
              <UserIcon /> login
            </Link>
          </Button> */}
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
  );
}
