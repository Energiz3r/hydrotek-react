import React from "react";
import { styles } from "./Card.css";
import { palette } from "../../theme";

export interface CardProps {
  isButton?: boolean;
  color?: string;
  children?: React.ReactNode;
}

export const Card = ({ isButton, color, children }: CardProps) => {
  return (
    <div
      className={styles.container}
      style={{
        cursor: isButton ? "pointer" : "initial",
        borderLeft: `0.3rem solid ${color ? color : palette.theme.highlight}`,
      }}
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
