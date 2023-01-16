import React from "react";
import { styles } from "./Menu.css";

export const Menu = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.menuItemContainer}>Home</div>
        <div className={styles.menuItemContainer}>Something else</div>
        <div className={styles.menuItemContainer}>Devices</div>
        <div className={styles.menuItemContainer}>Menu content</div>
        <div className={styles.menuItemContainer}>Menu content</div>
      </div>
    </div>
  );
};
