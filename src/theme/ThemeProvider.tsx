import React from "react";
import { darkTheme } from "./dark/theme.css";
//import { lightTheme } from "./light/theme.css";
import { themeToken, ThemeProps } from "./Theme.css";

export enum ThemeName {
  dark = "dark",
  //light = "light",
}
const ThemeMap = {
  dark: darkTheme,
  //light: lightTheme,
};

const ThemeContext = React.createContext<{ themeValues: ThemeProps }>({
  themeValues: themeToken,
});

export const ThemeProvider: React.FC<{
  children: React.ReactNode;
  theme?: ThemeName;
}> = ({ children, theme = ThemeName.dark }) => {
  const themeValues = ThemeMap[theme].themeValues;
  return (
    <ThemeContext.Provider value={{ themeValues }}>
      <div className={ThemeMap[theme].themeTokens}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeProps => {
  const context = React.useContext(ThemeContext);
  if (!context.themeValues) {
    console.error("ThemeContext must be used within a ThemeProvider.");
  }
  return context.themeValues;
};
