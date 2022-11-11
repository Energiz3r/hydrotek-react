import { style } from "@vanilla-extract/css";
import { palette, border, shadow } from "../../theme/Theme";

export const device = style({
  cursor: "pointer",
});
export const iconContainer = style({
  display: "grid",
  gap: "3rem 1.5rem",
  gridAutoFlow: "row",
  gridTemplateColumns: "repeat(2, 1fr)",
  justifyItems: "start",
});
export const deviceLabel = style({
  fontSize: "2.4rem",
  padding: ".6rem",
  margin: "2rem 0 2.0rem 0",
  // backgroundColor: ({ theme }) => theme.backgroundDarker,
  // boxShadow: "inset 0 .2rem .5rem #000000",
});
export const lastSeenContainer = style({
  gridColumn: "1 / span 2",
  justifySelf: "center",
});
