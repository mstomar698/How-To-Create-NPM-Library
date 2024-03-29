module.exports = {
  // ...
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    // ...
    "@storybook/addon-postcss",
    "storybook-css-modules-preset",
  ],
};