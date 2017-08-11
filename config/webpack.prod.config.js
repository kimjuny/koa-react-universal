const path = require('path');
const webpack = require('webpack');

const client = {
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

const server = {
  name: 'server',
  target: 'node',
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, '../src/server/server.js'),
  ],
  output: {
    path: path.resolve(__dirname, '../build/server'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
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
    // see: https://github.com/faceyspacey/react-universal-component/issues/10
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
  ],
};

module.exports = [client, server];
