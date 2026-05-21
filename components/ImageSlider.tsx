// components/ImageSlider.tsx

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Slide } from "@/lib/types";

interface ImageSliderProps {
  slides: Slide[];
}

export default function ImageSlider({ slides }: ImageSliderProps) {
  return (
    <div className="my-8 rounded-xl overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Keyboard]}
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        spaceBetween={0}
        slidesPerView={1}
        className="rounded-xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={slide.src}
                alt={slide.caption || `Slide ${index + 1}`}
                className="w-full object-cover max-h-[500px]"
              />
              {slide.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                  <p className="text-white text-sm">{slide.caption}</p>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
