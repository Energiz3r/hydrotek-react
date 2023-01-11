import { PaletteColor } from "../ThemeColor";
import { processColors } from "../../utils/processColors";
import { palette } from "../Theme.css";

const mainPalette = {
  highlight: "#3C78FF", // blue
  alternate: "#FC5130", // red
  text: "#FFFAFF", // white
  container: "#303036", // grey
  background: "#050401", // black
};

const sparePalette = {
  highlight: "#3C78FF", // blue
  alternate: "#F06449", // orange
  text: "#EDE6E3", // white
  container: "#EDE6E3", // black
  background: "#0F0A0A", // light grey
};

const newPalette = {
  lightShade: "#F9F5F5", // 249, 245, 245
  lightAccent: "#8B8B77", // 139, 139, 119
  brand: "#9C90A9", // 156, 144, 169
  darkAccent: "#8B8277", //rgba(139,130,119
  darkShade: "#291D2F",

  darkerShade: "#0d0a0f",
};

const usedPalette = newPalette;

export const colors: PaletteColor = {
  theme: usedPalette,
  gradients: {
    darkA: processColors(0.1, usedPalette.darkShade),
    darkB: usedPalette.darkShade,
    lightA: processColors(0.125, usedPalette.darkShade),
    lightB: processColors(0.025, usedPalette.darkShade),
  },
  border: {
    main: "rgb(53, 54, 56)",
  },
  success: "#028702",
  error: "#E02020",
  warning: "#DA6A00",
  info: "#005EAB",
};
