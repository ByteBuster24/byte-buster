"use client";
import ThemeContext from "@/providers/ThemeProvider";
import { useContext } from "react";

const ThemeToggler = () => {
  const { toggleThemeHandler } = useContext(ThemeContext);
  return (
    <div
      className="relative cursor-pointer h-7 min-w-16 rounded-[100px] transition-all duration-500 ease-in-out bg-[#EEB968] dark:bg-[#31224F]"
      onClick={toggleThemeHandler}
    >
      {/* Moon */}
      <div className="opacity-0 dark:opacity-100 absolute top-1 left-2 rounded-full w-5 h-5 bg-white rotate-45 dark:rotate-0 translate-x-3 dark:translate-x-0 duration-300 ease-in-out">
        <div className="absolute bg-[#31224F] rounded-full w-4 h-4 -right-0.5 top-0" />
      </div>

      {/* Sun */}
      <div className="dark:opacity-0 absolute top-2 right-3 w-3 h-3 rounded-full bg-white dark:-rotate-45 dark:-translate-x-3 duration-300 ease-in-out">
        <div className="absolute w-[3px] h-[3px] rounded-full -top-1.5 left-1 bg-inherit" />
        <div className="absolute w-[3px] h-[3px] rounded-full top-1 -right-1.5 bg-inherit" />
        <div className="absolute w-[3px] h-[3px] rounded-full -bottom-1.5 left-1 bg-inherit" />
        <div className="absolute w-[3px] h-[3px] rounded-full top-1 -left-1.5 bg-inherit" />

        <div className="absolute w-0.5 h-0.5 rounded-full -top-0.5 -right-0.5 bg-inherit" />
        <div className="absolute w-0.5 h-0.5 rounded-full -bottom-0.5 -right-0.5 bg-inherit" />
        <div className="absolute w-0.5 h-0.5 rounded-full -top-0.5 -left-0.5 bg-inherit" />
        <div className="absolute w-0.5 h-0.5 rounded-full -bottom-0.5 -left-0.5 bg-inherit" />
      </div>
    </div>
  );
};

export default ThemeToggler;
