import { globalStyle, style } from "@vanilla-extract/css";
import { spacing, breakpoints, palette } from "../../../theme";

export const styles = {
  input: style({
    backgroundColor: "rgba(0,0,0,0.1)",
    margin: ".5rem",
    border: "none",
    marginRight: ".3rem",
    marginLeft: ".3rem",
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
    color: palette.theme.lightShade,
    ":disabled": {
      backgroundColor: palette.theme.lightAccent,
    },
  }),
  invalid: style({
    border: ".4rem dotted rgb(255, 57, 57)",
    borderRadius: ".8rem",
  }),
};
