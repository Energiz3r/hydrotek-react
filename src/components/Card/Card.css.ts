import { style } from "@vanilla-extract/css";
import { palette, shadows } from "../../theme";
import { processColors } from "../../utils/processColors";

const container = style({
  transition: "all 0.2s ease",
  borderRadius: ".4rem",
  height: "35rem",
  boxShadow: ".2rem .2rem .4rem .2rem rgba(20,20,20,0.2)",
  display: "grid",
  color: palette.theme.text,
  background: `radial-gradient(${palette.gradients.darkA},${palette.gradients.darkB})`,
  ":hover": {
    background: `radial-gradient(${palette.gradients.lightA},${palette.gradients.lightB})`,
    boxShadow: ".5rem .5rem .8rem .2rem rgba(20,20,20,0.5)",
  },
});

export const styles = {
  container,
  addContainer: style({
    alignSelf: "center",
    justifySelf: "center",
    paddingBottom: "3rem",
  }),
  addButton: style({
    fontSize: "15rem",
    fontWeight: "normal",
    color: "transparent",
    textShadow: shadows.dark.textShadow,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    backgroundColor: "black",
    transition: "all 0.2s ease",
    selectors: {
      [`${container}:hover &`]: {
        color: palette.theme.text,
        cursor: "pointer",
      },
    },
  }),
};
