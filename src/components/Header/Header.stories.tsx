import React from "react";
import { Header } from "./Header";
import type { ComponentStory } from "@storybook/react";

const options = {
  title: "Components/Header",
  component: Header,
};

export default options;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  pageTitle: "Storybook",
};
