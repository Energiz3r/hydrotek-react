import { PaletteColor, PaletteColorToken } from "./ThemeColor";
import { ThemeTypography, ThemeTypographyToken } from "./ThemeTypography";
import { ThemeShadows, ThemeShadowToken } from "./ThemeShadows";
import { createThemeContract } from "@vanilla-extract/css";

export type ThemeProps = {
  name: string;
  palette: PaletteColor;
  typography: ThemeTypography;
  shadows: ThemeShadows;
};
export const themeToken = {
  name: "",
  palette: PaletteColorToken,
  typography: ThemeTypographyToken,
  shadows: ThemeShadowToken,
};

export const themeVars = createThemeContract<ThemeProps>(themeToken);

export const palette = themeVars.palette;
export const typography = themeVars.typography;
export const shadows = themeVars.shadows;
