var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var srcPath = path.join(__dirname, 'src');
var distPath = path.join(__dirname, 'public');

var vendorJS = [
  'react',
  'react-dom'
];

module.exports = {
  devtool: debug ? "inline-sourcemap" : false,

  entry: {
    vendor: vendorJS,
    app: path.join(srcPath, 'js/app.js'),
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
    path: distPath,
    filename: 'js/[name].js',
    chunkFilename: 'js/[id]-[hash].js',
  },
  devServer: {
    contentBase: distPath,
    hot: true,
    port: 5000,
    stats: { colors: true },
    proxy: {
      '/api/*': {
        target: 'http://127.0.0.1:3000',
        secure: false,
      },
    },
    stats: 'errors-only'
  },
  // plugins: debug ? [] : [
  plugins: [
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          filename: 'js/vendor.js'
          // filename: 'js/vendor-[hash].js'
        }),

        new webpack.HotModuleReplacementPlugin(),

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
