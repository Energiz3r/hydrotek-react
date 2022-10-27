import { style } from "@vanilla-extract/css";

export const container = style({
  display: "grid",
  gap: "0 1rem",
  gridTemplateColumns: "7rem 1fr",
  alignItems: "center",
});
export const subcontainer = style({
  justifySelf: "center",
});
