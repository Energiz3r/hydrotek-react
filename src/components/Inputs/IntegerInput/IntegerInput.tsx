import React, { useState } from "react";
import { styles } from "./IntegerInput.css";
import { integerValidate } from "../../../utils/utils";

interface IntegerInputProps {
  onChange: (value: number) => void;
  enabled?: boolean;
  placeholder?: string;
  defaultValue?: number;
  maxValue?: number;
  className?: string;
}

export const IntegerInput = ({
  onChange,
  enabled = true,
  placeholder = "eg. 1",
  defaultValue,
  maxValue = 99,
  className,
}: IntegerInputProps) => {
  const [value, setValue] = useState(defaultValue ? defaultValue : 0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = integerValidate(parseInt(e.target.value), maxValue);
    setValue(val);
    onChange(val);
  };
  return (
    <>
      <input
        type="number"
        className={`${styles.input} ${className ? className : ""}`}
        value={value}
        disabled={!enabled}
        placeholder={placeholder}
        onChange={handleChange}
      ></input>
    </>
  );
};
