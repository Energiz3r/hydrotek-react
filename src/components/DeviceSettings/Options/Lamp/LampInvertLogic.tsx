import { plantType } from "../../types";
import { styles as parentStyles } from "../../DeviceSettings.css";
import { Label } from "../../Label/Label";
import { Switch } from "../../../Switch/Switch";
import React from "react";

export const LampInvertLogic = ({
  plant,
  handlePlantChange,
}: {
  plant: plantType;
  handlePlantChange: (newPlantProps: any) => void;
}) => {
  return (
    <div className={parentStyles.optionContainer}>
      <Label tooltip="Invert the control logic">
        Invert lamp control logic
      </Label>
      <Switch
        onClick={() =>
          handlePlantChange({ lampInvertLogic: !plant.lampInvertLogic })
        }
        enabled={plant.lampEnabled}
        isOn={plant.lampEnabled && plant.lampInvertLogic}
      />
    </div>
  );
};
