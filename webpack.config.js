const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: './test/main.js',
  
  output: {
  	filename: 'bundle.js',
  	path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: 'dist'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './test/test.html'
    })
  ]
};
