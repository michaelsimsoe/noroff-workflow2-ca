const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

module.exports = () =>
  webpackMerge({
    devServer: {
      port: 8081
    },

    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },

    plugins: []
  });
