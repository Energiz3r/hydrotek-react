import { PaletteColor } from "../ThemeColor";
import { processColors } from "../../utils/processColors";

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
  container: "#0F0A0A", // black
  background: "#EDE6E3", // light grey
};

export const colors: PaletteColor = {
  theme: mainPalette,
  gradients: {
    darkA: processColors(0.1, mainPalette.container),
    darkB: mainPalette.container,
    lightA: processColors(0.125, mainPalette.container),
    lightB: processColors(0.025, mainPalette.container),
  },
  border: {
    main: "rgb(53, 54, 56)",
  },
  success: "#028702",
  error: "#E02020",
  warning: "#DA6A00",
  info: "#005EAB",
};
