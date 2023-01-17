import { plantType } from "../../types";
import { styles as parentStyles } from "../../DeviceSettings.css";
import { Label } from "../../Label/Label";
import React from "react";
import { TimeInput } from "../../../Inputs/TimeInput/TimeInput";

export const LampStartTimeV = ({
  plant,
  handlePlantChange,
}: {
  plant: plantType;
  handlePlantChange: (newPlantProps: any) => void;
}) => {
  return (
    <div className={parentStyles.optionContainer}>
      <Label tooltip="Start time when in Veg mode">Start time (veg)</Label>
      <TimeInput
        onChange={(value) => handlePlantChange({ lampStartTimeV: value })}
        enabled={plant.lampEnabled && !plant.lampFlowerMode}
        defaultValue={plant.lampStartTimeV}
      />
    </div>
  );
};
