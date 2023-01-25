import { plantType } from "../../types";
import { styles as parentStyles } from "../../DeviceSettings.css";
import { Label } from "../../Label/Label";
import { Switch } from "../../../Switch/Switch";
import React from "react";

export const PumpFlowMode = ({
  plant,
  handlePlantChange,
}: {
  plant: plantType;
  handlePlantChange: (newPlantProps: any) => void;
}) => {
  return (
    <div className={parentStyles.optionContainer}>
      <Label tooltip="Enables using the flow sensor to control delivery of nutrient amount">
        Flow mode
      </Label>
      <Switch
        onClick={() => handlePlantChange({ pumpFlowMode: !plant.pumpFlowMode })}
        isOn={plant.pumpEnabled && plant.pumpFlowMode}
        enabled={plant.pumpEnabled && plant.flowEnable}
      />
    </div>
  );
};
