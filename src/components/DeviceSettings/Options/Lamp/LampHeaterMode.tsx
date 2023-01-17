import { plantType } from "../../types";
import { styles as parentStyles } from "../../DeviceSettings.css";
import { Label } from "../../Label/Label";
import { Switch } from "../../../Switch/Switch";
import React from "react";

export const LampHeaterMode = ({
  plant,
  handlePlantChange,
}: {
  plant: plantType;
  handlePlantChange: (newPlantProps: any) => void;
}) => {
  return (
    <div className={parentStyles.optionContainer}>
      <Label tooltip="Enable using the lamp as a heater">Heater mode</Label>
      <Switch
        onClick={() =>
          handlePlantChange({ lampHeaterMode: !plant.lampHeaterMode })
        }
        isOn={plant.lampEnabled && plant.lampHeaterMode}
      />
    </div>
  );
};
