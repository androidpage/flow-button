const path = require('path');

module.exports = {
  entry: './temp/temp.ts',
  output: {
    path: path.resolve(__dirname, 'dev'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts','.tsx','.js','.jsx']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dev'),
    compress: true,
    port: 8080
  }
}