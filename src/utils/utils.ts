export const classNames = (
  classArray: (string | boolean | null | undefined)[]
): string => {
  return classArray
    .filter(
      (value) => Boolean(value) && typeof value === "string" && value.length > 0
    )
    .join(" ")
    .trim();
};
