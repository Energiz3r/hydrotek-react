import { plantType } from "../../types";
import { styles as parentStyles } from "../../DeviceSettings.css";
import { Label } from "../../Label/Label";
import React from "react";
import { IntegerInput } from "../../../Inputs/IntegerInput/IntegerInput";

export const PumpFlowMl = ({
  plant,
  handlePlantChange,
}: {
  plant: plantType;
  handlePlantChange: (newPlantProps: any) => void;
}) => {
  return (
    <div className={parentStyles.optionContainer}>
      <Label tooltip="How much nutrient to deliver each time, when using flow mode">
        Nutrient amount per delivery (mL)
      </Label>
      <IntegerInput
        onChange={(value) => handlePlantChange({ pumpFlowMl: value })}
        maxValue={9999}
        enabled={plant.pumpEnabled && plant.pumpFlowMode}
        defaultValue={plant.pumpFlowMl}
      />
    </div>
  );
};
