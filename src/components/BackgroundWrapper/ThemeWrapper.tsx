"use client";
import { ReactNode, useContext } from "react";
import ThemeContext from "@/providers/ThemeProvider";

const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div
      className={`h-full bg-contain bg-repeat ${
        !isDarkTheme ? "bg-light-sm sm:bg-light-lg" : "bg-dark-sm sm:bg-dark-lg"
      }`}
    >
      {children}
    </div>
  );
};

export default ThemeWrapper;
