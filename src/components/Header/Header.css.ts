import { style } from "@vanilla-extract/css";
import { palette, shadows, breakpoints } from "../../theme";

export const styles = {
  container: style({
    background: palette.theme.highlight,
    color: palette.theme.text,
  }),
  contentContainer: style({
    background: "",
  }),
  logoContainer: style({
    //background: "rgb(255,180,180)",
  }),
  titleContainer: style({
    //background: "rgb(180,255,180)",
  }),
  utilityContainer: style({
    //background: "rgb(180,180,255)",
  }),
};
