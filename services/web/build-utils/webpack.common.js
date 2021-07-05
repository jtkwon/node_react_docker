const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', 'src/index.js'),
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, '..', './dist'),
    filename: 'client-bundle.js',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, '..', './dist'),
    port: 8080,
    inline: true,
    hot: true,
    open: true,
    compress: true,
    headers: {
      'Access-Control-Allow-Origins': '*',
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Node React Docker',
      template: path.resolve(__dirname, '..', 'public/index.html'),
    }),
  ],
};
