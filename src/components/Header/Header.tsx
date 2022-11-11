import React from "react";
import * as styles from "./Header.css";

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.logoContainer}>logo</div>
        <div className={styles.titleContainer}>
          <h1>Header</h1>
        </div>
        <div className={styles.utilityContainer}>utilities</div>
      </div>
    </div>
  );
};
