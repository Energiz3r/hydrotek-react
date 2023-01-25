import { plantType } from "../../types";
import { styles as parentStyles } from "../../DeviceSettings.css";
import { Label } from "../../Label/Label";
import React from "react";
import { IntegerInput } from "../../../Inputs/IntegerInput/IntegerInput";

export const PumpMaxDurationSec = ({
  plant,
  handlePlantChange,
}: {
  plant: plantType;
  handlePlantChange: (newPlantProps: any) => void;
}) => {
  const enabled = plant.pumpEnabled;
  return (
    <div className={parentStyles.optionContainer}>
      <Label tooltip="How long to run the pump for / max pump duration">
        (Max) pumping duration (sec)
      </Label>
      <IntegerInput
        onChange={(value) => handlePlantChange({ pumpMaxDurationSec: value })}
        maxValue={599}
        enabled={enabled}
        defaultValue={plant.pumpMaxDurationSec}
      />
    </div>
  );
};
