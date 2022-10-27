import { style } from "@vanilla-extract/css";
import { palette, border, shadow } from "../../theme/Theme";

export const container = style({
  background: `radial-gradient(${palette.background.lighter},${palette.background.light})`,
  ":hover": {
    background: `radial-gradient(${palette.background.light},${palette.background.lighter})`,
    boxShadow: ".5rem .5rem .8rem .2rem rgba(20,20,20,0.5)",
  },
  borderRadius: border.radius,
  borderLeft: `0.3rem solid ${border.color.dark}`,
  height: "35rem",
  boxShadow: ".2rem .2rem .4rem .2rem rgba(20,20,20,0.2)",
  display: "grid",
});
export const addContainer = style({
  alignSelf: "center",
  justifySelf: "center",
  paddingBottom: "3rem",
});
export const addButton = style({
  fontSize: "15rem",
  fontWeight: "normal",
  color: "transparent",
  textShadow: shadow.light,
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  backgroundColor: "black",
  ":hover": {
    color: palette.background.light,
    textShadow: `2px 2px 5px ${palette.background.main}`,
    WebkitBackgroundClip: "border-box",
    backgroundClip: "border-box",
    backgroundColor: "rgba(0,0,0,0)",
    cursor: "pointer",
  },
});
