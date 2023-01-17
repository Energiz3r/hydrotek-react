import { style } from "@vanilla-extract/css";
import { spacing, breakpoints, palette } from "../../../theme";

export const styles = {
  input: style({
    backgroundColor: "rgba(0,0,0,0.5)",
    color: palette.theme.lightShade,
    border: `.2rem solid ${palette.theme.brand}`,
    margin: ".5rem",
    //border: "none",
    marginRight: ".3rem",
    marginLeft: ".3rem",
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
  }),
  invalid: style({
    border: ".4rem dotted rgb(255, 57, 57)",
    borderRadius: ".8rem",
  }),
};
