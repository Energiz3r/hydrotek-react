import { plantType } from "../../types";
import { styles as parentStyles } from "../../DeviceSettings.css";
import { Label } from "../../Label/Label";
import { Switch } from "../../../Switch/Switch";
import React from "react";

export const TempHiEmail = ({
  plant,
  handlePlantChange,
  loggingEnabled,
}: {
  plant: plantType;
  handlePlantChange: (newPlantProps: any) => void;
  loggingEnabled: boolean;
}) => {
  return (
    <div className={parentStyles.optionContainer}>
      <Label tooltip="Send an email if this sensor reads too hot">
        Hi temp email alert
      </Label>
      <Switch
        onClick={() => handlePlantChange({ tempHiEmail: !plant.tempHiEmail })}
        isOn={plant.tempEnabled && loggingEnabled && plant.tempHiEmail}
        enabled={plant.tempEnabled && loggingEnabled}
      />
    </div>
  );
};
