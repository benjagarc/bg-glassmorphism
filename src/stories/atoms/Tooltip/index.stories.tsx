import { Tooltip } from "@components/Tooltip";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@components/Button";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: {
        type: "select",
      },
      options: ["top", "bottom", "left", "right"],
      description:
        "You can choose four types of positions: `top, bottom, left,  right`",
      table: {
        defaultValue: {
          summary: "bottom",
        },
      },
    },
    variant: {
      control: {
        type: "select",
      },
      options: ["primary", "secondary", "success", "danger", "warning", "info"],
      description:
        "You can choose six types of color variants: `primary, secondary, success, danger, warning, info`",
      table: {
        defaultValue: {
          summary: "primary",
        },
      },
    },
    children: {
      description: "Yoo can pass a ReactElement as children",
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Tooltip",
    children: <Button>Click me</Button>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const defaultTooltip = await canvas.getByText("Tooltip");
    await userEvent.click(defaultTooltip);
    await expect(defaultTooltip).toBeInTheDocument();
  },
};

export const position: Story = {
  args: {
    text: "position",
    children: <Button>Click me</Button>,
    position: "top",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const defaultTooltip = await canvas.getByText("position");
    await userEvent.click(defaultTooltip);
    await expect(defaultTooltip).toBeInTheDocument();
    await expect(defaultTooltip).toHaveClass(/top|bottom|left|right/i);
  },
};

export const Variant: Story = {
  args: {
    text: "Tooltip",
    children: <Button>Click me</Button>,
    variant: "info",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const defaultTooltip = await canvas.getByText("Tooltip");
    await userEvent.click(defaultTooltip);
    await expect(defaultTooltip).toBeInTheDocument();
    await expect(defaultTooltip).toHaveClass(
      /primary|secondary|success|danger|warning|info|tooltip/i
    );
  },
};
