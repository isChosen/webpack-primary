const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // development production
  entry: './src/index.jsx', // 入口， 可以有多个
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].[chunkhash:6].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  devServer: {
    open: true, // 启动后打开浏览器
    port: '8034',
    https: false, // 用 http
    publicPath: '/',
    contentBase: path.resolve(__dirname, 'dist'), // 本地服务器的根目录
    host: 'localhost'
  },

  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')], // 第三方模块路径
    extensions: ['.js', '.jsx', '.es6'] // 扩展名，尽量少写，且越靠前越优先匹配
  },

  plugins: [
    new HtmlWebpackPlugin({ // 模板
      filename: 'index.html', // 输出的文件名
      title: 'webpack-基本配置',
      favicon: __dirname + '/favicon.ico',
      template: __dirname + '/index.html'
    })
  ]
}