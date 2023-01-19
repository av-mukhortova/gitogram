
module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
    "@storybook/addon-knobs"
  ],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-webpack5"
  },
}