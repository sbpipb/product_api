const path = require('path');
const webpack = require('webpack');

var srcPath = path.join(__dirname, 'src');
var distPath = path.join(__dirname, 'public');

module.exports = {

  // context: path.resolve(__dirname, './src'),


  entry: {
    app: path.join(srcPath, 'js/app.js'),
    // app: ['./home.js', './events.js', './vendor.js'],
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: distPath,
    // path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].js',
    // filename: 'js/[name]-[hash].js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
     name: 'julian',
     filename: 'js/[name]-vendor-[hash].js',
     minChunks: 2,
   }),
  ],
};
