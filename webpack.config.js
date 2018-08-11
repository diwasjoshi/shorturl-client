const path = require('path');
const webpack = require('webpack');

const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin'); //for creating html file.
const HtmlIncludeAssetsPlugin = require("html-webpack-include-assets-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //for creating a final css file.
const extractPlugin = new ExtractTextPlugin({
    filename: 'src/bundle.css'
});
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: [
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/only-dev-server',
      'babel-polyfill',
      path.join(path.resolve(__dirname, 'src'), 'index.js'),

    ],

    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(path.resolve(__dirname, 'src'), 'index.html'),
        filename: 'index.html',
        inject: false
      }),
      new ExtractTextPlugin(path.join(path.resolve(__dirname, 'src'), 'bundle.css')),
      new CleanWebpackPlugin(['dist']),

    ],
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
          ],
        },

        {
          test:/\.scss$/,
          loaders:["style-loader","css-loader","sass-loader"]


        },
        {
          test:/\.css$/,
          loaders:["style-loader","css-loader"]


        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: [
          {
              loader: 'file-loader',
              options: {
                  name: '[name].[ext]',
                  outputPath: './assets/',
              }
          }]
        }
      ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        host: '0.0.0.0',
        disableHostCheck: true,
        watchOptions: {
          aggregateTimeout: 300,
          poll: 1000
        }
    }
}
