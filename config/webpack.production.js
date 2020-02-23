const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () =>
  webpackMerge({
    plugins: [
      new MiniCssExtractPlugin({ filename: '[name].[chunkhash].css' }),
      new ImageminPlugin({
        plugins: [
          imageminMozjpeg({
            quality: 70,
            progressive: true
          })
        ]
      })
    ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
      ]
    }
  });
