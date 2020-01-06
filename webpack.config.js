const webpack = require('webpack');
const path = require('path');

const config = {
  mode:'development',
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
   contentBase: path.join(__dirname, 'src'),
   port: 4000,
   public: '192.168.10.224:4000'
 },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
    ]
  }
}

module.exports = config;