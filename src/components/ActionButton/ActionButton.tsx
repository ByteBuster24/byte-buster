"use client";
import { FC, ReactElement, HTMLAttributeAnchorTarget } from "react";
import Link from "next/link";

interface ActionButtonProps {
  isLink?: boolean;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  children: string | number;
  isSmall?: boolean;
  icon?: ReactElement;
  handleClick?: () => void;
}

const smallStyles = "px-3 py-0.5";
const largeStyles = "px-4 py-2 text-base font-bold sm:px-10 sm:py-3";

const ActionButton: FC<ActionButtonProps> = ({
  isSmall = false,
  isLink,
  href = "/",
  target,
  children,
  icon,
  handleClick = () => {},
}) => {
  return isLink && href ? (
    <Link
      href={href}
      target={target}
      className="inline-block w-fit relative group p-px overflow-hidden rounded-md"
    >
      <ButtonBody isSmall={isSmall} icon={icon}>
        {children}
      </ButtonBody>
    </Link>
  ) : (
    <button
      className="inline-block w-fit relative group p-px overflow-hidden rounded-md"
      onClick={handleClick}
    >
      <ButtonBody isSmall={isSmall} icon={icon}>
        {children}
      </ButtonBody>
    </button>
  );
};

const ButtonBody: FC<ActionButtonProps> = ({ children, icon, isSmall }) => {
  return (
    <>
      <div
        className={`relative z-[3] flex items-center text-wrap gap-3 sm:text-nowrap ${
          isSmall ? smallStyles : largeStyles
        }`}
      >
        {icon}
        {children}
      </div>

      {/* Gradient */}
      <div className="absolute w-[calc(100%-2px)] h-[calc(100%-2px)] top-px left-px z-[1] bg-[length:400%_400%] hover:bg-primary bg-gradient-to-r from-[#E42AFB] via-[#04DEF9] to-[#E42AFB] rounded-md animate-gradient-action group-hover:-translate-y-[110%] group-hover:rounded-none duration-300" />

      {/* Solid - onHover */}
      <div className="absolute w-[calc(100%-2px)] h-[calc(100%-2px)] top-px left-px rounded-none bg-primary z-[1] translate-y-[110%] group-hover:translate-y-0 group-hover:rounded-md duration-300" />

      {/* Border */}
      <div className="absolute m-auto top-0 right-0 bottom-0 -left-[10%] w-[120%] h-[900%] bg-gradient-action rounded-md dark:hover:text-white/75 hover:text-black/75 blur-sm duration-300 ease-in animate-gradient-rotate transition-all" />
    </>
  );
};

export default ActionButton;
