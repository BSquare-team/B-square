// components/ui/FeaturedTemplatesSlider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// استایل‌های مورد نیاز Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EmbedData, embedData } from "@/data/embedData";
import { WistiaPlayer } from "@/src/features/team/components/singlePost/WistiaPlayer";


interface SwiperThreeViewProps {
  videos: EmbedData[];  // ← آرایه، نه string
}

export default function SwiperThreeView({ videos }: SwiperThreeViewProps) {
  return (
    <div className="relative w-full my-12">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        spaceBetween={5}
        centeredSlides={true}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className=" rounded-xl  "
      >
        {videos.map((template , index) => (
          <SwiperSlide key={index} >
           <WistiaPlayer mediaId={template.embedId}  />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}