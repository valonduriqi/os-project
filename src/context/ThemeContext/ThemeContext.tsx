import { createContext, useContext, useState, ReactNode } from "react";

interface ThemeContextType {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>({
  isDarkMode: false,
  setIsDarkMode: () => {},
});

export const useTheme = () => {
  if (!ThemeContext) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return useContext(ThemeContext);
};

export const { Provider } = ThemeContext;
