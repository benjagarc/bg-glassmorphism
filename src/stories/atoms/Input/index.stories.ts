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
      option: ["text", "number", "email", "password"],
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
