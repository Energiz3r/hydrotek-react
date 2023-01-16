import React, { useState } from "react";
import { styles } from "./DeviceSettings.css";
import { Switch } from "../Switch/Switch";
import { EmailInput } from "../Inputs/EmailInput/EmailInput";
import { dummyDevices } from "../../utils/dummyDevices";
import {
  addUiBoolsToDeviceArray,
  deviceSettingsUiType,
  setVisibility,
} from "./addUiBoolsToDeviceArray";

interface DeviceSettingsProps {}

type visibilityType = Array<{
  visible: boolean;
  plants: Array<{
    visible: boolean;
  }>;
}>;

export const DeviceSettings = ({}: DeviceSettingsProps) => {
  const [emailAddress, setEmailAddress] = useState("tim.eastwood@hotmail.com");
  const [isEmailAlertsEnabled, setIsEmailAlertsEnabled] = useState(true);
  const [devices, setDevices] = useState<deviceSettingsUiType>(
    addUiBoolsToDeviceArray(dummyDevices)
  );

  const handleEmailChange = (email: string, valid: boolean) => {
    if (valid) setEmailAddress(email);
  };

  const integerValidate = (value: number, max: number, min = 1) => {
    const intVal = parseInt(value) || 0;
    return value === "" ? min : intVal > min ? Math.min(intVal, max) : min;
  };
  const floatValidate = (value: number, max: number, min = 1) => {
    const floatVal = parseFloat(value) || 0;
    return value === ""
      ? min
      : floatVal > min
      ? Math.min(floatVal, max)
      : min.toFixed(1); //1 dec place
  };
  const textValidate = (value: string, maxLength = 255) => {
    return value.substring(0, maxLength);
  };

  return (
    <div className={styles.content}>
      <h2>Global Settings</h2>
      <div className={`${styles.container} ${styles.containerAlerts}`}>
        <div className={styles.optionContainer}>
          <label data-tip="Enable sending email alerts (for all devices)">
            Email alerts - {isEmailAlertsEnabled ? "enabled" : "disabled"}
          </label>
          <Switch
            onClick={setIsEmailAlertsEnabled}
            isOn={isEmailAlertsEnabled}
          />
        </div>
        <div className={`${styles.optionContainer} ${styles.splitRow}`}>
          <label data-tip="Address to send device alerts to (if enabled)">
            Email address - {emailAddress}
          </label>
          <EmailInput
            onChange={handleEmailChange}
            enabled={isEmailAlertsEnabled}
            defaultEmailAddress={emailAddress}
          />
        </div>
      </div>

      <h2>Device Settings</h2>

      {devices.map((device, deviceIndex) => {
        return (
          <div className={styles.container} key={deviceIndex}>
            <div
              className={`${styles.optionContainer} ${styles.deviceLabelContainer}`}
            ></div>
          </div>
        );
      })}
    </div>
  );
};
