var path = require('path');
var webpack = require('webpack');


module.exports = {
  entry: [
    'babel-polyfill',
    './src/theme/main.less',
    './src/theme/component.less',
    './src/theme/mobile.less',
    './src/components/modal.less',
    './src/components/modal',
    './src/main',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
      publicPath: '/',
      filename: 'main.js'
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      { 
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"//添加对样式表的处理
      },
      {
        test: /\.less$/,
        loader: "style!css!autoprefixer!less"
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader'
      }

    ]
  },
  devServer: {
    contentBase: "./src"
  }
};
