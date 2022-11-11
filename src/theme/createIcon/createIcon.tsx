import React from "react";
import { CustomIcon, IconProps } from "./CustomIcon";

interface CreateIconOptions {
  viewBox?: string;
  path?: React.ReactElement | React.ReactElement[];
  d?: string;
  displayName?: string;
  defaultProps?: IconProps;
}

export const createIcon = (
  options: CreateIconOptions
): React.VFC<IconProps> => {
  const {
    viewBox = "0 0 24 24",
    d: pathDefinition,
    displayName,
    defaultProps = {},
  } = options;

  const path = React.Children.toArray(options.path);

  const Component = (props: IconProps) => (
    <CustomIcon viewBox={viewBox} {...defaultProps} {...props}>
      {path.length ? path : <path fill="currentColor" d={pathDefinition} />}
    </CustomIcon>
  );

  Component.displayName = displayName;

  return Component;
};
