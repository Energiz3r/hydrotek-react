import React, { useState } from "react";

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
        style={{
          zIndex: "999",
          position: "fixed",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          transition: "all 200ms",
          visibility: copiedVisible ? "visible" : "hidden",
          opacity: copiedVisible ? 1 : 0,
        }}
      >
        Success / Copied: {copiedText}
      </div>
    </React.Fragment>
  );
};
