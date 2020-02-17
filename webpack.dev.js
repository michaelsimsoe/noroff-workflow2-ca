const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: './src/index.js',
    about: './src/index.js',
    contacts: './src/index.js',
    tours: './src/index.js'
  },

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 8080
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
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
      filename: 'contacts.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/tours.html',
      inject: true,
      chunks: ['tours'],
      filename: 'tours.html'
    })
  ]
};
