// components/ui/FeaturedTemplatesSlider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// استایل‌های مورد نیاز Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const templates = [
  { id: 1, name: "Tailwind Next.js Blog", color: "bg-amber-400" },
  { id: 2, name: "Astro Paper", color: "bg-sky-400" },
  { id: 3, name: "Chronark Portfolio", color: "bg-green-400" },
  { id: 4, name: "Shadcn Blog", color: "bg-purple-400" },
  { id: 5, name: "Logspot", color: "bg-pink-400" },
  { id: 6, name: "Digital Garden", color: "bg-indigo-400" },
];

export default function SwiperThreeView() {
  return (
    <div className="relative w-full my-12">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={2}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full rounded-xl py-12"
      >
        {templates.map((template) => (
          <SwiperSlide key={template.id}>
            <div
              className={`${template.color} h-64 rounded-xl flex flex-col items-center justify-center text-white text-2xl font-bold shadow-lg transition-transform hover:scale-105`}
            >
              <span>{template.name}</span>
              <span className="text-sm mt-2 opacity-80">Template {template.id}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}