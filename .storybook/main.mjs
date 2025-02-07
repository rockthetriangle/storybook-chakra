import { mergeConfig } from "vite";

/** @type {import('@storybook/react-vite').StorybookConfig} */
export default {
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "@storybook/addon-docs",
    "@chromatic-com/storybook"
  ],

  async viteFinal(existingConfig) {
    return mergeConfig(existingConfig, {
      optimizeDeps: {
        include: [
          "@storybook/react",
          "@storybook/addon-docs",
          "@storybook/blocks",
          "@mdx-js/react",
        ],
        exclude: [
          "storybook/internal",
          "@storybook/addon-docs",
          "DocsRenderer",
        ],
      },
    });
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
