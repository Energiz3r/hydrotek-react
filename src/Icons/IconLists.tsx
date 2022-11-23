import React from "react";
import { style } from "@vanilla-extract/css";
import { ClickToCopy } from "./ClickToCopy";
import { icons } from "./IconListsGenerated";
import { palette } from "../theme";

const icon = style({
  border: `1px solid ${palette.border.main}`,
  padding: "16px",
  width: "100%",
  textAlign: "center",
});
const styles = {
  container: style({
    display: "grid",
    gridGap: "16px",
    gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
  }),
  icon,
  selectors: {
    [`${icon}& div`]: style({
      color: palette.border.main,
      fontSize: "12px",
      paddingTop: "16px",
    }),
  },
};

export const IconList = (): JSX.Element => {
  const IconWrapper = ({
    name,
    children,
  }: {
    name?: string;
    children: React.ReactNode;
  }) => {
    const file = name?.replace("Icon", "");
    const path = `import ${name} from 'jb_component_library/components/Icons/${file}';`;
    return (
      <ClickToCopy content={path}>
        <div className={styles.icon}>{children}</div>
      </ClickToCopy>
    );
  };

  return (
    <div className={styles.container}>
      {icons.map((Icon: any, i: number) => (
        <IconWrapper name={Icon.displayName} key={i}>
          <Icon />
          <div>{Icon.displayName}</div>
        </IconWrapper>
      ))}
    </div>
  );
};
