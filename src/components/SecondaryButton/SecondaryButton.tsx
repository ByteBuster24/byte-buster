"use client";
import { FC, useMemo } from "react";
import Link from "next/link";

interface SecondaryButtonProps {
  isLink?: boolean;
  href?: string;
  theme?: "dark" | "light" | "dual";
  children: string;
  handleClick?: () => void;
}

const SecondaryButton: FC<SecondaryButtonProps> = ({
  isLink,
  href,
  children,
  theme = "dual",
  handleClick,
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
        <Link className={buttonStyles} href={href || "/"}>
          {children}
        </Link>
      ) : (
        <button className={buttonStyles} onClick={handleClick}>
          {children}
        </button>
      )}
      <div className={borderStyles} />
    </div>
  );
};

export default SecondaryButton;
