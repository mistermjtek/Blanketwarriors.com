module.exports = {
  entry: {
    app: './app/client.js'
  },
  output: {
    filename: './build/client.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['jsx-loader', 'babel'] },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
}
