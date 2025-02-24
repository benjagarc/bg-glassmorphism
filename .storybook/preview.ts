import type { Preview } from "@storybook/react";
import "../src/styles/globals.scss";
import { ContainerStories } from "./container";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [ContainerStories],
};

export default preview;
