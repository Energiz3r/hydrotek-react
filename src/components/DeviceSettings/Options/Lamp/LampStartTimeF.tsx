import { plantType } from "../../types";
import { styles as parentStyles } from "../../DeviceSettings.css";
import { Label } from "../../Label/Label";
import React from "react";
import { TimeInput } from "../../../Inputs/TimeInput/TimeInput";

export const LampStartTimeF = ({
  plant,
  handlePlantChange,
}: {
  plant: plantType;
  handlePlantChange: (newPlantProps: any) => void;
}) => {
  return (
    <div className={parentStyles.optionContainer}>
      <Label tooltip="Start time when in Flower mode">
        Start time (flower)
      </Label>
      <TimeInput
        onChange={(value) => handlePlantChange({ lampStartTimeF: value })}
        enabled={plant.lampEnabled && plant.lampFlowerMode}
        defaultValue={plant.lampStartTimeF}
      />
    </div>
  );
};
