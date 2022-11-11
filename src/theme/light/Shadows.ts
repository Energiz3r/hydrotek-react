import React from "react";
import { palette } from "../Theme.css";
import { ThemeShadows } from "../ThemeShadows";

export const shadows: ThemeShadows = {
  light: {
    textShadow: `2px 2px 5px ${palette.theme.background}`,
    boxShadow: "",
  },
  dark: {
    textShadow: `2px 2px 5px ${palette.theme.background}`,
    boxShadow: "",
  },
};
