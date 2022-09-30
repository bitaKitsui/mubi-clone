import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "atoms/Button",
  component: Button,
  argTypes: {
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
    },
    variant: {
      control: "select",
      options: ["text", "contained", "outlined"],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const TextButton = Template.bind({});

TextButton.args = {};

export const ContainedButton = Template.bind({});

ContainedButton.args = {
  variant: "contained",
};

export const OutlinedButton = Template.bind({});

OutlinedButton.args = {
  variant: "outlined",
};
