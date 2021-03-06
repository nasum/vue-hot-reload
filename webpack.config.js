var webpack = require('webpack')

module.exports = {
  entry: './js/app.js',
  output: {
    path: "dist",
    publicPath: 'dist',
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
