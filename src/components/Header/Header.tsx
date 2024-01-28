"use client";
import { useState, useEffect } from "react";
import useScrollDirection from "@/hooks/useScrollDirection";
import Image from "next/image";
import Link from "next/link";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

import brandFullLogo from "@/public/assets/logo/logo-full.webp";

const Header = () => {
  const scrollDirection = useScrollDirection();
  const [isHeaderAtTop, setIsHeaderAtTop] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const setScrollPosition = () => {
      const { scrollY } = window;
      if (scrollY <= 10) setIsHeaderAtTop(true);
      else setIsHeaderAtTop(false);
    };
    setScrollPosition();
    window.addEventListener("scroll", setScrollPosition);
    () => {
      window.removeEventListener("scroll", setScrollPosition);
    };
  }, []);

  useEffect(() => {
    const closeNavOnLg = () => {
      if (window.innerWidth >= 1024) setIsNavOpen(false);
    };
    window.addEventListener("resize", closeNavOnLg);
    return () => {
      window.removeEventListener("resize", closeNavOnLg);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-[9999] w-screen text-slate-550 text-sm font-medium text-nowrap duration-500 ease-in bg-black/90 transition-transform ${
        isHeaderAtTop && !isNavOpen ? "dark:bg-transparent" : "dark:bg-black"
      } ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}`}
    >
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/">
          <Image
            src={brandFullLogo}
            alt="ByteBusters Logo"
            width={250}
            height={70}
            className="w-40 sm:w-56 md:w-64"
          />
        </Link>
        <Links containerStyles="items-center xl:gap-12 hidden lg:flex" />
        <div className="flex items-center gap-1 sm:gap-8">
          <ThemeToggler />

          {/* HamBurger */}
          <div
            className="w-10 p-2 flex flex-col gap-1 cursor-pointer lg:hidden"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <div
              className={`w-full h-1 bg-[#31224F] rounded-full duration-300 ${
                isNavOpen ? "rotate-45 translate-y-1" : ""
              }`}
            />
            <div
              className={`w-full h-1 bg-[#31224F] rounded-full ${
                isNavOpen ? "hidden" : "block"
              }`}
            />
            <div
              className={`w-full h-1 bg-[#31224F] rounded-full duration-300 ${
                isNavOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            />
          </div>
        </div>
        <div className="items-center gap-4 xl:gap-8 hidden lg:flex">
          <SecondaryButton theme="dark" isLink href="/">
            Login
          </SecondaryButton>
          <PrimaryButton href="/" theme="dark" text="Join Now" isLink isSmall />
        </div>
      </nav>
      <div
        className={`container mx-auto overflow-hidden duration-500 ease-in-out lg:hidden ${
          isNavOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-around pb-8 md:justify-normal">
          <Links containerStyles="flex flex-col gap-4 md:w-1/2" />
          <div className="flex flex-col gap-4 md:w-1/2">
            <SecondaryButton theme="dark" isLink href="/">
              Login
            </SecondaryButton>
            <PrimaryButton
              href="/"
              theme="dark"
              text="Join Now"
              isLink
              isSmall
            />
          </div>
        </div>
      </div>
    </header>
  );
};

const Links = ({ containerStyles }: { containerStyles: string }) => {
  return (
    <ul className={containerStyles}>
      <li>
        <SecondaryButton theme="dark" isLink href="/">
          Home
        </SecondaryButton>
      </li>
      <li>
        <SecondaryButton theme="dark" isLink href="/about-us">
          About Us
        </SecondaryButton>
      </li>
      <li>
        <SecondaryButton theme="dark" isLink href="/">
          Services
        </SecondaryButton>
      </li>
      <li>
        <SecondaryButton theme="dark" isLink href="/">
          Contact
        </SecondaryButton>
      </li>
    </ul>
  );
};

export default Header;
