import { colors } from "./Colors";
import { typography } from "./Typography";
import { ThemeProps, themeVars } from "../Theme.css";
import { createTheme } from "@vanilla-extract/css";
import { shadows } from "./Shadows";

const themeTokens: ThemeProps = {
  name: "light",
  palette: colors,
  typography: typography,
  shadows: shadows,
};

export const lightTheme = {
  themeTokens: createTheme(themeVars, themeTokens),
  themeValues: themeTokens,
};
