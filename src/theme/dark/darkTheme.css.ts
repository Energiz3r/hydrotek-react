import { darkColors } from './DarkColors';
import { darkTypography } from './DarkTypography';
import { ComponentLibraryTheme, themeVars } from '../Theme.css';
import { createTheme } from '@vanilla-extract/css';

const darkThemeTokens: ComponentLibraryTheme = {
  name: 'Dark',
  palette: darkColors,
  typography: darkTypography
};

export const darkTheme = createTheme(themeVars, darkThemeTokens);
