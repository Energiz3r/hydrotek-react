import { colors } from "./Colors";
import { typography } from "./Typography";
import { ThemeProps, themeVars } from "../Theme.css";
import { createTheme } from "@vanilla-extract/css";
import { shadows } from "./Shadows";

const themeTokens: ThemeProps = {
  name: "dark",
  palette: colors,
  typography: typography,
  shadows: shadows,
};

export const darkTheme = {
  themeTokens: createTheme(themeVars, themeTokens),
  themeValues: themeTokens,
};
