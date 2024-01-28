"use client";
import React, { FC, ReactElement } from "react";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Keyboard,
  FreeMode,
} from "swiper/modules";
import CarouselNextButton from "./CarouselNextButton";
import CarouselPrevButton from "./CarouselPrevButton";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/keyboard";
import "swiper/css/free-mode";

type CarouselProps = SwiperProps & {
  children: ReactElement[];
  activeSlideClasses?: string;
  inactiveSlideClasses?: string;
  slideClasses?: string;
  showArrows?: boolean;
};

const Carousel: FC<CarouselProps> = ({
  children,
  className = "",
  slideClasses,
  showArrows,
  activeSlideClasses,
  inactiveSlideClasses,
  ...props
}) => {
  return (
    <div className={`${className}`}>
      <Swiper
        {...props}
        modules={[Autoplay, Navigation, EffectCoverflow, Keyboard, FreeMode]}
      >
        {children.map((child, index) => {
          return (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`${
                    isActive
                      ? activeSlideClasses || ""
                      : inactiveSlideClasses || ""
                  } ${slideClasses}`}
                >
                  {child}
                </div>
              )}
            </SwiperSlide>
          );
        })}
        {showArrows && (
          <div className="flex justify-center text-6xl mt-12 gap-6 sm:gap-10">
            <CarouselPrevButton />
            <CarouselNextButton />
          </div>
        )}
      </Swiper>
    </div>
  );
};

export default Carousel;
