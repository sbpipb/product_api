const path = require('path');
const webpack = require('webpack');

var distPath = path.join(__dirname, 'public');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './js/app.js',
  },
  output: {
    // path: path.resolve(__dirname, './dist'),
    path: distPath,
    filename: 'js/[name]-[hash].js',
  },
};
