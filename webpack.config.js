/* jshint node: true */
var path = require('path');


module.exports = {
  context: path.join(__dirname),
  entry: './lib/index.js',

  output: {
    path: path.join(__dirname),
    filename: 'react-component-translate.js',
    libraryTarget: 'umd',
    library: 'react-component-translate'
  },

  externals: {
    "react": "react",
    "axios": "axios"
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        // Query parameters are passed to node-sass
        loader: 'style!css!sass?outputStyle=expanded&' +
          'includePaths[]=' + (path.resolve(__dirname, './node_modules'))
      },
      {
        test: /(\.js)|(\.jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["react",
            [
              "latest", {
              "es2015": {}
            }
            ],
            "stage-1",
            "stage-0"]
        }
      }
    ]
  }
};
