const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MAPBOX_TOKEN = "pk.eyJ1IjoiYml6YXJybyIsImEiOiJjbDJpbGt2YW8wcDA4M2ltc24waWwwc3loIn0.eDej6DQjJv21gwde7qBPUQ"

module.exports = {
  mode: 'development',

  entry: {
    app: './app.js'
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env', '@babel/react']
            }
          }
        ]
      }
    ]
  },

  // Optional: Enables reading mapbox token from environment variable
  plugins: [
    new HtmlWebpackPlugin({title: 'react-map-gl Example'}),
    new webpack.EnvironmentPlugin({MapboxAccessToken: MAPBOX_TOKEN })
  ]
};