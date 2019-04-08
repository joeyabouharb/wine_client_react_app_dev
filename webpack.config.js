const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');

const VENDOR_LIBS = ['react', 'react-dom'];

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  resolve: {
    modules: [path.resolve('./src'), path.resolve('./node_modules')],
    extensions: ['*', '.js', '.jsx'],
  },
  entry: {
    bundle: ['./src/index.jsx'],
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, 'dist/bundles'),
    publicPath: '/',
    filename: '[name].[chunkhash].bundle.js',
    chunkFilename: '[name].[chunkhash].bundle.js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true,
        },
      },
    },
    runtimeChunk: true,
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.html$/,
      use: {
        loader: 'html-loader',
      },
    },
    {
      test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
      loader: 'file-loader',
    },
    {
      test: /\.s?[a|c]ss$/,
      use: ['style-loader', MiniCssPlugin.loader, 'css-loader', 'sass-loader'],
    },
    ],

  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssPlugin({
      filename: 'style.css',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
