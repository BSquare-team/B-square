// src/app/(main)/blog/[slug]/_components/CardSliderBlock.tsx

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CardSlide {
  src: string;
  title: string;
  description?: string;
  link?: string;
}

interface CardSliderBlockProps {
  cards: CardSlide[];
}

export default function CardSliderBlock({ cards }: CardSliderBlockProps) {
  return (
    <div className="my-8">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        className="rounded-xl"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-3xl overflow-hidden hover:shadow-2xl shadow-lg dark:bg-[#0a0a0a94] dark:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.03)] dark:hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.08)] transition-all duration-300 flex flex-col h-full border border-gray-200 dark:border-zinc-800">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.src}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                    {card.title}
                  </h3>
                  {card.description && (
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                      {card.description}
                    </p>
                  )}
                </div>

                {card.link && (
                  <Link
                    href={card.link}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    Read more
                    <span aria-hidden="true">→</span>
                  </Link>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
