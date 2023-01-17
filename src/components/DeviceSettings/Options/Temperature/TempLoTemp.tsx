import { plantType } from "../../types";
import { styles as parentStyles } from "../../DeviceSettings.css";
import { Label } from "../../Label/Label";
import { FloatInput } from "../../../Inputs/FloatInput/FloatInput";
import React from "react";

export const TempLoTemp = ({
  plant,
  handlePlantChange,
}: {
  plant: plantType;
  handlePlantChange: (newPlantProps: any) => void;
}) => {
  return (
    <div className={parentStyles.optionContainer}>
      <Label tooltip="Alert with alarm or email at this temp threshold">
        Low temp alert (alarm or email)
      </Label>
      <FloatInput
        onChange={(value) => handlePlantChange({ tempLoTemp: value })}
        maxValue={99}
        enabled={plant.tempEnabled && (plant.tempLoAlarm || plant.tempLoEmail)}
        defaultValue={plant.tempLoTemp}
      />
    </div>
  );
};
