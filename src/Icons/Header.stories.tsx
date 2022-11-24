import React from "react";
import { IconList } from "./IconLists";
import type { ComponentStory } from "@storybook/react";

const options = {
  title: "Components/IconList",
  component: IconList,
};

export default options;

const Template: ComponentStory<typeof IconList> = (args) => <IconList />;

export const Default = Template.bind({});
Default.args = {};
