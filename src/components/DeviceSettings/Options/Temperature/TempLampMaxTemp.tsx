import { plantType } from "../../types";
import { styles as parentStyles } from "../../DeviceSettings.css";
import { Label } from "../../Label/Label";
import { FloatInput } from "../../../Inputs/FloatInput/FloatInput";
import React from "react";

export const TempLampMaxTemp = ({
  plant,
  handlePlantChange,
}: {
  plant: plantType;
  handlePlantChange: (newPlantProps: any) => void;
}) => {
  return (
    <div className={parentStyles.optionContainer}>
      <Label tooltip="Turn off the lamp if temperature hits this threshold">
        Max lamp temp
      </Label>
      <FloatInput
        onChange={(value) => handlePlantChange({ tempLampMaxTemp: value })}
        maxValue={60}
        enabled={
          plant.tempEnabled && plant.lampEnabled && plant.tempLampShutoff
        }
        defaultValue={plant.tempLampMaxTemp}
      />
    </div>
  );
};
