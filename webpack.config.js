import path from 'path';
import webpack from 'webpack';
import dotenv from 'dotenv';

dotenv.config({ silent: true });

const BUILD = process.env.NODE_ENV;
console.log('BUILD: ', BUILD);

const envs = {
  development: {
    NODE_ENV: JSON.stringify(BUILD),
    PORT: JSON.stringify(3000),
    BASE_URL: JSON.stringify(process.env.BASE_URL),
  },
  production: {
    NODE_ENV: JSON.stringify(BUILD),
    PORT: JSON.stringify(process.env.PORT),
    DEPLOY_URL: JSON.stringify(process.env.DEPLOY_URL),
  },
};

const devConfig = {
  noInfo: true,
  devtool: 'inelin-source-map',
  target: 'web',
  debug: true,
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/Styles/app.scss',
    './src/index.js',
  ],
  output: {
    path: path.resolve('public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './src',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({ 'process.env': envs.development }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        include: path.resolve('src'),
      },
      {
        test: /(\.css)$/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.s[ac]ss$/,
        loaders: ['style', 'css', 'sass', 'postcss-loader'],
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url?prefix=font/&limit=5000',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
      },
      {
        test: /\.(png|gif|jpg|jpeg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000?',
      },
      {
        test: /\.(woff2?|ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file?emitFile=false',
      },
      {
        test: /\.(jpe?g|png|giff|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};

const prodConfig = {
  devtool: 'source-map',
  noInfo: true,
  debug: true,
  target: 'web',
  entry: [
    './src/Styles/app.scss',
    './src/index.js',
  ],
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({ 'process.env': envs.production }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        include: path.resolve('src'),
      },
      {
        test: /\.s[ac]ss$/,
        loaders: ['style', 'css', 'sass', 'postcss-loader'],
      },
      {
        test: /\.css$/,
        loader: 'style!css',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url?prefix=font/&limit=5000',
      },
      {
        test: /\.tff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
      },
      {
        test: /\.(png|gif|jpg|jpeg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000?',
      },
      {
        test: /\.(woff2?|ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file?emitFile=false',
      },
      {
        test: /\.(jpe?g|png|giff|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
export default (BUILD === 'production') ? prodConfig : devConfig;
