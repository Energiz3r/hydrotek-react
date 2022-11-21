import React from "react";
import { globalStylesContainer } from "./GlobalStyles.css";
import { GlobalFonts } from "../GlobalFonts/GlobalFonts";

export const GlobalStyles = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={globalStylesContainer}>
      <GlobalFonts />
      {children}
    </div>
  );
};
