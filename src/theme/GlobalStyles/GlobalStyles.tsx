import React from "react";
import * as styles from "./GlobalStyles.css";

export const GlobalStyles = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.globalStylesContainer}>{children}</div>;
};
