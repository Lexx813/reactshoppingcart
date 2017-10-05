const path = require('path');

const webpack = require('webpack');

module.exports = {
 entry: './src/app.js',
 output: {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'public')
 },
 watch: true,
 module: {
  loaders: [
   {
    test: /\.js$/,
    loader: 'babel-loader',
    query: {
     presets: ['react', 'es2015', 'stage-1']
    }
   }
  ]
 }
}