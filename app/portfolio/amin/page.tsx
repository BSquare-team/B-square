import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import pic1 from "@/assets/image/avatar-1.webp";
import pic2 from "@/assets/image/avatar-2.webp";
import pic3 from "@/assets/image/avatar-3.webp";
import pic4 from "@/assets/image/avatar-4.webp";
import pic5 from "@/assets/image/avatar-5.webp";
import picMe from "@/assets/image/Clipped_image_20260519_193224.png";
import picMe2 from "@/assets/image/mePic.jpg";
import picMe3 from "@/assets/image/mePic3.png";

import { LucideStar, Star } from "lucide-react";

export default function page() {
  return (
    <div className="">
      {/* hero section  */}
      <section className="shadow-2xl h-fit">
        <div className="container mx-auto flex flex-row justify-center mt-20  ">
          {/* <div className="dot-grid absolute inset-0 pointer-events-none"></div> */}
          <div className="flex flex-col justify-center max-w-[600px] gap-4">
            <div className="flex ">
              <Button
                variant={"ghost"}
                size={"sm"}
                className="mb-6 text-gray-500 bg-white rounded-4xl font-medium text-[12px] "
              >
                SOFTWARE ALTERNATIVES DIRECTORY
              </Button>
            </div>

            <h1 className=" font-bold text-4xl/[48px] ">
              {" "}
              ELEVATING BRANDS <br /> through <br />{" "}
              <span className="text-[#006666] ">ENGAGING VIDEOS </span>{" "}
            </h1>

            <p className=" w">
              Over 27 alternatives across 7 categories. Free, open source, and
              paid. Compare and switch with confidence.
            </p>

            <div className="flex items-center flex-row justify-center">
              <div className="flex flex-row">
                <div className="z-5 size-8 border-white rounded-full border-2  shadow-[4px_6px_7px_0px_rgba(0,0,0,0.5)] overflow-hidden">
                  <Image
                    width={32}
                    height={32}
                    src={pic1}
                    alt=""
                    className="size-8 object-cover  "
                  />
                </div>
                <div className="z-4 size-8 relative right-2 border-white rounded-full border-2  shadow-[4px_6px_7px_0px_rgba(0,0,0,0.5)] overflow-hidden">
                  <Image
                    width={32}
                    height={32}
                    src={pic2}
                    alt=""
                    className="size-8 object-cover  "
                  />
                </div>
                <div className="z-3 size-8 relative right-4 border-white rounded-full border-2  shadow-[4px_6px_7px_0px_rgba(0,0,0,0.5)] overflow-hidden">
                  <Image
                    width={32}
                    height={32}
                    src={pic3}
                    alt=""
                    className="size-8 object-cover  "
                  />
                </div>
                <div className="z-2 size-8 relative right-6 border-white rounded-full border-2  shadow-[4px_6px_7px_0px_rgba(0,0,0,0.5)] overflow-hidden">
                  <Image
                    width={32}
                    height={32}
                    src={pic4}
                    alt=""
                    className="size-8 object-cover  "
                  />
                </div>
                <div className="z-1 size-8 relative right-8 border-white rounded-full border-2  shadow-[4px_6px_7px_0px_rgba(0,0,0,0.5)] overflow-hidden">
                  <Image
                    width={32}
                    height={32}
                    src={pic5}
                    alt=""
                    className="size-8 object-cover  "
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-1">
                  <LucideStar stroke="#F39D0B" fill="#F39D0B" size={20} />
                  <LucideStar stroke="#F39D0B" fill="#F39D0B" size={20} />
                  <LucideStar stroke="#F39D0B" fill="#F39D0B" size={20} />
                  <LucideStar stroke="#F39D0B" fill="#F39D0B" size={20} />
                  <LucideStar stroke="#F39D0B" fill="#F39D0B" size={20} />
                </div>
                <span className="text-[#6b7280] ">
                  Trusted by{" "}
                  <span className="font-semibold text-black dark:text-[#006666] ">
                    2,000+
                  </span>{" "}
                  developers
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <div className=" h-[350px]  overflow-hidden">
              <Image
                src={picMe3}
                alt=""
                width={300}
                height={300}
                quality={100} // بیشترین کیفیت (پیش‌فرض 75 هست)
                className="object-cover object-bottom"
              />
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
}
