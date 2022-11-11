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

const gs = style({});
export const globalStylesContainer = gs;
globalStyle(`${gs} > div`, {
  fontFamily,
  boxSizing: "border-box",
});

globalStyle("html, body", {
  backgroundColor: "#000",
  margin: 0,
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
