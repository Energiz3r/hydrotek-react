import { plantType } from "../../types";
import { styles as parentStyles } from "../../DeviceSettings.css";
import { Label } from "../../Label/Label";
import React from "react";
import { TimeInput } from "../../../Inputs/TimeInput/TimeInput";

export const LampEndTimeF = ({
  plant,
  handlePlantChange,
}: {
  plant: plantType;
  handlePlantChange: (newPlantProps: any) => void;
}) => {
  return (
    <div className={parentStyles.optionContainer}>
      <Label tooltip="End time when in Flower mode">End time (flower)</Label>
      <TimeInput
        onChange={(value) => handlePlantChange({ lampEndTimeF: value })}
        enabled={plant.lampEnabled && plant.lampFlowerMode}
        defaultValue={plant.lampEndTimeF}
      />
    </div>
  );
};
