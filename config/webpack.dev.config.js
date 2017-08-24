const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const commons = require('./commons');

const client = {
  name: commons.client,
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false',
    'react-hot-loader/patch',
    path.resolve(__dirname, '../src/client/index.jsx'),
  ],
  output: {
    publicPath: '/build/client/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  resolve: {
    alias: commons.alias,
    extensions: ['.js', '.jsx', '.less', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
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
              loader: 'postcss-loader',
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
      filename: '[name].js',
      minChunks: Infinity
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:3006' }),
  ],
};

const externals = fs
  .readdirSync(path.resolve(__dirname, '../node_modules'))
  .filter(x => !/\.bin|react-universal-component|webpack-flush-chunks/.test(x))
  .reduce((externals, mod) => {
    externals[mod] = `commonjs ${mod}`;
    return externals;
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
        test: /\.(less|css|svg)$/,
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
  ],
};

module.exports = [client, server];
