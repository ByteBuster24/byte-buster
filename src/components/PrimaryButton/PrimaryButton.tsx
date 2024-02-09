"use client";
import { useMemo, FC, ReactElement, HTMLAttributeAnchorTarget } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import { EnumTagEvents } from "@/constants/constants";
import Link from "next/link";

interface PrimaryButtonProps {
  isLink?: boolean;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  children: string | number;
  isSmall?: boolean;
  theme?: "dual" | "dark" | "light";
  icon?: ReactElement;
  addTagEvent?: boolean;
  tagEventValue?: EnumTagEvents;
  handleClick?: () => void;
}

const smallStyles = "px-3 py-0.5";
const largeStyles = "px-2 py-2 text-base font-bold sm:px-10 sm:py-3";

const PrimaryButton: FC<PrimaryButtonProps> = ({
  isSmall,
  isLink,
  href = "/",
  target,
  children,
  theme = "dual",
  icon,
  addTagEvent = false,
  tagEventValue = EnumTagEvents["BTN-CLICKED"],
  handleClick = () => {},
}) => {
  const buttonStyles = useMemo(
    () =>
      `block relative z-[1] rounded-md flex items-center text-center text-wrap gap-3 sm:text-nowrap ${
        isSmall ? smallStyles : largeStyles
      } ${
        theme === "dual"
          ? "bg-stone-50 dark:bg-black"
          : theme === "dark"
            ? "bg-black"
            : "bg-white"
      }`,
    [theme, isSmall],
  );

  const borderStyles = useMemo(
    () =>
      `absolute m-auto top-0 right-0 bottom-0 -left-[10%] w-[120%] h-[900%] bg-gradient-primary rounded-md blur-sm duration-300 ease-in animate-gradient-rotate transition-all ${
        theme === "dual"
          ? "dark:hover:text-white/75 hover:text-black/75 "
          : theme === "dark"
            ? "hover:text-white/75"
            : "hover:text-black/75"
      }`,
    [theme],
  );

  return isLink ? (
    <Link
      href={href}
      target={target}
      className="inline-block relative group p-px overflow-hidden rounded-md w-fit"
      onClick={() =>
        addTagEvent &&
        sendGTMEvent({ event: "buttonClicked", value: tagEventValue })
      }
    >
      <ButtonBody
        buttonStyles={buttonStyles}
        borderStyles={borderStyles}
        icon={icon}
      >
        {children}
      </ButtonBody>
    </Link>
  ) : (
    <button
      className="relative group p-px overflow-hidden rounded-md"
      onClick={() => {
        handleClick();
        addTagEvent &&
          sendGTMEvent({ event: "buttonClicked", value: tagEventValue });
      }}
    >
      <ButtonBody
        buttonStyles={buttonStyles}
        borderStyles={borderStyles}
        icon={icon}
      >
        {children}
      </ButtonBody>
    </button>
  );
};

type ButtonBodyProps = PrimaryButtonProps & {
  children: string | number;
  buttonStyles: string;
  borderStyles: string;
};

const ButtonBody: FC<ButtonBodyProps> = ({
  children,
  buttonStyles,
  borderStyles,
  icon,
}) => {
  return (
    <>
      <div className={buttonStyles}>
        {icon}
        {children}
      </div>
      <div className={borderStyles} />
    </>
  );
};

export default PrimaryButton;
