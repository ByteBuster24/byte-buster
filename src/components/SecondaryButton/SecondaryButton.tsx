"use client";
import { useMemo, FC, HTMLAttributeAnchorTarget } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import { EnumTagEvents } from "@/constants/constants";
import Link from "next/link";

interface SecondaryButtonProps {
  isLink?: boolean;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  theme?: "dark" | "light" | "dual";
  children: string;
  addTagEvent?: boolean;
  tagEventValue?: EnumTagEvents;
  handleClick?: () => void;
}

const SecondaryButton: FC<SecondaryButtonProps> = ({
  isLink,
  href = "/",
  target,
  children,
  theme = "dual",
  addTagEvent = false,
  tagEventValue = EnumTagEvents["BTN-CLICKED"],
  handleClick = () => {},
}) => {
  const buttonStyles = useMemo(
    () =>
      `block px-3 py-0.5 rounded-md ${
        theme === "dual"
          ? "dark:group-hover:bg-black/30 group-hover:bg-white"
          : theme === "dark"
            ? "group-hover:bg-black"
            : "group-hover:bg-white"
      }`,
    [theme],
  );

  const borderStyles = useMemo(
    () =>
      `absolute top-0 left-0 w-[200%] h-[200%] group-hover:bg-gradient-secondary group-hover:animate-gradient-secondary -z-10 rounded-md`,
    [],
  );

  return (
    <div className="relative w-fit group rounded-md p-px overflow-hidden">
      {isLink ? (
        <Link
          className={buttonStyles}
          href={href}
          target={target}
          onClick={() =>
            addTagEvent &&
            sendGTMEvent({ event: "buttonClicked", value: tagEventValue })
          }
        >
          {children}
        </Link>
      ) : (
        <button
          className={buttonStyles}
          onClick={() => {
            handleClick();
            addTagEvent &&
              sendGTMEvent({ event: "buttonClicked", value: tagEventValue });
          }}
        >
          {children}
        </button>
      )}
      <div className={borderStyles} />
    </div>
  );
};

export default SecondaryButton;
