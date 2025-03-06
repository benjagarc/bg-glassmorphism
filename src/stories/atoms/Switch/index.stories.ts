import Switch from "@components/Switch";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description:
        "You can choose from six different color variants for the button.",
      table: {
        defaultValue: {
          summary: "primary",
        },
        type: {
          summary: `primary |  secondary | success | danger | warning |  info`,
        },
      },
      options: ["primary", "secondary", "success", "danger", "warning", "info"],
      control: { type: "select" },
    },
    id: {
      control: { type: "text" },
      description: "A unique identifier for the switch component.",
      table: {
        defaultValue: { summary: "" },
      },
    },
    color: {
      description: "The color of the switch",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "color" },
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    id: "name",
  },
};

export const disabled: Story = {
  args: {
    id: "check",
    disabled: true,
  },
};

export const dark: Story = {
  args: {
    id: "checkbox",
    dark: true,
  },
};

export const color: Story = {
  args: {
    id: "checkbox",
    color: "green",
  },
};
