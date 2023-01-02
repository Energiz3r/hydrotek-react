import React from "react";
import { styles } from "./Card.css";
import { palette } from "../../theme";

export interface CardProps {
  isButton?: boolean;
  color?: string;
  children?: React.ReactNode;
  borderRadius?: number;
  height?: number;
}

export const Card = ({
  isButton,
  color,
  children,
  borderRadius,
  height,
}: CardProps) => {
  return (
    <div
      className={styles.container}
      style={{
        cursor: isButton ? "pointer" : "initial",
        borderLeft: `0.3rem solid ${color ? color : palette.theme.highlight}`,
        height: height ? `${height}rem` : "auto",
        borderRadius: borderRadius ? `.${borderRadius}rem` : 0,
      }}
    >
      {isButton ? (
        <div
          className={styles.addContainer}
          style={{
            paddingBottom: height ? `${height / 14}rem` : 0,
          }}
        >
          <span className={styles.addButton}>+</span>
        </div>
      ) : (
        children
      )}
    </div>
  );
};
