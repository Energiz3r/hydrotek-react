import React from "react";
import { styles } from "./Header.css";
import { ReactComponent as SvgTreePalm } from "../../Icons/regular/tree-palm.svg";
import { ReactComponent as SvgHomeAlt } from "../../Icons/regular/home-alt.svg";

export const Header = ({ pageTitle = "Test" }: { pageTitle?: string }) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.logoContainer}>
          <div>
            <SvgTreePalm />
          </div>
          <div>HydroTek</div>
        </div>
        <div className={styles.titleContainer}> - {pageTitle}</div>
        <div className={styles.utilityContainer}>
          <SvgHomeAlt />
        </div>
      </div>
    </div>
  );
};
