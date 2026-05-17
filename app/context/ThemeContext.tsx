"use client";

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({ children }: any) => {
  const [animating, setAnimating] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setAnimating(true);

    setTimeout(() => {
      setDark((prev: boolean) => !prev);
    }, 250);

    setTimeout(() => {
      setAnimating(false);
    }, 600);
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme, animating }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);