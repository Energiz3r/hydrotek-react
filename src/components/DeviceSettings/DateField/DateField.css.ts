import { style } from "@vanilla-extract/css";
import { palette } from "../../../theme";

export const styles = {
  container: style({ alignSelf: "center", marginRight: ".5rem" }),
  dateError: style({
    color: palette.error,
  }),
};
