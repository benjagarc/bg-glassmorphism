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
    children: {
      description: "You can choose whether to display text or pass children.",
      table: {
        type: {
          summary: "string | children",
        },
      },
    },
    outline: {
      control: { type: "boolean" },
      description:
        "You can choose whether to display the button with an outline or not",
      table: {
        type: {
          summary: "true | false",
        },
        defaultValue: {
          summary: "false"
        }
      },
    },
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
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "You can choose from three different button sizes.",
      table: {
        defaultValue: {
          summary: "medium",
        },
        type: {
          summary: "small | medium | large",
        },
      },
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
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

export const Outline: Story = {
  args: {
    children: "Hello world",
    variant: "primary",
    outline: true,
  },
};
