import Button from "@components/Button";
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { expect, jest } from "@storybook/jest";
import styles from "./index.module.scss";

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
    disabled: {
      description: "You can choose whether to disable the button or not.",
      control: {
        type: "boolean",
      },
      table: {
        defaultValue: {
          summary: "false",
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
          summary: "false",
        },
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
    type: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
      description: "You can choose between different button types.",
      table: {
        defaultValue: {
          summary: "button",
        },
        type: {
          summary: `button | submit | reset`,
        },
      },
    },
    onClick: {
      description: "Function to be called when the button is clicked",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click me",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const defaultButton = await canvas.getByRole("button");
    await userEvent.click(defaultButton);
    await expect(defaultButton).toBeInTheDocument();
    await expect(defaultButton).toHaveClass(
      /primary|secondary|success|danger|warning|info|button/i
    );
  },
};

export const Sizes: Story = {
  args: {
    children: "Click me",
    size: "small",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const smallButton = await canvas.getByRole("button");
    await userEvent.click(smallButton);
    await expect(smallButton).toBeInTheDocument();
    await expect(smallButton).toHaveClass(/small|medium|large/i);
  },
};

export const Outline: Story = {
  args: {
    children: "Click me",
    variant: "primary",
    outline: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const outlineButton = await canvas.getByRole("button");
    await expect(outlineButton).toBeInTheDocument();
    await expect(outlineButton).toHaveClass(/outline/i);
  },
};

export const Disabled: Story = {
  args: {
    children: "Click me",
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const disabledButton = await canvas.getByRole("button");
    await expect(disabledButton).toBeInTheDocument();
    await expect(disabledButton).toBeDisabled();
    await expect(disabledButton).not.toBeEnabled();
  },
};

export const ClassName: Story = {
  args: {
    className: `${styles["my-custom-class"]}`,
    children: "Click me",
    variant: "primary",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const classNameButton = await canvas.getByRole("button");
    await expect(classNameButton).toBeInTheDocument();
    await expect(classNameButton).toHaveClass(/my-custom-class/i);
  },
};

export const types: Story = {
  args: {
    children: "Click me",
    type: "submit",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const typeButton = await canvas.getByRole("button");
    await expect(typeButton).toBeInTheDocument();
    await expect(typeButton).toHaveAttribute(
      "type",
      expect.stringMatching(/button|submit|reset/i)
    );
  },
};

export const onClick: Story = {
  args: {
    children: "Click me",
    onClick: jest.fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const onClickButton = await canvas.getByRole("button");
    await expect(onClickButton).toBeInTheDocument();
    await userEvent.click(onClickButton);
    await expect(args.onClick).toHaveBeenCalled();
  },
};
