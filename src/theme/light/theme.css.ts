import { colors } from "./Colors";
import { typography } from "./Typography";
import { ComponentLibraryTheme, themeVars } from "../Theme.css";
import { createTheme } from "@vanilla-extract/css";
import { shadows } from "./Shadows";

const themeTokens: ComponentLibraryTheme = {
  name: "light",
  palette: colors,
  typography: typography,
  shadows: shadows,
};

export const lightTheme = createTheme(themeVars, themeTokens);