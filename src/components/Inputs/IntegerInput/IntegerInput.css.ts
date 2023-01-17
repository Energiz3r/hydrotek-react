import { style } from "@vanilla-extract/css";
import { spacing, breakpoints, palette } from "../../../theme";

export const styles = {
  input: style({
    backgroundColor: "rgba(0,0,0,0.5)",
    color: palette.theme.lightShade,
    border: `.2rem solid ${palette.theme.brand}`,
    marginRight: ".3rem",
    marginLeft: ".3rem",
    maxWidth: "5rem",
    textAlign: "center",
    height: "3rem",
    marginTop: ".4rem",
    ":disabled": {
      //border: ".4rem dotted rgb(255, 57, 57)",
      backgroundColor: palette.theme.lightAccent,
      //borderRadius: ".8rem",
    },
  }),
};
