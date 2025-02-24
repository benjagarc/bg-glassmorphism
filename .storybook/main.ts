import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    if (!config.css) config.css = {};
    if (!config.resolve) config.resolve = {};
    config.resolve= {
      alias: {
        "@components": path.resolve(__dirname, "../src/components"),
        "@styles": path.resolve(__dirname, "../src/styles"),
      },
    };
    return config;
  },
};
export default config;
