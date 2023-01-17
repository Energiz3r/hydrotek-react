import { plantType } from "../../types";
import { styles as parentStyles } from "../../DeviceSettings.css";
import { Label } from "../../Label/Label";
import { Switch } from "../../../Switch/Switch";
import React from "react";

export const TempHiAlarm = ({
  plant,
  handlePlantChange,
}: {
  plant: plantType;
  handlePlantChange: (newPlantProps: any) => void;
}) => {
  return (
    <div className={parentStyles.optionContainer}>
      <Label tooltip="Sound the buzzer on the device if this sensor reads too hot">
        Hi temp sound alarm
      </Label>
      <Switch
        onClick={() => handlePlantChange({ tempHiAlarm: !plant.tempHiAlarm })}
        isOn={plant.tempEnabled && plant.tempHiAlarm}
        enabled={plant.tempEnabled}
      />
    </div>
  );
};
