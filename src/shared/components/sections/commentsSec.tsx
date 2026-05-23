import Image from 'next/image'
import React, { useState } from "react";
import { Button } from "@/src/shared/components/ui/button";
import cp1 from "@/assets/image/cp1.jpg";
import cp2 from "@/assets/image/cp2.jpg";
import cp3 from "@/assets/image/cp3.jpg";
import cp4 from "@/assets/image/hp3.jpg";
import cp5 from "@/assets/image/cp5.jpg";

export default function CommentsSec() {
  
 const [comments, setComments] = useState([
    {
      profile: cp5,
      name: "Hamed Tavakoli",
      job: "NYTimes Best sellers’ video editor",
      comment: "That was a perfect edit, well done amin",
      link: " ",
    },
    {
      profile: cp1,
      name: "Farzane Fazelian",
      job: "Let’s Grow through My Edits /Video editor helping brands & creators tell their story",
      comment: "Powerful edit👌",
      link: " ",
    },

    {
      profile: cp2,
      name: "Mostafa Miri",
      job: "Podcast/Talking Head Short Form Video Editor",
      comment: "very clean edit . well done Amin 👏 🔥",
      link: " ",
    },

    {
      profile: cp3,
      name: "Ali Toorani",
      job: "Video Editor — I edit videos for cool people!🚀Bringing videos to life through video editing🚀",
      comment: "Anxiously waiting for your new Videos!",
      link: " ",
    },

    {
      profile: cp4,
      name: "Mikaeel Jafari",
      job: "Mechanical Design Engineer | SolidWorks | CAD | Sheet Metal | DFM",
      comment: "u nailed it!!",
      link: " ",
    },


    // {
    //   profile: cp1,
    //   name: "",
    //   job: "",
    //   comment: "",
    //   link: " ",
    // },
  ]);

  const [ShowAll , setShowAll] = useState(false)

 const visibleComments = ShowAll ? comments : comments.slice(0, 2);

  
  
  return (
     <section className="relative container mx-auto max-w-7xl mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 px-6">
          <ul
            className="space-y-6 col-span-1
            flex flex-col h-full"
          >
            {visibleComments.map((item) => (
              <>
                <li className="flex flex-col p-6 gap-4 w-full bg-[hsl(210,40%,95%)] dark:bg-[#161f2c] rounded-2xl ">
                  <div className="flex flex-row justify-between gap-3 ">
                    <div className="rounded-full w-10 h-10  overflow-hidden">
                      <Image
                        src={item.profile}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="object-cover h-full"
                      ></Image>
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="text-base font-semibold">{item.name}</div>
                      <span className="text-sm/6 text-gray-600 line-clamp-1">
                        {item.job}
                      </span>
                    </div>
                  </div>
                  <div className="text-[15px] ">{item.comment}</div>
                </li>
              </>
            ))}
          </ul>
          <ul
            className="space-y-6 col-span-1
            flex flex-col h-full"
          >
            {visibleComments.map((item) => (
              <>
                <li className="flex flex-col p-6 gap-4 w-full bg-[hsl(210,40%,95%)] dark:bg-[#161f2c] rounded-2xl ">
                  <div className="flex flex-row justify-between gap-3 ">
                    <div className="rounded-full w-10 h-10  overflow-hidden">
                      <Image
                        src={item.profile}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="object-cover h-full"
                      ></Image>
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="text-base font-semibold">{item.name}</div>
                      <span className="text-sm/6 text-gray-600 line-clamp-1">
                        {item.job}
                      </span>
                    </div>
                  </div>
                  <div className="text-[15px] ">{item.comment}</div>
                </li>
              </>
            ))}
          </ul>
          <ul
            className="space-y-6 col-span-1
            flex flex-col h-full"
          >
            {visibleComments.map((item) => (
              <>
                <li className="flex flex-col p-6 gap-4 w-full bg-[hsl(210,40%,95%)] dark:bg-[#161f2c] rounded-2xl ">
                  <div className="flex flex-row justify-between gap-3 ">
                    <div className="rounded-full w-10 h-10  overflow-hidden">
                      <Image
                        src={item.profile}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="object-cover h-full"
                      ></Image>
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="text-base font-semibold">{item.name}</div>
                      <span className="text-sm/6 text-gray-600 line-clamp-1">
                        {item.job}
                      </span>
                    </div>
                  </div>
                  <div className="text-[15px] ">{item.comment}</div>
                </li>
              </>
            ))}
          </ul>
        </div>
        <div className="inset-x-0 bottom-0 flex justify-center bg-linear-to-t from-white pt-32 pb-8 pointer-events-none dark:from-[#030712] absolute">
          <Button onClick={()=>setShowAll(!ShowAll)} className="relative pointer-events-auto" > {ShowAll ? "show less" : "Show more ..."} </Button>
        </div>
      </section>

  )
}
