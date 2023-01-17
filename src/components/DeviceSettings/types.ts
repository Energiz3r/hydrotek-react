export type plantType = {
  plantName: string;

  tempEnabled: boolean;
  tempLampShutoff: boolean;
  tempLampMaxTemp: number;
  tempHiEmail: boolean;
  tempHiAlarm: boolean;
  tempHiTemp: number;
  tempLoEmail: boolean;
  tempLoAlarm: boolean;
  tempLoTemp: number;

  lampEnabled: boolean;
  lampHeaterMode: boolean;
  lampHeaterTemp: number;
  lampStartTimeV: string;
  lampEndTimeV: string;
  lampFlowerMode: boolean;
  lampStartTimeF: string;
  lampEndTimeF: string;
  lampInvertLogic: boolean;

  pumpEnabled: boolean;
  pumpFlowMode: boolean;
  pumpFlowMl: number;
  pumpFlowEmail: boolean;
  pumpFlowAlarm: boolean;
  pumpMaxDurationSec: number;
  pumpFrequencyMins: number;
  pumpInvertLogic: boolean;

  floatEnable: boolean;
  floatAlarm: boolean;
  floatEmail: boolean;
  floatPumpShutoff: boolean;
  floatInvertLogic: boolean;

  flowEnable: boolean;
};

export type deviceType = {
  deviceLabel: string;
  lastSeenTimestamp: number;
  loggingEnabled: boolean;
  uploadFrequency: number;
  lampIsOn: boolean;
  wasteTankFull: boolean;
  devicePlants: Array<plantType>;
};
