import { style } from "@vanilla-extract/css";
import { palette, shadows, breakpoints } from "../../theme";

export const container = style({
  background: palette.primary.light,
});

export const contentContainer = style({
  background: "",
});

export const logoContainer = style({
  //background: "rgb(255,180,180)",
});

export const titleContainer = style({
  //background: "rgb(180,255,180)",
});

export const utilityContainer = style({
  //background: "rgb(180,180,255)",
});
