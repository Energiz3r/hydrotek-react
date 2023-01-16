import React from "react";
import { Menu } from "./Menu";
import type { ComponentStory } from "@storybook/react";

const options = {
  title: "Components/Menu",
  component: Menu,
};

export default options;

const Template: ComponentStory<typeof Menu> = (args) => <Menu />;

export const Default = Template.bind({});
