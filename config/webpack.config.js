const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = (mode) => ({
  entry: './index.tsx',
  context: path.resolve(__dirname, '../src/'),
  output: {
    path: path.resolve(__dirname, '../build/'),
    filename: '[name].[hash].js',
  },
  resolve: { extensions: ['.js', '.ts', '.tsx', '.jsx'] },
  module: {
    rules: [
      { test: /\.tsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: { hmr: true } },
          { loader: 'css-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
  devServer: { port: 8000, hot: true, open: true, compress: true },
  plugins: [
    new HtmlWebpackPlugin({ template: '../public/index.html', minify: 'auto' }),
    new MiniCssExtractPlugin(),
  ],
});
