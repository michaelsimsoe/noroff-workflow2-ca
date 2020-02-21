const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = {
  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: './src/index.js',
    about: './src/index.js',
    contact: './src/index.js',
    tours: './src/index.js'
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(svg|png|jp?g|fig)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 8081
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new CopyWebpackPlugin([{ from: './src/img', to: 'img' }]),
    new ImageminPlugin({
      plugins: [
        imageminMozjpeg({
          quality: 70,
          progressive: true
        })
      ]
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      inject: true,
      chunks: ['about'],
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/contact.html',
      inject: true,
      chunks: ['contact'],
      filename: 'contact.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/tours.html',
      inject: true,
      chunks: ['tours'],
      filename: 'tours.html'
    })
  ]
};
