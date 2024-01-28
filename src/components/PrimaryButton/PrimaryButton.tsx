"use client";
import { FC, ReactElement, useMemo } from "react";
import Link from "next/link";

interface PrimaryButtonProps {
  isLink?: boolean;
  href?: string;
  text: string;
  isSmall?: boolean;
  theme?: "dual" | "dark" | "light";
  icon?: ReactElement;
  handleClick?: () => void;
}

const smallStyles = "px-3 py-0.5";
const largeStyles = "px-2 py-2 text-base font-bold sm:px-10 sm:py-3";

const PrimaryButton: FC<PrimaryButtonProps> = ({
  isSmall,
  isLink,
  href,
  text,
  theme = "dual",
  icon,
  handleClick,
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

  return isLink && href ? (
    <Link
      href={href}
      className="inline-block relative group p-px overflow-hidden rounded-md w-fit"
    >
      <ButtonBody
        text={text}
        buttonStyles={buttonStyles}
        borderStyles={borderStyles}
        icon={icon}
      />
    </Link>
  ) : (
    <button
      className="relative group p-px overflow-hidden rounded-md"
      onClick={handleClick}
    >
      <ButtonBody
        text={text}
        buttonStyles={buttonStyles}
        borderStyles={borderStyles}
        icon={icon}
      />
    </button>
  );
};

type ButtonBodyProps = PrimaryButtonProps & {
  text: string;
  buttonStyles: string;
  borderStyles: string;
};

const ButtonBody: FC<ButtonBodyProps> = ({
  text,
  buttonStyles,
  borderStyles,
  icon,
}) => {
  return (
    <>
      <div className={buttonStyles}>
        {icon}
        {text}
      </div>
      <div className={borderStyles} />
    </>
  );
};

export default PrimaryButton;
