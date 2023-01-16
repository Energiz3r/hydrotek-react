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
