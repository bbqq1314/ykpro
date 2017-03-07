// webpack.config.js
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: ['./src/entry'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath:"/dist/"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new ExtractTextPlugin("style.css", {
      allChunks: true
    })
  ],
  module: {
    loaders: [
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract("style-loader", 'css-loader')
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    },
    {
        test: /\.(png|jpg)$/,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    }]
  }
}