/* eslint-disable */
const webpack = require("webpack");

const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: './src/js/entry.js',
  output: {
    filename: 'entry.js',
    path: path.resolve(__dirname, 'dist')
  },
  externals: {
    "./ext/ext.js" : "globalHello"
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html'
    }),
    new CopyWebpackPlugin([
      { 
        from: path.resolve(__dirname,"src/ext")+'/ext.js',
        to: './ext/ext.js',
        toType: 'file'
      }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          }
        ]
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: '[name].[ext]',
              outputPath: 'img',
              publicPath: 'img'
            } 
          }
        ]
      }
    ]
  },
  devServer: {
    inline: true,
    contentBase: path.resolve(__dirname, 'dist'),
    port: 5000
  }
};
