import { style } from "@vanilla-extract/css";
import { palette } from "../theme";

const icon = style({
  border: `1px solid ${palette.border.main}`,
  padding: "16px",
  width: "100%",
  textAlign: "center",
});
export const styles = {
  container: style({
    backgroundColor: "white",
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
