module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    // {
    //   name: '@storybook/preset-scss',
    //   options: {
    //     cssLoaderOptions: {
    //        modules: true,
    //        localIdentName: '[name]__[local]--[hash:base64:5]',
    //     }
    //   }
    // },
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}