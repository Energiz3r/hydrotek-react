import { colors } from "./Colors";
import { ThemeTypography } from "../ThemeTypography";

export const typography: ThemeTypography = {
  fontFamily: ['"Roboto"', "sans-serif"].join(","),
  h1: {
    fontSize: "2.625rem",
    lineHeight: "2.875rem",
    fontWeight: "700",
  },
  h2: {
    fontSize: "2rem",
    lineHeight: "2.25rem",
    fontWeight: "700",
  },
  h3: {
    fontSize: "1.5rem",
    lineHeight: "2rem",
    fontWeight: "700",
  },
  h4: {
    fontSize: "1.375rem",
    lineHeight: "1.75rem",
    fontWeight: "700",
  },
  h5: {
    fontSize: "1.25rem",
    lineHeight: "1.5rem",
    fontWeight: "700",
  },
  h6: {
    fontSize: "1.125rem",
    lineHeight: "1.375rem",
    fontWeight: "700",
  },
  small: {
    fontSize: "0.875rem",
    lineHeight: "1.125rem",
    color: colors.primary.neutral,
  },
  large: {
    fontSize: "1.5rem",
    lineHeight: "1.875rem",
    color: colors.primary.dark,
  },
  p: {
    fontSize: "1rem",
    lineHeight: "1.25rem",
    color: colors.primary.dark,
  },
  button: {
    fontSize: "1.125rem",
    lineHeight: "1",
    color: colors.primary.dark,
    fontWeight: "700",
    textTransform: "none",
  },
  sectionTitle: {
    fontSize: "1.75rem",
    lineHeight: "1.5rem",
    color: colors.primary.dark,
    letterSpacing: "-0.13125rem",
  },
  a: {
    color: colors.primary.dark,
    "&:hover": {
      color: colors.primary.dark,
      cursor: "pointer",
    },
    "&:visited": {
      color: colors.primary.dark,
    },
  },
};