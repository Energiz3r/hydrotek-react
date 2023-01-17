import { plantType } from "../../types";
import { styles as parentStyles } from "../../DeviceSettings.css";
import { Label } from "../../Label/Label";
import { Switch } from "../../../Switch/Switch";
import React from "react";

export const TempEnabled = ({
  plant,
  handlePlantChange,
}: {
  plant: plantType;
  handlePlantChange: (newPlantProps: any) => void;
}) => {
  return (
    <div className={parentStyles.optionContainer}>
      <Label tooltip="Enable / Disable the temp / humidity sensor">
        Temp / humidity sensor enable
      </Label>
      <Switch
        onClick={() => handlePlantChange({ tempEnabled: !plant.tempEnabled })}
        isOn={plant.tempEnabled}
      />
    </div>
  );
};
