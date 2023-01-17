import React, { useState } from "react";
import { styles } from "./DeviceSettings.css";
import { dummyDevices } from "../../utils/dummyDevices";
import { deviceType } from "./types";
import { DeviceGroup } from "./DeviceGroup/DeviceGroup";
import { Label } from "./Label/Label";
import { Switch } from "../Switch/Switch";
import { EmailInput } from "../Inputs/EmailInput/EmailInput";

interface DeviceSettingsProps {}

export const DeviceSettings = ({}: DeviceSettingsProps) => {
  const [emailAddress, setEmailAddress] = useState("demo@noobs.wtf");
  const [isEmailAlertsEnabled, setIsEmailAlertsEnabled] = useState(true);
  const [devices, setDevices] = useState<Array<deviceType>>(dummyDevices);
  const handleEmailChange = (email: string, valid: boolean) => {
    if (valid) setEmailAddress(email);
  };
  const handleSetDevice = (newDevice: deviceType, deviceIndex: number) => {
    setDevices(
      devices.map((device, i) => {
        if (i === deviceIndex) return newDevice;
        return device;
      })
    );
  };
  return (
    <div className={styles.content}>
      <h2>Global Settings</h2>
      <div className={`${styles.container} ${styles.containerAlerts}`}>
        <div className={styles.optionContainer}>
          <Label tooltip="Enable sending email alerts (for all devices)">
            Email alerts - {isEmailAlertsEnabled ? "enabled" : "disabled"}
          </Label>
          <Switch
            onClick={() => setIsEmailAlertsEnabled(!isEmailAlertsEnabled)}
            isOn={isEmailAlertsEnabled}
          />
        </div>
        <div className={`${styles.optionContainer} ${styles.splitRow}`}>
          <Label tooltip="Address to send device alerts to (if enabled)">
            Email address
          </Label>
          <EmailInput
            onChange={handleEmailChange}
            enabled={isEmailAlertsEnabled}
            defaultEmailAddress={emailAddress}
          />
        </div>
      </div>

      <h2>Device Settings</h2>

      {devices.map((device, deviceIndex) => (
        <DeviceGroup
          key={deviceIndex}
          deviceProp={device}
          handleSetDevice={handleSetDevice}
          deviceIndex={deviceIndex}
        />
      ))}
    </div>
  );
};
