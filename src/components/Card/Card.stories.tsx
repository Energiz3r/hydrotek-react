import React from "react";
import { Card, CardProps } from "./Card";
import type { ComponentStory } from "@storybook/react";

const options = {
  title: "Components/Card",
  component: Card,
};

export default options;

const Template: ComponentStory<typeof Card> = (args: CardProps) => (
  <Card>Test Button</Card>
);

export const Default = Template.bind({});
Default.args = {
  isButton: true,
};
