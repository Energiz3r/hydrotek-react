import React, { useState } from "react";
import { styles } from "./TextInput.css";
import { textValidate } from "../../../utils/utils";

interface TextInputProps {
  onChange: (value: string) => void;
  enabled?: boolean;
  placeholder?: string;
  defaultValue?: string;
  className?: string;
}

export const TextInput = ({
  onChange,
  enabled = true,
  placeholder = "",
  defaultValue,
  className,
}: TextInputProps) => {
  const [value, setValue] = useState(defaultValue ? defaultValue : "");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = textValidate(e.target.value);
    setValue(text);
    onChange(text);
  };
  return (
    <>
      <input
        className={`${styles.input} ${className ? className : ""}`}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={!enabled}
      ></input>
    </>
  );
};
