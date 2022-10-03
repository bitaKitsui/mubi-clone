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
    color: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "inherit",
        "success",
        "error",
        "info",
        "warning",
      ],
    },
    disabled: {
      control: "boolean",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
} as ComponentMeta<typeof Button>;

const onClick = (): void => console.log("ok");

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} onClick={onClick}>
    Button Component
  </Button>
);

const StartIconTemplate: ComponentStory<typeof Button> = (args) => (
  <Button {...args} startIcon="aaa" onClick={onClick}>
    Button Component
  </Button>
);

const EndIconTemplate: ComponentStory<typeof Button> = (args) => (
  <Button {...args} endIcon="bbb" onClick={onClick}>
    Button Component
  </Button>
);

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

export const StartIconButton = StartIconTemplate.bind({});

StartIconButton.args = {};

export const EndIconButton = EndIconTemplate.bind({});

EndIconButton.args = {};
