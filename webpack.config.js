const path = require('path');
module.exports = {
  entry: './src/js/script.ts',
  mode: 'development',
  output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
  },
  module: {
      rules: [
          {
            test: /\.ts$/,
            loader: 'babel-loader'
          }
      ]
  },
  stats: {
      colors: true
  },
  devtool: 'source-map'
};