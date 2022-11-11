export const PaletteColorToken = {
  theme: {
    highlight: "",
    alternate: "",
    text: "",
    container: "",
    background: "",
  },
  border: {
    main: "",
  },
  success: "",
  error: "",
  warning: "",
  info: "",
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
//export type PaletteColorOption = typeof PaletteColorOptionToken;
