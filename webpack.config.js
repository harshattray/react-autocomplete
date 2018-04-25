/**
 * @Author: harsha
 * @Date:   2018-04-25T21:28:39+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-04-25T21:37:49+05:30
 */

var webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  // Entrypoint of the App
  entry: './src/index.js',
  // output path of the generated file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js/')
  }
}

module.exports = merge(baseConfig, config)
