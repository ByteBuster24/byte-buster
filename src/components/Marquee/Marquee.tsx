"use client";
import { FC, ReactElement, useCallback, useEffect, useMemo } from "react";
import WheelControls from "./WheelControls";
import { useKeenSlider, KeenSliderOptions } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

type MarqueeProps = KeenSliderOptions & {
  children: ReactElement[];
  autoplay?: boolean;
  wheelControls?: boolean;
  animationDuration?: number;
  pauseOnHover?: boolean;
  containerStyles?: string;
  slideStyles?: string;
  evenStyles?: string;
  oddStyles?: string;
};

const Marquee: FC<MarqueeProps> = ({
  children,
  autoplay = true,
  wheelControls = false,
  animationDuration,
  pauseOnHover = false,
  containerStyles = "",
  slideStyles = "",
  evenStyles = "",
  oddStyles = "",
  ...options
}) => {
  const animation = useMemo(() => {
    const duration =
      typeof animationDuration === "number"
        ? animationDuration
        : children.length * 2500;
    return {
      duration,
      easing: (t: number) => t,
    };
  }, [animationDuration, children.length]);

  const plugins = useMemo(() => {
    const plugins = [];
    if (wheelControls) plugins.push(WheelControls);
    return plugins;
  }, [wheelControls]);

  const [keenRef, keenApi] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      renderMode: "performance",
      ...options,
      created(s) {
        autoplay && s.moveToIdx(children.length, true, animation);
      },
      updated(s) {
        autoplay &&
          s.moveToIdx(s.track.details.abs + children.length, true, animation);
      },
      animationEnded(s) {
        autoplay &&
          s.moveToIdx(s.track.details.abs + children.length, true, animation);
      },
    },
    plugins,
  );

  const pauseAnimation = useCallback(() => {
    keenApi.current?.animator.stop();
  }, [keenApi]);

  const playAnimation = useCallback(() => {
    keenApi.current?.moveToIdx(
      keenApi.current.track.details.abs + children.length,
      true,
      animation,
    );
  }, [keenApi, children, animation]);

  useEffect(() => {
    const playStoppedAnimationOnScroll = () => {
      if (!keenApi.current?.animator.active && !pauseOnHover && autoplay)
        playAnimation();
    };
    window.addEventListener("scroll", playStoppedAnimationOnScroll);
    return () => {
      window.removeEventListener("scroll", playStoppedAnimationOnScroll);
    };
  }, [keenApi, playAnimation, pauseOnHover, autoplay]);

  return (
    <div
      ref={keenRef}
      className={`keen-slider ${containerStyles}`}
      onMouseMove={pauseOnHover ? pauseAnimation : undefined}
      onMouseLeave={pauseOnHover ? playAnimation : undefined}
    >
      {children.map((child, index) => (
        <div
          key={index}
          className={`keen-slider__slide h-fit min-h-fit max-h-fit min-w-fit w-fit max-w-fit ${slideStyles} ${
            index & 1 ? oddStyles : evenStyles
          }`}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default Marquee;
