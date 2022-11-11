import React from "react";
import * as styles from "./Card.css";

export interface CardProps {
  isButton?: boolean;
  color?: string;
  children?: React.ReactNode;
}

export const Card = ({ isButton, color, children }: CardProps) => {
  return (
    <div
      className={styles.container}
      style={{ cursor: isButton ? "pointer" : "initial" }}
    >
      {isButton ? (
        <div className={styles.addContainer}>
          <span className={styles.addButton}>+</span>
        </div>
      ) : (
        children
      )}
    </div>
  );
};
