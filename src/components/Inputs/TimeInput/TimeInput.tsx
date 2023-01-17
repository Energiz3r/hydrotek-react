import React, { useState } from "react";
import { styles } from "../EmailInput/EmailInput.css";
import "./TimeInput.css";

interface IntegerInputProps {
  onChange: (value: string) => void;
  enabled?: boolean;
  defaultValue?: string;
  className?: string;
}

export const TimeInput = ({
  onChange,
  enabled = true,
  defaultValue,
  className,
}: IntegerInputProps) => {
  const [value, setValue] = useState(defaultValue ? defaultValue : "");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
    onChange(val);
  };
  return (
    <>
      <input
        className={`${styles.input} ${className ? className : ""}`}
        type="time"
        value={value}
        disabled={!enabled}
        onChange={handleChange}
      ></input>
    </>
  );
};
