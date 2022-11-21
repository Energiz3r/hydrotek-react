import React, { useState } from "react";
import { style } from "@vanilla-extract/css";
import { classNames } from "../utils/utils";

const styles = {
  container: style({
    zIndex: "999",
    position: "fixed",
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
    visibility: "hidden",
    opacity: 0,
    transition: "all 200ms",
  }),
  visible: style({
    visibility: "visible",
    opacity: 1,
  }),
};

export interface ClickToCopyProps {
  content: string;
  children: React.ReactElement;
}

export const ClickToCopy = ({
  content,
  children,
}: ClickToCopyProps): JSX.Element => {
  const [copiedVisible, setCopiedVisible] = useState(false);
  const [copiedText, setCopiedText] = useState("");

  const copyToClipboard = async () => {
    setCopiedText(content);
    const el = document.createElement("textarea");
    el.value = content;
    document.body.appendChild(el);
    el.select();
    await navigator.clipboard.writeText(content);
    setCopiedVisible(true);
    document.body.removeChild(el);
    setTimeout(() => {
      setCopiedVisible(false);
    }, 2000);
  };

  return (
    <React.Fragment>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          onClick: copyToClipboard,
          style: { cursor: "pointer" },
        })
      )}
      <div
        className={classNames([
          styles.container,
          copiedVisible && styles.visible,
        ])}
      >
        Success / Copied: {copiedText}
      </div>
    </React.Fragment>
  );
};
