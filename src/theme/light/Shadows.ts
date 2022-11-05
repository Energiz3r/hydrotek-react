import React from "react";
import { palette } from "../Theme.css";
import { ThemeShadows } from "../ThemeShadows";

export const shadows: ThemeShadows = {
  primary: {
    light: {
      textShadow: `2px 2px 5px ${palette.primary}`,
      boxShadow: "",
    },
    dark: {
      textShadow: `2px 2px 5px ${palette.primary}`,
      boxShadow: "",
    },
  },
};
