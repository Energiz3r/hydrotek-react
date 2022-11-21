import React from "react";
import { styles } from "./Header.css";
import { ReactComponent as AnSvg } from "../../Icons/regular/alarm-plus.svg";

export const Header = ({ pageTitle = "Test" }: { pageTitle?: string }) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.logoContainer}>logo</div>
        <div className={styles.titleContainer}>
          <h1>{pageTitle}</h1>

          <AnSvg />
        </div>
        <div className={styles.utilityContainer}>utilities</div>
      </div>
    </div>
  );
};
