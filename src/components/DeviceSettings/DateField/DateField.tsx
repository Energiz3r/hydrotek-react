import React from "react";
import { styles } from "./DateField.css";
import {
  getFriendlyFromTimestamp,
  getNowTimestamp,
  monthDiff,
} from "../../../utils/dateUtils";

interface DeviceGroupProps {
  lastSeenTimestamp: number;
}

export const DateField = ({ lastSeenTimestamp }: DeviceGroupProps) => {
  return (
    <div className={styles.container}>
      <div
        className={
          monthDiff(lastSeenTimestamp, getNowTimestamp()) > 0
            ? styles.dateError
            : ""
        }
      >
        {getFriendlyFromTimestamp(lastSeenTimestamp)}
      </div>
    </div>
  );
};
