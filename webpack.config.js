var fs = require('fs');
var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

var defaultConfig = {
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader', sourceMap: true},
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass') },
      { test:  /\.json$/, loader: 'json-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      app: path.resolve(__dirname, 'app'),
      test: path.resolve(__dirname, 'test'),
      build: path.resolve(__dirname, 'build'),
      assets: path.resolve(__dirname, 'assets')
    }
  }
}

var clientConfig = {
  entry: {
    'react': path.resolve(__dirname, 'app/client.jsx')
  },
  output: {
    path: path.resolve(__dirname,  'build', 'public'),
    filename: 'bundle.js',
  },
  plugins: [
    new ExtractTextPlugin('styles.css', { allChunks: true }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};

var serverConfig = {
  entry: {
    server: path.resolve(__dirname, 'app/server.jsx')
  },
  output: {
    path: path.resolve(__dirname,  'build'),
    filename: '[name].js',
  },
  target: 'node',
  externals: nodeModules,
  node: {
    __dirname: true
  }
};

var testConfig = {};

if(process.env.NODE_ENV === 'DEVELOPMENT') {
  clientConfig.devtool = '#eval-source-map';
  clientConfig.debug = true;

  serverConfig.devtool = '#evalsource-map';
  serverConfig.debug = true;
}

module.exports = {
  default: defaultConfig,
  client: _.defaultsDeep(clientConfig, defaultConfig),
  server: _.defaultsDeep(serverConfig, defaultConfig),
  test: _.defaultsDeep(testConfig, defaultConfig)
}
