import React, { useState } from "react";
import { styles } from "../IntegerInput/IntegerInput.css";
import { floatValidate } from "../../../utils/utils";

interface IntegerInputProps {
  onChange: (value: number) => void;
  enabled?: boolean;
  placeholder?: string;
  defaultValue?: number;
  maxValue?: number;
  className?: string;
}

export const FloatInput = ({
  onChange,
  enabled = true,
  placeholder = "eg. 1",
  defaultValue,
  maxValue = 99,
  className,
}: IntegerInputProps) => {
  const [value, setValue] = useState(defaultValue ? defaultValue : 0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = floatValidate(parseFloat(e.target.value), maxValue);
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
