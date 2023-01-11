import { StyleRule } from "@vanilla-extract/css/dist/declarations/src/types";

type ScreenSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
type Direction = "min" | "max";

const sizePx = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1400,
  xxl: 1920,
} as const;

const createMediaCondition = (size: ScreenSize, direction: Direction) =>
  `(${direction}-width: ${sizePx[size]}px)`;

export const createMediaQuery = (
  size: ScreenSize,
  direction: Direction
): string => {
  return `screen and ${createMediaCondition(size, direction)}`;
};

const buildMediaQueryFunc =
  (size: ScreenSize, direction: Direction) => (style: StyleRule) => ({
    "@media": {
      [createMediaQuery(size, direction)]: style,
    },
  });

const buildCombinedMediaQueryFunc =
  (minSize: ScreenSize, maxSize: ScreenSize) => (style: StyleRule) => ({
    "@media": {
      [`${createMediaQuery(minSize, "min")} and ${createMediaCondition(
        maxSize,
        "max"
      )}`]: style,
    },
  });

const buildResponsiveStyle = (direction: Direction) => ({
  xs: buildMediaQueryFunc("xs", direction),
  sm: buildMediaQueryFunc("sm", direction),
  md: buildMediaQueryFunc("md", direction),
  lg: buildMediaQueryFunc("lg", direction),
  xl: buildMediaQueryFunc("xl", direction),
  xxl: buildMediaQueryFunc("xxl", direction),
});

const desktop = (style: StyleRule) => {
  return {
    "@media": {
      "screen and (min-width: 768px)": {
        ...style,
      },
    },
  };
};

export const breakpoints = {
  desktop,
  min: buildResponsiveStyle("min"),
  max: buildResponsiveStyle("max"),
  between: buildCombinedMediaQueryFunc,
};
