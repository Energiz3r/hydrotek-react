import { style } from "@vanilla-extract/css";
import { palette, shadows, breakpoints } from "../../theme";

export const container = style({
  background: palette.theme.highlight,
  color: palette.theme.text,
  padding: "20px",
});

export const contentContainer = style({
  display: "flex",
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
