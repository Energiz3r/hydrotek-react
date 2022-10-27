import React from "react";
import * as styles from "./Card.css";

export interface CardProps {
  isButton?: boolean;
  buttonIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Card = ({ isButton, children }: CardProps) => {
  return (
    <div className={styles.container}>
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
