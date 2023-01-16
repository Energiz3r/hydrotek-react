import React from "react";
import { Switch } from "./Switch";
import type { ComponentStory } from "@storybook/react";

const options = {
  title: "Components/Switch",
  component: Switch,
};

export default options;

const Template: ComponentStory<typeof Switch> = () => <Switch />;

export const Default = Template.bind({});
