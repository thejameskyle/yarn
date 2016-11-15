const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

module.exports = function createWebpackConfig(opts) {
  return {
    // devtool: 'inline-source-map',
    entry: opts.entry,
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'strip-unix-bin-string-loader',
          enforce: 'pre'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: opts.babelQuery || '',
        }, 
        {
        test: /\.json$/,
        loader: 'json',
        }
      ],
    },
    resolveLoader: {
      alias: {
        'strip-unix-bin-string-loader': require.resolve("./strip-unix-bin-string-loader")
      }
    },
    plugins: [
      new webpack.BannerPlugin({
        banner: "#!/usr/bin/env node",
        raw: true
      })
    ],
    output: opts.output,
    target: 'node',
  };
};
