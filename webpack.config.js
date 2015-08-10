var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

var clientConfig = {
  entry: {
    'react': path.resolve(__dirname, 'app/client.js')
  },
  output: {
    path: path.resolve(__dirname,  'build', 'public'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', sourceMap: true},
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass') }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css', { allChunks: true })
  ]
};

var serverConfig = {
  entry: {
    server: path.resolve(__dirname, 'app/server.js')
  },
  target: 'node',
  node: { __dirname: true },
  output: {
    path: path.resolve(__dirname,  'build'),
    filename: 'server.js',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test:  /\.json$/, loader: 'json-loader' }
    ]
  },
  externals: nodeModules
};

if(process.env.NODE_ENV !== 'production') {
  clientConfig.devtool = 'source-map';
  clientConfig.debug = true;

  serverConfig.devtool = 'source-map';
  serverConfig.debug = true;
}

module.exports = {
  client: clientConfig,
  server: serverConfig
}
