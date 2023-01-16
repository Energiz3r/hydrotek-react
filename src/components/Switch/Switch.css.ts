import { style } from "@vanilla-extract/css";
import { palette, shadows } from "../../theme";

const switchWidth = "3.6rem";
const switchHeight = "2rem";
const switchMargin = ".2rem";
const switchSize = "1.6rem";

export const styles = {
  container: style({
    cursor: "pointer",
    width: switchWidth,
    height: switchHeight,
    borderRadius: switchHeight,
    backgroundColor: palette.theme.darkShade,
    marginRight: "1.2rem",
    marginTop: "1.2rem",
  }),
  containerOn: style({
    backgroundColor: palette.theme.brand,
  }),
  slider: style({
    width: switchSize,
    height: switchSize,
    borderRadius: switchSize,
    backgroundColor: palette.theme.lightShade,
    margin: switchMargin,
    transition: ".4s",
  }),
  sliderOn: style({
    backgroundColor: palette.theme.lightShade,
    transform: `translateX(${switchSize})`,
  }),
};
