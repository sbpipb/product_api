var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var srcPath = path.join(__dirname, 'src');
var distPath = path.join(__dirname, 'public');

var vendorJS = [
  'react',
  'react-dom'
  // path.join(srcPath, 'js/foundation.js'),
];

module.exports = {
  devtool: debug ? "inline-sourcemap" : false,

  entry: {
    app: path.join(srcPath, 'js/app.js'),
    vendor: vendorJS
  },

  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015', 'stage-1', 'stage-2']
            }
          }
        },
        {
          // Loaders are processed in reverse array order. That means css-loader will run before style-loader.
          test: /\.css$/,
          use: ['style-loader', {
            loader: 'css-loader',
            options: { modules: false },
            }
          ],
        },
      ]
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules']
  },

  output: {
    // library: 'myClassName',
    path: distPath,
    filename: 'js/[name]-[hash].js',
    chunkFilename: 'js/[id]-[hash].js',
    publicPath: '/public/',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
  },
  // plugins: debug ? [] : [
  plugins: [

        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          filename: 'js/vendor-[hash].js'
        }),
        // new webpack.optimize.OccurrenceOrderPlugin(),
        //
        // new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),

        new HtmlWebpackPlugin({
          inject: true,
          template: 'src/index.html',
          filename: 'index.html'
        }),
  ],

};
