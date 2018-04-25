/**
* @Author: harsha
* @Date:   2018-04-25T21:32:55+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2018-04-26T00:19:49+05:30
*/
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  /**
  * direct webpack to run babel based on the following
  */
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          plugins: [
            ['transform-class-properties']
          ],
          presets: [
            'react',
            'es2015',
            'stage-0',
            [
              'env', {
                targets: {
                  browsers: ['last 2 versions']
                }
              }
            ]
          ]
        }
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: 'url-loader?limit=100000'
      },
      {
        test: /\.png$/,
        use: 'url-loader?limit=100000'
      },
      {
        test: /\.jpg$/,
        use: 'file-loader'
      },
      {
        test: /\.(woff|woff2) (\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../public/[name].css')
  ]

}
