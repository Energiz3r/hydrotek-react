import React from "react";
import * as styles from "./IconStatus.css";

interface IconStatusProps {
  Icon?: any;
  isError?: boolean;
  label?: string;
  isLightOn?: boolean;
  isDouble?: boolean;
}

export const IconStatus = ({
  Icon,
  isError = false,
  label,
  isLightOn = false,
  isDouble = false,
}: IconStatusProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        {/*<Icon*/}
        {/*  icon={icon}*/}
        {/*  isError={isError}*/}
        {/*  isLightOn={isLightOn}*/}
        {/*  isDouble={isDouble}*/}
        {/*/>*/}
      </div>
      <div>
        <span>{label}</span>
      </div>
    </div>
  );
};
