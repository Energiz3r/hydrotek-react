import React, { useState } from "react";
import { styles as parentStyles } from "../DeviceSettings.css";
import { styles } from "./DeviceGroup.css";
import { ReactComponent as SvgMicrochip } from "../../../Icons/regular/microchip.svg";
import { ReactComponent as SvgCaretDown } from "../../../Icons/regular/caret-down.svg";
import { ReactComponent as SvgCaretRight } from "../../../Icons/regular/caret-right.svg";
import { DeviceLabelInput } from "../../Inputs/DeviceLabelInput/DeviceLabelInput";
import { Label } from "../Label/Label";
import { DateField } from "../DateField/DateField";
import { deviceType, plantType } from "../types";
import { Switch } from "../../Switch/Switch";
import { IntegerInput } from "../../Inputs/IntegerInput/IntegerInput";
import { PlantGroup } from "../PlantGroup/PlantGroup";
import { iconProps } from "../iconProps";

interface DeviceGroupProps {
  deviceProp: deviceType;
  handleSetDevice: (device: deviceType, deviceIndex: number) => void;
  deviceIndex: number;
}

export const DeviceGroup = ({
  deviceProp,
  handleSetDevice,
  deviceIndex,
}: DeviceGroupProps) => {
  const [isVisible, setIsVisible] = useState(deviceIndex === 0);
  const handleDeviceClick = () => {
    setIsVisible(!isVisible);
  };
  const [device, setDevice] = useState(deviceProp);
  const handleDeviceChange = (newDeviceProps: any) => {
    const newDevice = { ...device, ...newDeviceProps };
    setDevice(newDevice);
    handleSetDevice(newDevice, deviceIndex);
  };
  const handleSetPlant = (
    newPlant: plantType,
    deviceIndex: number,
    plantIndex: number
  ) => {
    const newDevice = {
      ...device,
      devicePlants: device.devicePlants.map((plant, i) => {
        if (i === plantIndex) return newPlant;
        return plant;
      }),
    };
    handleDeviceChange(newDevice);
  };
  return (
    <div className={parentStyles.container}>
      <div
        className={`${parentStyles.optionContainer} ${styles.deviceLabelContainer}`}
        onClick={() => handleDeviceClick()}
      >
        <SvgMicrochip {...iconProps} />
        <DeviceLabelInput
          onChange={(text) => handleDeviceChange({ deviceLabel: text })}
          defaultLabel={device.deviceLabel}
        />
        {isVisible ? (
          <SvgCaretDown {...iconProps} />
        ) : (
          <SvgCaretRight {...iconProps} />
        )}
      </div>
      {isVisible ? (
        <>
          <div className={parentStyles.optionContainer}>
            <Label tooltip="The last time the device successfully connected to the internet">
              Last Seen Online
            </Label>
            <DateField lastSeenTimestamp={device.lastSeenTimestamp} />
          </div>
          <div className={parentStyles.optionContainer}>
            <Label tooltip="Controls whether the device uploads sensor readings at all">
              Enable Online Logging
            </Label>
            <Switch
              onClick={() =>
                handleDeviceChange({ loggingEnabled: !device.loggingEnabled })
              }
              isOn={device.loggingEnabled}
            />
          </div>
          <div className={parentStyles.optionContainer}>
            <Label tooltip="Frequency, in minutes, of how often to upload status to server">
              Upload frequency (mins)
            </Label>
            <IntegerInput
              onChange={(value) =>
                handleDeviceChange({ uploadFrequency: value })
              }
              enabled={device.loggingEnabled}
              defaultValue={device.uploadFrequency}
              maxValue={60}
            />
          </div>
          {device.devicePlants.map((plant, i) => (
            <PlantGroup
              key={i}
              plantProp={plant}
              handleSetPlant={handleSetPlant}
              deviceIndex={deviceIndex}
              plantIndex={i}
              loggingEnabled={device.loggingEnabled}
            />
          ))}
        </>
      ) : null}
    </div>
  );
};
