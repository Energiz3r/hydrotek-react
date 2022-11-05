import React from "react";
import { Card, CardProps } from "./Card";
import type { ComponentStory } from "@storybook/react";
import { ThemeName, ThemeProvider } from "../../theme";

const options = {
  title: "Components/Card",
  component: Card,
};

export default options;

const Template: ComponentStory<typeof Card> = (args: CardProps) => (
  <ThemeProvider theme={ThemeName.dark}>
    <Card isButton={true}>Test Button</Card>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  isButton: true,
};
