import React, { useState } from "react";
import { styles as parentStyles } from "../DeviceSettings.css";
import { styles } from "./PlantGroup.css";
import { ReactComponent as SvgLeaf } from "../../../Icons/regular/leaf.svg";
import { ReactComponent as SvgCaretDown } from "../../../Icons/regular/caret-down.svg";
import { ReactComponent as SvgCaretRight } from "../../../Icons/regular/caret-right.svg";
import { ReactComponent as SvgThermometerHalf } from "../../../Icons/regular/thermometer-half.svg";
import { ReactComponent as SvgLightbulbOn } from "../../../Icons/regular/lightbulb-on.svg";
import { ReactComponent as SvgWater } from "../../../Icons/regular/water.svg";
import { plantType } from "../types";
import { iconProps } from "../iconProps";

import { DeviceLabelInput } from "../../Inputs/DeviceLabelInput/DeviceLabelInput";
import { PlantGroupOption } from "../PlantGroupOption/PlantGroupOption";

import { TempEnabled } from "../Options/Temperature/TempEnabled";
import { TempLampShutoff } from "../Options/Temperature/TempLampShutoff";
import { TempHiAlarm } from "../Options/Temperature/TempHiAlarm";
import { TempLampMaxTemp } from "../Options/Temperature/TempLampMaxTemp";
import { TempHiEmail } from "../Options/Temperature/TempHiEmail";
import { TempHiTemp } from "../Options/Temperature/TempHiTemp";
import { TempLoEmail } from "../Options/Temperature/TempLoEmail";
import { TempLoAlarm } from "../Options/Temperature/TempLoAlarm";
import { TempLoTemp } from "../Options/Temperature/TempLoTemp";
import { LampEnabled } from "../Options/Lamp/LampEnabled";
import { LampStartTimeV } from "../Options/Lamp/LampStartTimeV";
import { LampFlowerMode } from "../Options/Lamp/LampFlowerMode";
import { LampStartTimeF } from "../Options/Lamp/LampStartTimeF";
import { LampEndTimeF } from "../Options/Lamp/LampEndTimeF";
import { LampEndTimeV } from "../Options/Lamp/LampEndTimeV";
import { LampInvertLogic } from "../Options/Lamp/LampInvertLogic";
import { PumpEnabled } from "../Options/Pump/PumpEnabled";
import { PumpFlowMode } from "../Options/Pump/PumpFlowMode";
import { PumpFlowMl } from "../Options/Pump/PumpFlowMl";
import { PumpFlowEmail } from "../Options/Pump/PumpFlowEmail";
import { PumpFlowAlarm } from "../Options/Pump/PumpFlowAlarm";
import { PumpMaxDurationSec } from "../Options/Pump/PumpMaxDurationSec";

interface PlantGroupProps {
  plantProp: plantType;
  handleSetPlant: (
    plant: plantType,
    deviceIndex: number,
    plantIndex: number
  ) => void;
  deviceIndex: number;
  plantIndex: number;
  loggingEnabled: boolean;
}

export const PlantGroup = ({
  plantProp,
  handleSetPlant,
  deviceIndex,
  plantIndex,
  loggingEnabled,
}: PlantGroupProps) => {
  const [isVisible, setIsVisible] = useState(
    deviceIndex === 0 && plantIndex === 0
  );
  const handlePlantClick = () => {
    setIsVisible(!isVisible);
  };
  const [plant, setPlant] = useState(plantProp);
  const handlePlantChange = (newPlantProps: any) => {
    const newPlant = { ...plant, ...newPlantProps };
    setPlant(newPlant);
    handleSetPlant(newPlant, deviceIndex, plantIndex);
  };

  const optProps = {
    plant,
    handlePlantChange,
  };

  return (
    <div
      className={parentStyles.subContainer}
      onClick={() => handlePlantClick()}
    >
      <div
        className={`${parentStyles.optionContainer} ${parentStyles.labelContainer}`}
      >
        <SvgLeaf {...iconProps} />
        <DeviceLabelInput
          onChange={(text) => handlePlantChange({ plantName: text })}
          defaultLabel={plant.plantName}
        />
        {isVisible ? (
          <SvgCaretDown {...iconProps} />
        ) : (
          <SvgCaretRight {...iconProps} />
        )}
      </div>
      {isVisible ? (
        <>
          <PlantGroupOption
            icon={<SvgThermometerHalf {...iconProps} />}
            title="Temperature / Humidity Sensor"
          >
            <TempEnabled {...optProps} />
            <TempLampShutoff {...optProps} />
            <TempLampMaxTemp {...optProps} />
            <TempHiEmail {...optProps} loggingEnabled={loggingEnabled} />
            <TempHiAlarm {...optProps} />
            <TempHiTemp {...optProps} />
            <TempLoEmail {...optProps} loggingEnabled={loggingEnabled} />
            <TempLoAlarm {...optProps} />
            <TempLoTemp {...optProps} />
          </PlantGroupOption>
          <PlantGroupOption
            icon={<SvgLightbulbOn {...iconProps} />}
            title="Grow Lamp"
          >
            <LampEnabled {...optProps} />
            <LampStartTimeV {...optProps} />
            <LampEndTimeV {...optProps} />
            <LampFlowerMode {...optProps} />
            <LampStartTimeF {...optProps} />
            <LampEndTimeF {...optProps} />
            <LampInvertLogic {...optProps} />
          </PlantGroupOption>
          <PlantGroupOption
            icon={<SvgWater {...iconProps} />}
            title="Nutrient Pump"
          >
            <PumpEnabled {...optProps} />
            <PumpFlowMode {...optProps} />
            <PumpFlowMl {...optProps} />
            <PumpFlowEmail {...optProps} loggingEnabled={loggingEnabled} />
            <PumpFlowAlarm {...optProps} />
            <PumpMaxDurationSec {...optProps} />
          </PlantGroupOption>
        </>
      ) : null}
    </div>
  );
};
