import React, { useState } from "react";
import { styles } from "./DeviceLabelInput.css";
import { textValidate } from "../utils";

interface DeviceLabelInputProps {
  onChange: (text: string) => void;
  enabled?: boolean;
  placeholder?: string;
  defaultLabel?: string;
  className?: string;
}

export const DeviceLabelInput = ({
  onChange,
  enabled = true,
  placeholder = "Device Label",
  defaultLabel,
  className,
}: DeviceLabelInputProps) => {
  const [text, setText] = useState(defaultLabel ? defaultLabel : "");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = textValidate(e.target.value);
    setText(text);
    onChange(text);
  };
  return (
    <>
      <input
        className={`${styles.input} ${className ? className : ""}`}
        type="text"
        placeholder={placeholder}
        data-tip="A friendly name to identify the device, eg. 'Front Room', or 'Left Tent'"
        value={text}
        disabled={!enabled}
        onClick={(e) => {
          e.stopPropagation();
        }}
        onChange={handleChange}
      ></input>
    </>
  );
};
