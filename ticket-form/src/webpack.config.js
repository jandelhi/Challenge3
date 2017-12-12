const path = require('path');

module.exports = {
  entry: {app:"./components/app.js"},
  output: {
    path: path.join(__dirname, "../public"),
    filename: "[name]-bundle.js"
  },
  resolve: {
    extensions: ['.jsx','.js'],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loaders: ['babel-loader']
      }
    ]
  }
}