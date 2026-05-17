"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LightDarkToggle from "./lightDarkToggle";

export default function MobileDrawer() {
  return (
    <Dialog.Root>
      {/* دکمه همبرگری */}
      <Dialog.Trigger asChild>
        <button className="p-2 -mr-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
          <Menu size={24} />
        </button>
      </Dialog.Trigger>

      {/* خود دراور (پنل) */}
      <Dialog.Portal>
        {/* پس‌زمینه */}
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        {/* محتوای منو */}
        <Dialog.Content
          className="fixed top-0 right-0 z-50 h-full w-4/5 max-w-xs bg-white dark:bg-gray-900 shadow-xl 
                     data-[state=open]:animate-in data-[state=closed]:animate-out 
                     data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right 
                     duration-300"
        >
          {/* هدر منو */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
            <Dialog.Title className="text-lg font-semibold">Menu</Dialog.Title>
            <Dialog.Close asChild>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                <X size={24} />
              </button>
            </Dialog.Close>
          </div>

          {/* لینک‌ها */}
          <nav className="flex flex-col p-4 space-y-4">
            <Dialog.Close asChild>
              <Link
                href="/"
                className="text-lg font-medium hover:text-blue-600"
              >
                Home
              </Link>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Link
                href="/"
                className="text-lg font-medium hover:text-blue-600"
              >
                Alternatives
              </Link>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Link
                href="/blog"
                className="text-lg font-medium hover:text-blue-600"
              >
                Blog
              </Link>
            </Dialog.Close>

            {/* بقیه لینک‌ها */}
          </nav>
          <nav className="flex flex-row justify-center p-4">
            <Button variant={"ghost"} >
              <LightDarkToggle />
            </Button>

            <Button variant={"ghost"}>En</Button>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
