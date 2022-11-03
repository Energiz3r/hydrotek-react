export const PaletteColorOptionToken = {
  main: '',
  neutral: '',
  dark: '',
  light: '',
  contrastText: ''
};

export const PaletteColorToken = {
  primary: PaletteColorOptionToken,
  secondary: PaletteColorOptionToken,
  border: PaletteColorOptionToken,
  success: PaletteColorOptionToken,
  error: PaletteColorOptionToken,
  warning: PaletteColorOptionToken,
  info: PaletteColorOptionToken
};

export type PaletteColor = typeof PaletteColorToken;
export type PaletteColorOption = typeof PaletteColorOptionToken;
