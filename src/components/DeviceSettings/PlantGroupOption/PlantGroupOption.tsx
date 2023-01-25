import React, { useState } from "react";
import { styles as parentStyles } from "../DeviceSettings.css";
import { styles } from "./PlantGroupOption.css";
import { ReactComponent as SvgLeaf } from "../../../Icons/regular/leaf.svg";
import { ReactComponent as SvgCaretDown } from "../../../Icons/regular/caret-down.svg";
import { ReactComponent as SvgCaretRight } from "../../../Icons/regular/caret-right.svg";
import { plantType } from "../types";
import { iconProps } from "../iconProps";

import { DeviceLabelInput } from "../../Inputs/DeviceLabelInput/DeviceLabelInput";
import { Label } from "../Label/Label";
import { DateField } from "../DateField/DateField";
import { Switch } from "../../Switch/Switch";
import { IntegerInput } from "../../Inputs/IntegerInput/IntegerInput";

interface PlantGroupOptionProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  title: string;
}

export const PlantGroupOption = ({
  children,
  icon,
  title,
}: PlantGroupOptionProps) => {
  const [isVisible, setIsVisible] = useState(title === "Nutrient Pump");
  const handleGroupClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div
        className={`${parentStyles.optionContainer} ${parentStyles.labelContainer}`}
        onClick={handleGroupClick}
      >
        {icon}
        <p className={parentStyles.subTitle}>{title}</p>
        {isVisible ? (
          <SvgCaretDown {...iconProps} />
        ) : (
          <SvgCaretRight {...iconProps} />
        )}
      </div>
      {isVisible ? (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
        </div>
      ) : null}
    </>
  );
};
