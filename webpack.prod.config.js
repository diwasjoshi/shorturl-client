const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'); //for creating html file.
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //for creating a final css file.
const extractPlugin = new ExtractTextPlugin({
    filename: 'src/bundle.css'
});
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: [
      'babel-polyfill',
      path.join(path.resolve(__dirname, 'src'), 'index.js'),

    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'bundle.min.js',
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env':{
          'NODE_ENV': JSON.stringify('production')
        }
      }),
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
    }
}
