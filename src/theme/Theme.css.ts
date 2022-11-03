import { PaletteColor, PaletteColorToken } from './ThemeColor';
import { ThemeTypography, ThemeTypographyToken } from './ThemeTypography';
import { createThemeContract } from '@vanilla-extract/css';

export type ComponentLibraryTheme = {
  name: string;
  palette: PaletteColor;
  typography: ThemeTypography;
};

export const themeVars = createThemeContract<ComponentLibraryTheme>({
  name: '',
  palette: PaletteColorToken,
  typography: ThemeTypographyToken
});

export const palette = themeVars.palette;
export const typography = themeVars.typography;
