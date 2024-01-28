"use client";
import {
  createContext,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react";

interface ThemeContextInterface {
  isDarkTheme: boolean;
  toggleThemeHandler: () => void;
}

const ThemeContext = createContext<ThemeContextInterface>({
  isDarkTheme: true,
  toggleThemeHandler: () => {},
});

interface ThemeProviderProps {
  children?: JSX.Element | Array<JSX.Element>;
}

const isLocalStorageEmpty = (): boolean => {
  return !localStorage?.getItem("isDarkTheme");
};

const ThemeProvider = (props: ThemeProviderProps): ReactElement => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

  const initialThemeHandler = useCallback(() => {
    if (!isLocalStorageEmpty()) {
      const isDarkTheme: boolean = JSON.parse(
        localStorage.getItem("isDarkTheme")!,
      );
      setIsDarkTheme(isDarkTheme);
    }
  }, []);

  useEffect(() => {
    initialThemeHandler();
  }, [initialThemeHandler]);

  useEffect(() => {
    isDarkTheme
      ? document.querySelector("body")?.classList.add("dark")
      : document.querySelector("body")?.classList.remove("dark");
  }, [isDarkTheme]);

  const toggleThemeHandler = useCallback(() => {
    setIsDarkTheme(!isDarkTheme);
    document.querySelector("body")?.classList.toggle("dark");
    localStorage.setItem("isDarkTheme", `${!isDarkTheme}`);
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleThemeHandler }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
export { ThemeProvider };
