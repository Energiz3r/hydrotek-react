import { plantType } from "../../types";
import { styles as parentStyles } from "../../DeviceSettings.css";
import { Label } from "../../Label/Label";
import { Switch } from "../../../Switch/Switch";
import React from "react";

export const LampFlowerMode = ({
  plant,
  handlePlantChange,
}: {
  plant: plantType;
  handlePlantChange: (newPlantProps: any) => void;
}) => {
  return (
    <div className={parentStyles.optionContainer}>
      <Label tooltip="Enable using the flower hours">Plant is flowering</Label>
      <Switch
        onClick={() =>
          handlePlantChange({ lampFlowerMode: !plant.lampFlowerMode })
        }
        enabled={plant.lampEnabled}
        isOn={plant.lampEnabled && plant.lampFlowerMode}
      />
    </div>
  );
};
