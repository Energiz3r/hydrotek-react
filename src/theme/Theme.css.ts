import { PaletteColor, PaletteColorToken } from "./ThemeColor";
import { ThemeTypography, ThemeTypographyToken } from "./ThemeTypography";
import { ThemeShadows, ThemeShadowToken } from "./ThemeShadows";
import { createThemeContract } from "@vanilla-extract/css";
import React from "react";

export type ComponentLibraryTheme = {
  name: string;
  palette: PaletteColor;
  typography: ThemeTypography;
  shadows: ThemeShadows;
};

export const themeVars = createThemeContract<ComponentLibraryTheme>({
  name: "",
  palette: PaletteColorToken,
  typography: ThemeTypographyToken,
  shadows: ThemeShadowToken,
});

export const palette = themeVars.palette;
export const typography = themeVars.typography;
export const shadows = themeVars.shadows;
