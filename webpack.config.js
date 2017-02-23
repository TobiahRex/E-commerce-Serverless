import path from 'path';
import dotenv from 'dotenv';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpackEnvs from './tools/webpack_envs';

dotenv.load({ silent: true });

const devConfig = {
  noInfo: false,
  devtool: 'cheap-module-eval-source-map',
  target: 'web',
  debug: true,
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/Styles/styles.scss',
    './src/index',
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
    new webpack.DefinePlugin({ 'process.env': webpackEnvs.development }),
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
        loaders: [
          'style',
          'css?sourceMap=true',
          'postcss-loader?sourceMap=true',
          'sass?sourceMap=true',
        ],
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
        test: /\.(jpe?g|png|giff|svg|ico)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]', {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 4,
              },
              pngquant: {
                quality: '75-90',
                speed: 3,
              },
            },
          }],
        exclude: /node_modules/,
        include: __dirname,
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
// -----------------------------------------------------------------------------
// NOTE : Production Webpack configuration below.

const prodConfig = {
  debug: false,
  devtool: 'source-map',
  noInfo: true,
  target: 'web',
  entry: [
    './src/Styles/styles.scss',
    './src/index.js',
  ],
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: 'bundle.js',
    // filename: '/[name]-[hash].min.js',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({ 'process.env': webpackEnvs.production }),
    new ExtractTextPlugin('/styles.min.css', {
      allChunks: true,
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
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
        test: /\.css$/,
        loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.s[ac]ss$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules$importLoaders=1&localIdentName=[name]_[local]!sass'),
        exclude: /node_modules|lib/,
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
        test: /\.(jpe?g|png|giff|svg|ico)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]', {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 4,
              },
              pngquant: {
                quality: '75-90',
                speed: 3,
              },
            },
          }],
        exclude: /node_modules/,
        include: __dirname,
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
console.log(process.env.NODE_ENV);
export default (process.env.NODE_ENV === 'production') ? prodConfig : devConfig;
