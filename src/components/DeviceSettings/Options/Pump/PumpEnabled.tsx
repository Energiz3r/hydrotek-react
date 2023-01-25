import { plantType } from "../../types";
import { styles as parentStyles } from "../../DeviceSettings.css";
import { Label } from "../../Label/Label";
import { Switch } from "../../../Switch/Switch";
import React from "react";

export const PumpEnabled = ({
  plant,
  handlePlantChange,
}: {
  plant: plantType;
  handlePlantChange: (newPlantProps: any) => void;
}) => {
  return (
    <div className={parentStyles.optionContainer}>
      <Label tooltip="Enable / disable the pump operation">Pump enable</Label>
      <Switch
        onClick={() => handlePlantChange({ pumpEnabled: !plant.pumpEnabled })}
        isOn={plant.pumpEnabled}
      />
    </div>
  );
};
