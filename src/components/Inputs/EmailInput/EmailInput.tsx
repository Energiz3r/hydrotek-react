import React, { useState } from "react";
import { styles } from "./EmailInput.css";
import { emailValidate } from "../../../utils/utils";

interface EmailInputProps {
  onChange: (emailAddress: string, valid: boolean) => void;
  enabled?: boolean;
  placeholder?: string;
  defaultEmailAddress?: string;
  className?: string;
}

export const EmailInput = ({
  onChange,
  enabled = true,
  placeholder = "Email address",
  defaultEmailAddress,
  className,
}: EmailInputProps) => {
  const [isValid, setIsValid] = useState(false);
  const [emailAddress, setEmail] = useState(
    defaultEmailAddress ? defaultEmailAddress : ""
  );
  const [isChanged, setIsChanged] = useState(false);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChanged(true);
    const email = e.target.value;
    const valid = emailValidate(email);
    setIsValid(valid);
    setEmail(email);
    onChange(email, valid);
  };
  return (
    <>
      <input
        className={`${styles.input} ${
          !isValid && enabled && isChanged ? styles.invalid : ""
        } ${className ? className : ""}`}
        type="text"
        placeholder={placeholder}
        value={emailAddress}
        onChange={handleEmailChange}
        disabled={!enabled}
      ></input>
    </>
  );
};
