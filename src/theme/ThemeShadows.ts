const ShadowToken = {
  light: { boxShadow: "", textShadow: "" },
  dark: { boxShadow: "", textShadow: "" },
};

export const ThemeShadowToken = {
  primary: ShadowToken,
};

export type Shadow = typeof ShadowToken;
export type ThemeShadows = typeof ThemeShadowToken;
