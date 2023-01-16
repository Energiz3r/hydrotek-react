import { deviceSettingsType } from "../../utils/dummyDevices";

export type deviceSettingsUiType = deviceSettingsType &
  Array<{
    deviceVisible: boolean;
    devicePlants: Array<{
      plantVisible: boolean;
      optionGroupVisibility: {
        temp: boolean;
        lamp: boolean;
        pump: boolean;
        flow: boolean;
      };
    }>;
  }>;

const defaultOptionGroup = {
  optionGroupVisible: false,
};

export const addUiBoolsToDeviceArray = (
  devices: deviceSettingsType
): deviceSettingsUiType => {
  return devices.map((device) => ({
    ...device,
    deviceVisible: false,
    devicePlants: device.devicePlants.map((plant) => ({
      ...plant,
      plantVisible: false,
      optionGroupVisibility: {
        temp: false,
        lamp: false,
        pump: false,
        flow: false,
      },
    })),
  }));
};

export const setVisibility = (
  devices: deviceSettingsUiType,
  visible: boolean,
  level: "device" | "plant" | "optionGroup",
  deviceIndex: number,
  plantIndex: number = 0,
  optionGroupName: "temp" | "lamp" | "pump" | "flow" = "temp"
) => {
  if (level === "device") devices[deviceIndex].deviceVisible = visible;
  if (level === "plant")
    devices[deviceIndex].devicePlants[plantIndex].plantVisible = visible;
  if (level === "optionGroup")
    devices[deviceIndex].devicePlants[plantIndex].optionGroupVisibility[
      optionGroupName
    ] = visible;
  return devices;
};
