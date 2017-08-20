const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const commons = require('./commons');

const client = {
  name: commons.client,
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
    alias: commons.alias,
    extensions: ['.js', '.jsx', '.less', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
      }, {
        test: /\.less$/,
        use: ExtractCssChunks.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            }, {
              loader: 'less-loader',
            },
          ],
        }),
      }, {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new ExtractCssChunks(),
    // 'ReferenceError: webpackJsonp is not defined' if this plugin is left out.
    new webpack.optimize.CommonsChunkPlugin({
      names: ['bootstrap'], // needed to put webpack bootstrap code before chunks.
      filename: '[name].[chunkhash].js',
      minChunks: Infinity
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      }
    }),
  ],
};

const externals = fs
  .readdirSync(path.resolve(__dirname, '../node_modules'))
  .filter(x => !/\.bin|react-universal-component|webpack-flush-chunks/.test(x))
  .reduce((externals, mod) => {
    externals[mod] = `commonjs ${mod}`
    return externals
  }, {});

externals['react-dom/server'] = 'commonjs react-dom/server';

const server = {
  name: commons.server,
  target: 'node',
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, '../src/server/infrastructure/middlewares'),
  ],
  output: {
    path: path.resolve(__dirname, '../build/server'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
      }, {
        test: /\.(css|less|svg)$/,
        loader: 'ignore-loader',
      },
    ],
  },
  plugins: [
    // see: https://github.com/faceyspacey/react-universal-component/issues/10
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new webpack.DefinePlugin({
      __ROOT__: JSON.stringify(path.resolve(__dirname, '../')),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      }
    }),
  ],
};

module.exports = [client, server];
