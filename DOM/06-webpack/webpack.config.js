const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').Configuration} */
const config = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};

module.exports = config;