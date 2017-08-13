const path = require('path');
const webpack = require('webpack');

module.exports = {
  name: 'client',
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, '../src/client/index.jsx'),
  ],
  output: {
    path: path.resolve(__dirname, '../build/client'),
    publicPath: '/build/client/',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    // 'ReferenceError: webpackJsonp is not defined' if this plugin is left out.
    new webpack.optimize.CommonsChunkPlugin({
      names: ['bootstrap'], // needed to put webpack bootstrap code before chunks.
      filename: '[name].[chunkhash].js',
      minChunks: Infinity
    }),
  ],
};
