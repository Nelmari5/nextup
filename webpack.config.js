const path = require('path');
const Dotenv = require('dotenv-webpack');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = ((new Dotenv()).definitions["process.env.NODE_ENV"]).replace(/"/g,'');
module.exports=()=>{
return{
  entry: [
    './resources/sass/main.scss',
    './resources/react'
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        options: {
          presets: ['env','react','stage-0']
        }
      },
      {
        test: /\.css$/,
        use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader']
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
    new Dotenv()
  ],
  performance: {
    hints: false
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  mode: mode
}};
