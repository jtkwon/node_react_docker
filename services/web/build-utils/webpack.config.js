const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');

module.exports = ({ env }) => {
  // eslint-disable-next-line
  const envConfig = require(`./webpack.${env}.js`);
  return merge(commonConfig, envConfig);
};
