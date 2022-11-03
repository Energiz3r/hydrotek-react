const FontFaceToken = {
  fontFamily: '',
  fontStyle: '',
  fontWeight: '',
  src: ''
};

const HeadingCssToken = {
  fontSize: '',
  lineHeight: '',
  fontWeight: ''
};

const TextCssToken = {
  fontSize: '',
  lineHeight: '',
  color: ''
};

const ButtonCssToken = {
  fontSize: '',
  lineHeight: '',
  fontWeight: '',
  textTransform: '',
  color: ''
};

const SectionTitleCssToken = {
  fontSize: '',
  lineHeight: '',
  letterSpacing: '',
  color: ''
};

const ACssToken = {
  color: '',
  '&:hover': {
    color: '',
    cursor: ''
  },
  '&:visited': {
    color: ''
  }
};

export const ThemeTypographyToken = {
  fontFamily: '',
  h1: HeadingCssToken,
  h2: HeadingCssToken,
  h3: HeadingCssToken,
  h4: HeadingCssToken,
  h5: HeadingCssToken,
  h6: HeadingCssToken,
  p: TextCssToken,
  small: TextCssToken,
  large: TextCssToken,
  sectionTitle: SectionTitleCssToken,
  button: ButtonCssToken,
  a: ACssToken
};

export type FontFace = typeof FontFaceToken;
export type HeadingCss = typeof HeadingCssToken;
export type TextCss = typeof TextCssToken;
export type ButtonCss = typeof ButtonCssToken;
export type SectionTitleCss = typeof SectionTitleCssToken;
export type ACss = typeof ACssToken;
export type ThemeTypography = typeof ThemeTypographyToken;
