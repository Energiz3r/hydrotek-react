import { style, globalStyle } from "@vanilla-extract/css";
import { palette, breakpoints } from "../../../theme";

export const styles = {
  deviceLabelContainer: style({
    border: "none",
    backgroundColor: "rgba(0,0,0,0)",
    boxShadow: "none",
    alignItems: "flex-start",
    position: "relative",
    marginTop: ".5rem",
  }),
  plantContainer: style({
    backgroundColor: "rgb(102, 102, 102)",
    padding: ".3rem",
    borderLeft: ".3rem solid rgb(205, 77, 255)",
    borderRadius: ".4rem",
    marginBottom: ".5rem",
  }),
  plantTitle: style({
    marginTop: "1rem",
    marginRight: "auto",
    marginLeft: "auto",
    alignSelf: "center",
  }),
};
