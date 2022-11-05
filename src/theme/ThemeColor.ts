export const PaletteColorOptionToken = {
  main: "",
  dark: "",
  light: "",
  hover: "",
  neutral: "",
  contrastText: "",
};

export const PaletteColorToken = {
  theme: PaletteColorOptionToken,
  primary: PaletteColorOptionToken,
  secondary: PaletteColorOptionToken,
  border: PaletteColorOptionToken,
  success: PaletteColorOptionToken,
  error: PaletteColorOptionToken,
  warning: PaletteColorOptionToken,
  info: PaletteColorOptionToken,
};

type PaletteColorType = {
  primary: any;
  secondary: any;
  border: any;
  success: any;
  error: any;
  warning: any;
  info: any;
};

export type PaletteColor = typeof PaletteColorToken;
//export type PaletteColor = PaletteColorType;
export type PaletteColorOption = typeof PaletteColorOptionToken;
