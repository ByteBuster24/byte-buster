"use client";
import { useSwiper } from "swiper/react";
import { SlArrowLeft } from "react-icons/sl";

const CarouselPrevButton = () => {
  const swiper = useSwiper();
  return (
    <div
      onClick={() => swiper.slidePrev()}
      className="cursor-pointer rounded-full bg-[#353535] p-2 w-fit h-fit group hover:bg-white"
    >
      <SlArrowLeft className="size-9 fill-white -translate-x-0.5 group-hover:fill-[#353535]" />
    </div>
  );
};

export default CarouselPrevButton;
