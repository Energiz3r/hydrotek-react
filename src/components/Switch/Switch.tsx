import React from "react";
import { styles } from "./Switch.css";

export interface SwitchProps {
  isOn: boolean;
  onClick: () => void;
  enabled?: boolean;
}

export const Switch = ({ isOn, onClick, enabled = true }: SwitchProps) => {
  return (
    <div
      className={`${styles.container} ${isOn ? styles.containerOn : ""} ${
        !enabled ? styles.containerDisabled : ""
      }`}
      onClick={(e) => {
        e.stopPropagation();
        enabled ? onClick() : null;
      }}
    >
      <div
        className={`${styles.slider} ${isOn ? styles.sliderOn : ""} ${
          !enabled ? styles.sliderDisabled : ""
        }`}
      ></div>
    </div>
  );
};
