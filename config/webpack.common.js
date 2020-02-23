const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/page-home/index.js',
    about: './src/page-about/index.js',
    contact: './src/page-contact/index.js',
    tours: './src/page-tours/index.js'
  },
  module: {
    rules: [
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
  plugins: [
    new CopyWebpackPlugin([{ from: './src/img', to: 'img' }]),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/page-home/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/page-about/about.html',
      inject: true,
      chunks: ['about'],
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/page-contact/contact.html',
      inject: true,
      chunks: ['contact'],
      filename: 'contact.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/page-tours/tours.html',
      inject: true,
      chunks: ['tours'],
      filename: 'tours.html'
    })
  ]
};
