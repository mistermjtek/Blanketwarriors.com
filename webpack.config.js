module.exports = {
  entry: {
    app: './app/client.js'
  },
  output: {
    filename: './app/build/client.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['jsx-loader', 'babel'] }
    ]
  }
}
