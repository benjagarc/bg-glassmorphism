import { SelectInput } from "@components/SelectInput";
import { Meta, StoryObj } from "@storybook/react";
import { fireEvent, within } from "@storybook/testing-library";
import { expect, jest } from "@storybook/jest";

const meta = {
  title: "Components/Select",
  component: SelectInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      description: "You can choose whether to disable the select or not.",
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
      description: "You can set your select field to red",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    dark: {
      control: { type: "boolean" },
      description: "You can set your select field to a dark theme",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    onChange: {
      description: "Function to call when the select changes",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    onBlur: {
      description: "Function to call when the select loses focus",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    id: {
      control: { type: "text" },
      description: "A unique identifier for the select component.",
      table: {
        defaultValue: { summary: "" },
      },
    },
  },
} satisfies Meta<typeof SelectInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "input",
    options: ["one", "two", "three", "four"],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const defaultSelect = await canvas.getByRole("combobox");
    await expect(defaultSelect).toBeInTheDocument();

    const options = await canvas.findAllByRole("option");
    expect(options).toHaveLength(4);
    await expect(options[0]).toHaveTextContent("one");
    await expect(options[1]).toHaveTextContent("two");
    await expect(options[2]).toHaveTextContent("three");
    await expect(options[3]).toHaveTextContent("four");
  },
};

export const Error: Story = {
  args: {
    name: "input",
    options: ["one", "two", "three", "four"],
    error: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const defaultSelect = await canvas.getByRole("combobox");
    await expect(defaultSelect).toBeInTheDocument();
    await expect(defaultSelect).toHaveClass(/error/i);
  },
};

export const Dark: Story = {
  args: {
    name: "input",
    options: ["one", "two", "three", "four"],
    dark: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const defaultSelect = await canvas.getByRole("combobox");
    await expect(defaultSelect).toBeInTheDocument();
    await expect(defaultSelect).toHaveClass(/bg-x3dark/i);
  },
};

export const Disabled: Story = {
  args: {
    name: "input",
    disabled: true,
    options: ["one", "two", "three", "four"],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const defaultSelect = await canvas.getByRole("combobox");
    await expect(defaultSelect).toBeInTheDocument();
    await expect(defaultSelect).toBeDisabled();
    await expect(defaultSelect).not.toBeEnabled();
  },
};

export const onChange: Story = {
  args: {
    name: "onChange",
    onChange: jest.fn(),
    options: ["one", "two", "three", "four"],
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const onChangeSelect = await canvas.getByRole("combobox");
    await expect(onChangeSelect).toBeInTheDocument();
    fireEvent.change(onChangeSelect, { target: { value: "two" } });
    await expect(args.onChange).toHaveBeenCalled();
  },
};


export const onBlur: Story = {
    args: {
      name: "onChange",
      onChange: jest.fn(),
      options: ["one", "two", "three", "four"],
    },
    play: async ({ canvasElement, args }) => {
      const canvas = within(canvasElement);
      const onBlurSelect = await canvas.getByRole("combobox");
      await expect(onBlurSelect).toBeInTheDocument();
      fireEvent.change(onBlurSelect, { target: { value: "two" } });
      await onBlurSelect.blur();
      await expect(args.onChange).toHaveBeenCalled();
    },
  };
  