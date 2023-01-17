import { plantType } from "../../types";
import { styles as parentStyles } from "../../DeviceSettings.css";
import { Label } from "../../Label/Label";
import { FloatInput } from "../../../Inputs/FloatInput/FloatInput";
import React from "react";

export const TempHiTemp = ({
  plant,
  handlePlantChange,
}: {
  plant: plantType;
  handlePlantChange: (newPlantProps: any) => void;
}) => {
  return (
    <div className={parentStyles.optionContainer}>
      <Label tooltip="Alert with alarm or email at this temp threshold">
        Hi temp alert (alarm or email)
      </Label>
      <FloatInput
        onChange={(value) => handlePlantChange({ tempHiTemp: value })}
        maxValue={99}
        enabled={plant.tempEnabled && (plant.tempHiAlarm || plant.tempHiEmail)}
        defaultValue={plant.tempHiTemp}
      />
    </div>
  );
};
