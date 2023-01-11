import { style } from "@vanilla-extract/css";
import { spacing, breakpoints, palette } from "../../theme";

export const styles = {
  container: style([
    {
      background: palette.theme.darkerShade,
      color: palette.theme.lightShade,
      fontWeight: "bold",
      position: "relative",
    },
    breakpoints.desktop({
      position: "absolute",
    }),
  ]),
  menuItemContainer: style([
    {
      cursor: "pointer",
      padding: "1rem",
      ":hover": {
        background: palette.theme.brand,
      },
    },
    breakpoints.desktop({
      padding: "1rem 3rem 1rem 3rem",
    }),
  ]),
};
