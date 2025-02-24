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
