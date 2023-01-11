import { style } from "@vanilla-extract/css";
import { palette, breakpoints } from "../../theme";

export const styles = {
  container: style([
    {
      background: palette.theme.darkShade,
      color: palette.theme.lightShade,
      padding: "0.5rem",
    },
    breakpoints.desktop({
      padding: "1rem",
    }),
  ]),
  contentContainer: style({
    display: "flex",
    alignItems: "center",
  }),
  menuButtonContainer: style({
    fontSize: "40px",
    marginRight: "1rem",
  }),
  titleContainer: style([
    {
      fontSize: "20px",
      marginRight: "0.5rem",
    },
    breakpoints.desktop({
      fontSize: "40px",
      marginRight: "1rem",
    }),
  ]),
  logoContainer: style({
    fill: palette.theme.lightShade,
    display: "flex",
  }),
  menuButton: style({
    fill: palette.theme.lightShade,
    border: "none",
    cursor: "pointer",
    backgroundColor: "rgba(139,130,119,0.5)",
    ":hover": {
      backgroundColor: palette.theme.brand,
    },
  }),
  utilityContainer: style([
    {
      float: "right",
      position: "absolute",
      right: "2.5rem",
      fill: palette.theme.lightShade,
      fontSize: "10px",
    },
    breakpoints.desktop({
      fontSize: "20px",
    }),
  ]),
};
