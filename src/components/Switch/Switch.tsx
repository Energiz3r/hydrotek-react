import React from "react";
import { styles } from "./Switch.css";

export interface SwitchProps {
  isOn: boolean;
  onClick: (state: boolean) => void;
  enabled?: boolean;
}

export const Switch = ({ isOn, onClick, enabled = true }: SwitchProps) => {
  return (
    <div
      className={`${styles.container} ${isOn ? styles.containerOn : ""}`}
      onClick={() => onClick(!isOn)}
    >
      <div className={`${styles.slider} ${isOn ? styles.sliderOn : ""}`}></div>
    </div>
  );
};
