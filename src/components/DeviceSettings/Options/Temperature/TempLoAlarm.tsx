import { plantType } from "../../types";
import { styles as parentStyles } from "../../DeviceSettings.css";
import { Label } from "../../Label/Label";
import { Switch } from "../../../Switch/Switch";
import React from "react";

export const TempLoAlarm = ({
  plant,
  handlePlantChange,
}: {
  plant: plantType;
  handlePlantChange: (newPlantProps: any) => void;
}) => {
  return (
    <div className={parentStyles.optionContainer}>
      <Label tooltip="Sound the buzzer on the device if this sensor reads too cold">
        Lo temp sound alarm
      </Label>
      <Switch
        onClick={() => handlePlantChange({ tempLoAlarm: !plant.tempLoAlarm })}
        isOn={plant.tempEnabled && plant.tempLoAlarm}
        enabled={plant.tempEnabled}
      />
    </div>
  );
};
