const webpack = require('webpack'); 
const path = require('path');

 module.exports = {
   mode: 'development',
   devtool: 'inline-source-map',
   entry: './src/index.js',
   output: {
     filename: 'main.js',
     path: path.resolve(__dirname, 'dist'),
   },
   module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
 };
