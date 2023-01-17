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

export const emailValidate = (email: string): boolean => {
  if (
    !email ||
    email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    return true;
  } else return false;
};

export const integerValidate = (
  value: number,
  max: number,
  min: number = 1
): number => {
  const intVal: number =
    typeof value === "string" ? parseInt(value) || 0 : value;
  return value === 0 ? min : intVal > min ? Math.min(intVal, max) : min;
};
export const floatValidate = (
  value: number | string,
  max: number,
  min: number = 1
): number => {
  let floatVal: number =
    typeof value === "string" ? parseFloat(value) || 0 : value;
  floatVal =
    floatVal === 0 ? min : floatVal > min ? Math.min(floatVal, max) : min; //1 dec place
  return parseFloat(floatVal.toFixed(1));
};
export const textValidate = (value: string, maxLength = 255) => {
  return value.substring(0, maxLength);
};
