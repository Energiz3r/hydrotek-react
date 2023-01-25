import { plantType } from "../../types";
import { styles as parentStyles } from "../../DeviceSettings.css";
import { Label } from "../../Label/Label";
import { Switch } from "../../../Switch/Switch";
import React from "react";

export const PumpFlowEmail = ({
  plant,
  handlePlantChange,
  loggingEnabled,
}: {
  plant: plantType;
  handlePlantChange: (newPlantProps: any) => void;
  loggingEnabled: boolean;
}) => {
  const enabled = plant.pumpEnabled && plant.pumpFlowMode && loggingEnabled;
  return (
    <div className={parentStyles.optionContainer}>
      <Label tooltip="Alert by email if the flow volume can not be reached within the maximum time">
        Low-flow email alert
      </Label>
      <Switch
        onClick={() =>
          handlePlantChange({ pumpFlowEmail: !plant.pumpFlowEmail })
        }
        isOn={enabled && plant.pumpFlowEmail}
        enabled={enabled}
      />
    </div>
  );
};
