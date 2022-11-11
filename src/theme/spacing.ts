const spacingFactor = (factor: number) => {
  return `${1 * factor}rem`;
};

export const spacing = (
  ...args:
    | [number]
    | [number, number]
    | [number, number, number]
    | [number, number, number, number]
): string =>
  args.reduce(
    (prev, current) =>
      prev ? `${prev} ${spacingFactor(current)}` : spacingFactor(current),
    ''
  );
