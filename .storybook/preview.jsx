import {
  GlobalFonts,
  GlobalStyles,
  ThemeName,
  ThemeProvider,
} from "../src/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={ThemeName.dark}>
      <GlobalFonts />
      <GlobalStyles>
        <div>./storybook/preview.jsx: applied global styles / theme</div>
        <Story />
      </GlobalStyles>
    </ThemeProvider>
  ),
];
