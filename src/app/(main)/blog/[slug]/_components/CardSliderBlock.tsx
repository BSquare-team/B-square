// src/app/(main)/blog/[slug]/_components/CardSliderBlock.tsx

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCards from "@/src/shared/components/ui/swiper";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";

interface CardSlide {
  src: string;
  title: string;
  description?: string;
  link?: string;
}

interface CardSliderBlockProps {
  cards: CardSlide[]; 
}

export default function CardSliderBlock({ cards }: { cards: CardSlide[] }) {
  return (
    <div className="lg:w-full mt-1.5 mb-3">
      {/* {cards.map((e) => (
        <p>{e.title}</p>
      ))} */}

      <div className="flex justify-center items-center ">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-60 h-80"
        >
          {cards.map((slide, index) => (
            <SwiperSlide
              key={index}
              // style={{ backgroundColor: slide.color }}
              className="flex items-center justify-center rounded-2xl text-white text-2xl font-bold"
            >
              <Image src={slide.src} alt={slide.title} fill={true} className="object-cover w-full h-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
