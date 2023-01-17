import { plantType } from "../../types";
import { styles as parentStyles } from "../../DeviceSettings.css";
import { Label } from "../../Label/Label";
import { Switch } from "../../../Switch/Switch";
import React from "react";

export const LampEnabled = ({
  plant,
  handlePlantChange,
}: {
  plant: plantType;
  handlePlantChange: (newPlantProps: any) => void;
}) => {
  return (
    <div className={parentStyles.optionContainer}>
      <Label tooltip="Enable lamp control">Lamp enable</Label>
      <Switch
        onClick={() => handlePlantChange({ lampEnabled: !plant.lampEnabled })}
        isOn={plant.lampEnabled}
      />
    </div>
  );
};
