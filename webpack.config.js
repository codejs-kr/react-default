var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },

  devServer: {
    hot: true,    // reloading
    inline: true, // include devServer to bundle
    host: '0.0.0.0',
    port: 4000,
    contentBase: __dirname + '/public/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        // react-hot-loader은 수정시 state 유지 시켜준다.
        loaders: ['react-hot-loader', 'babel-loader?' + JSON.stringify({
          cacheDirectory: true,
          presets: ['es2015', 'react']
        })],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
