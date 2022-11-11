import React from "react";
import { darkTheme } from "./dark/theme.css";
import { lightTheme } from "./light/theme.css";

export enum ThemeName {
  dark = "dark",
  light = "light",
}

const ThemeMap = {
  dark: darkTheme,
  light: lightTheme,
} as const;

export const ThemeProvider: React.FC<{
  children: React.ReactNode;
  theme?: ThemeName;
}> = ({ children, theme = ThemeName.dark }) => {
  return <div className={ThemeMap[theme]}>{children}</div>;
};
