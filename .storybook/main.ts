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
    config.css.preprocessorOptions = {
      scss: {
        additionalData: `
          @use "@styles/_colors.scss" as *;
          @use "@styles/_fonts.scss" as *;
          @use "@styles/_media_queries.scss" as *;
          @use "@styles/_spaces_borders.scss" as *;
          @use "@styles/_transitions_animations.scss" as *;
          @use "@styles/_reset_css.scss" as *;
          @use "@styles/globals.scss" as *;
        `,
      },
    };
    return config;
  },
};
export default config;
