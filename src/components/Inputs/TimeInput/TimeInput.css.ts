import { globalStyle, style } from "@vanilla-extract/css";
import { spacing, breakpoints, palette } from "../../../theme";

globalStyle(`[type="time"]::-webkit-calendar-picker-indicator`, {
  filter: "invert(1)",
});
