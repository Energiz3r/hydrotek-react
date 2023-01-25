import { plantType } from "../../types";
import { styles as parentStyles } from "../../DeviceSettings.css";
import { Label } from "../../Label/Label";
import { Switch } from "../../../Switch/Switch";
import React from "react";

export const PumpFlowAlarm = ({
  plant,
  handlePlantChange,
}: {
  plant: plantType;
  handlePlantChange: (newPlantProps: any) => void;
}) => {
  const enabled = plant.pumpEnabled && plant.pumpFlowMode;
  return (
    <div className={parentStyles.optionContainer}>
      <Label tooltip="Sound alarm if the flow volume can not be reached within the maximum timen">
        Low-flow alarm
      </Label>
      <Switch
        onClick={() =>
          handlePlantChange({ pumpFlowAlarm: !plant.pumpFlowAlarm })
        }
        isOn={enabled && plant.pumpFlowAlarm}
        enabled={enabled}
      />
    </div>
  );
};
