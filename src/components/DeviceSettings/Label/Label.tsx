import React from "react";
import { styles } from "./Label.css";

interface DeviceGroupProps {
  tooltip: string;
  children: React.ReactNode;
  className?: string;
}

export const Label = ({ tooltip, children, className }: DeviceGroupProps) => {
  return (
    <>
      <label
        data-tip={tooltip}
        className={`${styles.label} ${className ? className : ""}`}
      >
        {children}
      </label>
    </>
  );
};
