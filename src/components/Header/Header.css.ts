import { style } from "@vanilla-extract/css";
import { palette, shadows, breakpoints } from "../../theme";

export const styles = {
  container: style({
    background: palette.theme.highlight,
    color: palette.theme.text,
    padding: "20px",
  }),
  contentContainer: style({
    display: "flex",
  }),
  logoContainer: style({
    fill: "white",
    fontSize: "40px",
    marginRight: "1rem",
    display: "flex",
  }),
  titleContainer: style({
    fontSize: "40px",
    marginRight: "1rem",
  }),
  utilityContainer: style({
    left: "auto",
    right: 0,
    fill: "white",
  }),
};
