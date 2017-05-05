module.exports = {
  entry: './handler.js',
  target: 'node',
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: __dirname,
      exclude: /node_modules/,
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }],
  },
  externals: [
    /^(?!\.|\/).+/i,
  ],
};
