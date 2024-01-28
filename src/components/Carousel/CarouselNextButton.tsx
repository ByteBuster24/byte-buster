"use client";
import { useSwiper } from "swiper/react";
import { SlArrowRight } from "react-icons/sl";

const CarouselNextButton = () => {
  const swiper = useSwiper();
  return (
    <div
      onClick={() => swiper.slideNext()}
      className="cursor-pointer rounded-full bg-[#353535] p-2 w-fit h-fit group hover:bg-white"
    >
      <SlArrowRight
        onClick={() => swiper.slideNext()}
        className="size-9 fill-white translate-x-0.5 group-hover:fill-[#353535]"
      />
    </div>
  );
};

export default CarouselNextButton;
