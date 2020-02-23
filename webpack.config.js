const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./config/webpack.common');
const modeConfig = env => require(`./config/webpack.${env}`)(env);

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) =>
  webpackMerge(
    {
      mode,
      plugins: []
    },
    commonConfig,
    modeConfig(mode)
  );
