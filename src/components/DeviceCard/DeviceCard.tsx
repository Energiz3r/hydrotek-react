import React from "react";
import * as styles from "./DeviceCard.css";
import { IconStatus } from "./IconStatus/IconStatus";
import { Card } from "../Card/Card";
import { monthDiff, getFriendlyFromTimestamp } from "../../utils/dateUtils";

const icon = {
  chip: "fas fa-microchip",
  leaf: "fas fa-leaf",
  lightbulb: "far fa-lightbulb",
  thermometer: "fas fa-thermometer-half",
  droplet: "fas fa-tint",
  liquid: "fas fa-fill-drip",
  water: "fas fa-water",
  signal: "fas fa-signal",
  saving: "fas fa-spinner fa-spin",
  tick: "fas fa-check",
};

export const DeviceCard = ({ device }: any) => {
  return (
    <Card>
      <div className={styles.device}>
        <h2 className={styles.deviceLabel}>{device.deviceLabel}</h2>

        <div className={styles.iconContainer}>
          <IconStatus
            Icon={icon.leaf}
            label={`${device.devicePlants.length} ${
              device.devicePlants.length > 1 ? "plants" : "plant"
            }`}
            isDouble={device.devicePlants.length > 1}
          />
          <IconStatus
            Icon={icon.lightbulb}
            isLightOn={device.lampIsOn}
            label={`OK${device.lampIsOn ? ", ON" : ""}`}
          />
          <IconStatus Icon={icon.thermometer} label={"22.5°C"} />
          <IconStatus Icon={icon.droplet} label={"OK"} />
          <IconStatus
            Icon={icon.liquid}
            label={device.wasteTankFull ? "FULL" : "OK"}
            isError={device.wasteTankFull}
          />
          <IconStatus
            Icon={icon.water}
            label={`${
              Math.round((Math.random() * (6.2 - 2.5) + 2.5) * 10) / 10
            }L/day`}
          />
          <IconStatus
            Icon={icon.signal}
            isError={monthDiff("now", device.lastSeenTimestamp) > 0}
            label={
              monthDiff("now", device.lastSeenTimestamp) > 0
                ? "Not Online"
                : "Online"
            }
          />
          <div className={styles.lastSeenContainer}>
            Last Seen: {getFriendlyFromTimestamp(device.lastSeenTimestamp)}
          </div>
        </div>
      </div>
    </Card>
  );
};
