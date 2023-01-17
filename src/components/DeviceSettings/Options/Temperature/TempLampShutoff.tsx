import { plantType } from "../../types";
import { styles as parentStyles } from "../../DeviceSettings.css";
import { Label } from "../../Label/Label";
import { Switch } from "../../../Switch/Switch";
import React from "react";

export const TempLampShutoff = ({
  plant,
  handlePlantChange,
}: {
  plant: plantType;
  handlePlantChange: (newPlantProps: any) => void;
}) => {
  return (
    <div className={parentStyles.optionContainer}>
      <Label tooltip="Turn off the lamp if this sensor reads too hot">
        Lamp over-temp shutoff
      </Label>
      <Switch
        onClick={() =>
          handlePlantChange({ tempLampShutoff: !plant.tempLampShutoff })
        }
        isOn={plant.tempEnabled && plant.lampEnabled && plant.tempLampShutoff}
        enabled={plant.tempEnabled && plant.lampEnabled}
      />
    </div>
  );
};
