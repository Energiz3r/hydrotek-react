import { style } from "@vanilla-extract/css";
import { palette, shadows } from "../../theme";
import { palette2 } from "../../theme/dark/Colors";
import { pSBC } from "../../utils/pSBC";

export const palette4 = {
  a: "#3C78FF", // blue
  b: "#303036", // grey
  c: "#FFFAFF", // white
  d: "#FC5130", // red
  e: "#050401", // black
};

export const container = style({
  background: `radial-gradient(${pSBC(0.1, palette2.b)},${palette2.b})`,
  ":hover": {
    background: `radial-gradient(${pSBC(0.125, palette2.b)},${pSBC(
      0.025,
      palette2.b
    )})`,
    boxShadow: ".5rem .5rem .8rem .2rem rgba(20,20,20,0.5)",
  },
  borderRadius: ".4rem",
  borderLeft: `0.3rem solid ${palette2.a}`,
  height: "35rem",
  boxShadow: ".2rem .2rem .4rem .2rem rgba(20,20,20,0.2)",
  display: "grid",
  color: palette2.c,
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
  textShadow: `2px 2px 5px ${palette.primary.dark}`,
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  backgroundColor: "black",
  selectors: {
    [`${container}:hover &`]: {
      color: palette2.c,
      textShadow: `2px 2px 5px ${pSBC(0.05, palette.primary.dark)}`,
      WebkitBackgroundClip: "border-box",
      backgroundClip: "border-box",
      backgroundColor: "rgba(0,0,0,0)",
      cursor: "pointer",
    },
  },
});
