import Checkbox from "@components/Switch";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Switch",
  component: Checkbox,
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
  },
} satisfies Meta<typeof Checkbox>;

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
