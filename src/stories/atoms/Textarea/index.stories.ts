import { Textarea } from "@components/Textarea";
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { expect, jest } from "@storybook/jest";
import customClass from "../Button/index.module.scss";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      description: "You can choose whether to disable the textarea or not.",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    error: {
      control: { type: "boolean" },
      description: "You can set your textarea field to red",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    dark: {
      control: { type: "boolean" },
      description: "You can set your textarea field to a dark theme",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    onChange: {
      description: "Function to call when the textarea changes",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    onBlur: {
      description: "Function to call when the textarea loses focus",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    id: {
      control: { type: "text" },
      description: "A unique identifier for the textarea component.",
      table: {
        defaultValue: { summary: "" },
      },
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "input",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const defaultInput = await canvas.getByRole("textbox");
    await expect(defaultInput).toBeInTheDocument();
    await userEvent.type(defaultInput, "Hello world");
    await expect(defaultInput).toHaveValue("Hello world");
  },
};

export const Error: Story = {
  args: {
    name: "input",
    error: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const errorInput = await canvas.getByRole("textbox");
    await expect(errorInput).toBeInTheDocument();
    await userEvent.type(errorInput, "Error");
    await expect(errorInput).toHaveClass(/error/i);
  },
};

export const Dark: Story = {
  args: {
    name: "input",
    dark: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const darkInput = await canvas.getByRole("textbox");
    await expect(darkInput).toBeInTheDocument();
    await userEvent.type(darkInput, "Dark styles");
    await expect(darkInput).toHaveClass(/bg-x3dark/i);
  },
};

export const Disabled: Story = {
  args: {
    name: "input",
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const disabledInput = await canvas.getByRole("textbox");
    await expect(disabledInput).toBeInTheDocument();
    await expect(disabledInput).toBeDisabled();
    await expect(disabledInput).not.toBeEnabled();
  },
};

export const onChange: Story = {
  args: {
    name: "onChange",
    onChange: jest.fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const onChangeInput = await canvas.getByRole("textbox");
    await userEvent.type(onChangeInput, "Hello world");
    await expect(onChangeInput).toBeInTheDocument();
    await expect(args.onChange).toHaveBeenCalled();
  },
};

export const onBlur: Story = {
  args: {
    name: "onBlur",
    onBlur: jest.fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const onBlurInput = await canvas.getByRole("textbox");
    await userEvent.type(onBlurInput, "Hello world");
    await expect(onBlurInput).toBeInTheDocument();
    await onBlurInput.blur();
    await expect(args.onBlur).toHaveBeenCalled();
  },
};

export const className: Story = {
  args: {
    name: "custom-class",
    className: `${customClass["my-custom-class"]}`,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const classNameInput = await canvas.getByRole("textbox");
    await expect(classNameInput).toBeInTheDocument();
    await expect(classNameInput).toHaveClass(/my-custom-class/i);
  },
};
