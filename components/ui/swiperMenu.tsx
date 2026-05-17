// components/ui/SwiperMenu.tsx
"use client";

import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";

export default function SwiperMenu() {
  const swiperRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    const menuButton = menuButtonRef.current;
    const openMenu = () => {
      if (swiperInstance) swiperInstance.slidePrev();
    };

    const swiperInstance = new Swiper(swiperRef.current, {
      slidesPerView: "auto",
      initialSlide: 1,
      resistanceRatio: 0,
      slideToClickedSlide: true,
      on: {
        slideChangeTransitionStart: function () {
          if (this.activeIndex === 0) {
            menuButton?.classList.add("cross");
            menuButton?.removeEventListener("click", openMenu, true);
          } else {
            menuButton?.classList.remove("cross");
          }
        },
        slideChangeTransitionEnd: function () {
          if (this.activeIndex === 1) {
            menuButton?.addEventListener("click", openMenu, true);
          }
        },
      },
    });

    return () => {
      swiperInstance.destroy();
    };
  }, []);

  return (
    <div className="w-full h-full relative">
      <div ref={swiperRef} className="swiper w-full h-full">
        <div className="swiper-wrapper">
          <div className="swiper-slide menu min-w-[100px] w-[70%] max-w-[320px] bg-blue-500 text-white flex items-center justify-center">
            Menu slide
          </div>
          <div className="swiper-slide content w-full bg-white flex items-center justify-center relative">
            <div
              ref={menuButtonRef}
              className="menu-button absolute top-0 left-0 p-4 cursor-pointer transition-all duration-300 bg-blue-500 z-10"
            >
              <div className="bar w-[50px] h-1 bg-white rounded-full my-2 transition-all duration-300"></div>
              <div className="bar w-[50px] h-1 bg-white rounded-full my-2 transition-all duration-300"></div>
              <div className="bar w-[50px] h-1 bg-white rounded-full my-2 transition-all duration-300"></div>
            </div>
            Content slide
          </div>
        </div>
      </div>

      <style jsx>{`
        .menu-button:hover .bar:nth-of-type(1) {
          transform: translateY(1.5px) rotate(-4.5deg);
        }
        .menu-button:hover .bar:nth-of-type(2) {
          opacity: 0.9;
        }
        .menu-button:hover .bar:nth-of-type(3) {
          transform: translateY(-1.5px) rotate(4.5deg);
        }
        .cross .bar:nth-of-type(1) {
          transform: translateY(15px) rotate(-45deg);
        }
        .cross .bar:nth-of-type(2) {
          opacity: 0;
        }
        .cross .bar:nth-of-type(3) {
          transform: translateY(-15px) rotate(45deg);
        }
        .cross:hover .bar:nth-of-type(1) {
          transform: translateY(13.5px) rotate(-40.5deg);
        }
        .cross:hover .bar:nth-of-type(2) {
          opacity: 0.1;
        }
        .cross:hover .bar:nth-of-type(3) {
          transform: translateY(-13.5px) rotate(40.5deg);
        }
      `}</style>
    </div>
  );
}