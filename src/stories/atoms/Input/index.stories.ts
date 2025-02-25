import { Input } from "@components/Input";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      description: "You can choose from four different types of input fields.",
      option: ["text", "number", "email", "password"],
      table: {
        defaultValue: {
          summary: "text",
        },
        type: {
          summary: `text | number | email | password`,
        },
      },
    },
    error: {
      control: { type: "boolean" },
      description: "You can set your input field to red",
    },
    dark: {
      control: { type: "boolean" },
      description: "You can set your input field to a dark theme",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "input",
  },
};

export const Error: Story = {
  args: {
    name: "input",
    error: true,
  },
};

export const Dark: Story = {
  args: {
    name: "input",
    dark: true,
  },
};
