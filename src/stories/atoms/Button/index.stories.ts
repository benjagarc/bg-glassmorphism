import Button from "@components/Button";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      table: {
        defaultValue: {
          summary: "primary",
        },
      },
      options: ["primary", "secondary", "success", "danger", "warning", "info"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Colors: Story = {
  args: {
    children: "Hello world",
  },
};

export const Sizes: Story = {
  args: {
    children: "Hello world",
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};
