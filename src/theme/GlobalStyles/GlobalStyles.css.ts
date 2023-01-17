import { globalStyle, style } from "@vanilla-extract/css";
import { typography } from "../Theme.css";

const {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  small,
  large,
  button,
  fontFamily,
  sectionTitle,
} = typography;

export const globalStylesContainer = style({
  fontFamily,
});

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  width: "100%",
  height: "100%",
  overflowX: "hidden",
  backgroundColor: "#191919",
  boxSizing: "border-box",
  color: "#8e8e8e",
});
globalStyle("html button, html input, html select, html textarea", {
  fontFamily: "inherit",
  fontSize: "100%",
});
globalStyle("h1", h1);
globalStyle("h2", h2);
globalStyle("h3", h3);
globalStyle("h4", h4);
globalStyle("h5", h5);
globalStyle("h6", h6);
globalStyle("p", p);
globalStyle("small", small);
globalStyle("large", large);
globalStyle("button", button);
globalStyle("sectionTitle", sectionTitle);
globalStyle("*, *::before, *::after", {
  boxSizing: "inherit",
});
