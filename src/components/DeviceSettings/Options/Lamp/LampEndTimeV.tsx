import { plantType } from "../../types";
import { styles as parentStyles } from "../../DeviceSettings.css";
import { Label } from "../../Label/Label";
import React from "react";
import { TimeInput } from "../../../Inputs/TimeInput/TimeInput";

export const LampEndTimeV = ({
  plant,
  handlePlantChange,
}: {
  plant: plantType;
  handlePlantChange: (newPlantProps: any) => void;
}) => {
  return (
    <div className={parentStyles.optionContainer}>
      <Label tooltip="End time when in Veg mode">End time (veg)</Label>
      <TimeInput
        onChange={(value) => handlePlantChange({ lampEndTimeV: value })}
        enabled={plant.lampEnabled && !plant.lampFlowerMode}
        defaultValue={plant.lampEndTimeV}
      />
    </div>
  );
};
