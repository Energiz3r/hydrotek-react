export const palette = {
  background: {
    main: "rgb(53, 54, 56)",
    dark: "rgb(38, 38, 38)",
    light: "rgb(65, 65, 65)",
    lightHover: "rgb(85, 85, 85)",
    lighter: "rgb(100, 100, 100)",
  },
  text: {
    light: "rgb(0, 173, 9)",
    //default: "rgb(205, 215, 197)",
    default: "white",
  },
};
export const dropShadow = {
  main: "rgba(0,0,0,0.6)",
};
export const border = {
  radius: ".4rem",
  color: {
    dark: palette.background.main,
  },
};
export const font = {
  size: {
    medium: "1.6rem",
  },
};
export const shadow = {
  light: `2px 2px 5px ${palette.background.main}`,
};
export const breakpoint = {
  mobile: "screen and (max-width: 767px)",
  desktop: "screen and (min-width: 768px)",
};
