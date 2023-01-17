import { plantType } from "../../types";
import { styles as parentStyles } from "../../DeviceSettings.css";
import { Label } from "../../Label/Label";
import { FloatInput } from "../../../Inputs/FloatInput/FloatInput";
import React from "react";

export const LampHeaterTemp = ({
  plant,
  handlePlantChange,
}: {
  plant: plantType;
  handlePlantChange: (newPlantProps: any) => void;
}) => {
  return (
    <div className={parentStyles.optionContainer}>
      <Label tooltip="Target temp when using lamp as heater">
        Heater target temp
      </Label>
      <FloatInput
        onChange={(value) => handlePlantChange({ lampHeaterTemp: value })}
        maxValue={99}
        enabled={
          (plant.lampEnabled && plant.lampHeaterMode) || plant.tempEnabled
        }
        defaultValue={plant.lampHeaterTemp}
      />
    </div>
  );
};
