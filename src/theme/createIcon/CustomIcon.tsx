import React, { forwardRef, SVGAttributes } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Property as CSSProperty } from "csstype";

const useStyles = makeStyles<
  Theme,
  {
    color: CSSProperty.Color;
    width: CSSProperty.Width;
    height: CSSProperty.Height;
  }
>(() => ({
  icon: ({ color, width, height }) => ({
    width,
    height,
    color,
    display: "inline-block",
    lineHeight: "1em",
    flexShrink: 0,
  }),
}));

export type IconProps = Omit<
  SVGAttributes<SVGElement>,
  "width" | "height" | "color"
> & {
  color?: CSSProperty.Color;
  width?: CSSProperty.Width;
  height?: CSSProperty.Height;
};

const fallbackIcon = {
  path: (
    <g stroke="currentColor" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        fill="none"
        d="M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      />
      <path
        fill="currentColor"
        strokeLinecap="round"
        d="M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      />
      <circle fill="none" strokeMiterlimit="10" cx="12" cy="12" r="11.25" />
    </g>
  ),
  viewBox: "0 0 24 24",
};

export const CustomIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {
    viewBox,
    color = "currentColor",
    focusable = "false",
    width = "1em",
    height = "1em",
    className,
    children,
    ...rest
  } = props;

  const styles = useStyles({ color, width, height });
  const _path = (children ?? fallbackIcon.path) as React.ReactNode;
  const _viewBox = viewBox ?? fallbackIcon.viewBox;

  return (
    <svg
      ref={ref}
      focusable={focusable}
      className={`${styles.icon} ${className}`}
      viewBox={_viewBox}
      {...rest}
    >
      {_path}
    </svg>
  );
});

CustomIcon.displayName = "Icon";

export default CustomIcon;
