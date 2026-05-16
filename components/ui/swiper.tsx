"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

// استایل‌های مورد نیاز Swiper
import "swiper/css";
import "swiper/css/effect-cards";

export default function SwiperCards() {
  const slides = [
    { id: 1, text: "Slide 1", color: "rgb(206, 17, 17)" },
    { id: 2, text: "Slide 2", color: "rgb(0, 140, 255)" },
    { id: 3, text: "Slide 3", color: "rgb(10, 184, 111)" },
    { id: 4, text: "Slide 4", color: "rgb(211, 122, 7)" },
    { id: 5, text: "Slide 5", color: "rgb(118, 163, 12)" },
    { id: 6, text: "Slide 6", color: "rgb(180, 10, 47)" },
    { id: 7, text: "Slide 7", color: "rgb(35, 99, 19)" },
    { id: 8, text: "Slide 8", color: "rgb(0, 68, 255)" },
    { id: 9, text: "Slide 9", color: "rgb(218, 12, 218)" },
    { id: 10, text: "Slide 10", color: "rgb(54, 94, 77)" },
  ];

  return (
    <div className="flex justify-center items-center ">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-60 h-80"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            style={{ backgroundColor: slide.color }}
            className="flex items-center justify-center rounded-2xl text-white text-2xl font-bold"
          >
            {slide.text}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
