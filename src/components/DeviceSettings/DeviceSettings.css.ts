import { style, globalStyle } from "@vanilla-extract/css";
import { palette, breakpoints } from "../../theme";

const optionContainer = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingLeft: ".3rem",
  paddingRight: ".3rem",
  marginBottom: ".5rem",
  //borderRadius: ".4rem",
  backgroundColor: "rgb(80, 80, 80)",
  //boxShadow: "0 .4rem .2rem -.2rem rgba(0, 0, 0, 0.5)",
  minHeight: "4.5rem",
});
globalStyle(`${optionContainer} > label`, {
  marginLeft: ".5rem",
  marginRight: ".5rem",
  marginTop: "1.2rem",
});

export const styles = {
  content: style({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "100rem",
    alignItems: "stretch",
    textAlign: "center",
    color: palette.theme.lightShade,
  }),
  container: style({
    display: "flex",
    flexDirection: "column",
    //borderRadius: ".4rem",
    backgroundColor: "rgb(65, 65, 65)",
    padding: ".5rem",
    borderLeft: ".3rem solid $theme",
    marginBottom: ".5rem",
  }),
  subContainer: style({
    backgroundColor: "rgb(102, 102, 102)",
    padding: ".3rem",
    borderLeft: ".3rem solid rgb(205, 77, 255)",
    borderRadius: ".4rem",
    marginBottom: ".5rem",
  }),
  deviceLabelContainer: style({
    border: "none",
    backgroundColor: "rgba(0,0,0,0)",
    boxShadow: "none",
    alignItems: "flex-start",
    position: "relative",
    marginTop: ".5rem",
  }),
  subTitle: style({
    marginTop: "1rem",
    marginRight: "auto",
    marginLeft: "auto",
    alignSelf: "center",
  }),
  containerAlerts: style({
    borderLeft: ".3rem solid rgb(91, 255, 69)",
  }),
  optionContainer,
  splitRow: style({}),
};
