const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './handler.js',
  target: 'node',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      include: __dirname,
      exclude: /node_modules/,
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }],
  },
  externals: [nodeExternals()],
};
