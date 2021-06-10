const path = require('path');
const vueSrc = './src';

module.exports = {
  devServer: {
    open: true,
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('vue-loader-v16')
      .loader('vue-loader-v16')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, vueSrc),
      }
    },
  },
};