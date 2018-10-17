const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // development production
  entry: './src/index.jsx',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].[hash:6].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      }
    ]
  },

  devServer: {
    open: true,
    port: '8034',
    https: false,
    publicPath: '/',
    contentBase: path.resolve(__dirname, 'dist'),
    host: 'localhost'
  },

  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    extensions: ['.js', '.jsx', '.es6']
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'step-abc',
      favicon: __dirname + '/favicon.ico',
      template: __dirname + '/index.html'
    })
  ]
}