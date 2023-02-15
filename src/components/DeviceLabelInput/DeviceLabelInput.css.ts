import { style } from "@vanilla-extract/css";
import { spacing, breakpoints, palette } from "../../../theme";

export const styles = {
  input: style({
    backgroundColor: palette.theme.darkerShade,
    color: palette.theme.lightShade,
    border: "none",
    textAlign: "center",
    height: "4rem",
    //width: "100%",
    ":focus": {
      outline: "none",
    },
  }),
};
