var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    react: path.resolve(__dirname, 'app/client.js')
  },
  output: {
    path: path.resolve(__dirname, 'app', 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', sourceMap: true},
      { test: /\.scss$/, loader: 'style!css!sass?sourceMap' }
    ]
  },
  devtool: '#inline-source-map'
}
