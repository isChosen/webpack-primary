const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // development production
  entry: './src/index.jsx', // 入口， 可以有多个
  output: {
    filename: '[name].bundle[hash:6].js',
    chunkFilename: '[name].bundle[chunkhash:6].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|es6)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  devServer: {
    open: true, // 启动后打开浏览器
    https: false, // 用 http 协议
    port: '8034',
    publicPath: '/',
    host: 'localhost',
    contentBase: path.resolve(__dirname, 'dist') // 本地服务器的根目录
  },

  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')], // 第三方模块路径
    extensions: ['.js', '.jsx', '.es6'] // 扩展名，越靠前优先级越高，尽量少写
  },

  plugins: [
    new HtmlWebpackPlugin({ // 模板插件
      filename: 'index.html', // 输出的文件名
      title: 'webpack-primary', // 文档名称
      favicon: __dirname + '/favicon.ico',
      template: __dirname + '/index.html'
    })
  ]
}
