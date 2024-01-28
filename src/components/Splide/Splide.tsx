"use client";
import { FC, ReactElement } from "react";
// @ts-ignore
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

interface SplideProps {
  children: ReactElement[];
}

const MySplide: FC<SplideProps> = ({ children }) => {
  return (
    <Splide
      hasTrack={false}
      options={{
        autoWidth: true,
        type: "loop",
        gap: "1rem",
        autoplay: true,
        pauseOnHover: true,
        resetProgress: false,
      }}
    >
      <SplideTrack>
        <SplideSlide>
          <div />
        </SplideSlide>
        {children &&
          children.map((child, index) => (
            <SplideSlide key={index}>{child}</SplideSlide>
          ))}
      </SplideTrack>
    </Splide>
  );
};

export default MySplide;
