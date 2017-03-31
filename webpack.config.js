import path from 'path';
import dotenv from 'dotenv';
import webpack from 'webpack';
import analyzer from 'webpack-bundle-analyzer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import CommonsChunkPlugin from './node_modules/webpack/lib/optimize/CommonsChunkPlugin';
import webpackEnvs from './tools/webpack_envs';

dotenv.load({ silent: true });

const devConfig = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/styles.scss',
    './src/index',
  ],
  output: {
    path: path.resolve('public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  target: 'web',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ProgressBarPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({ 'process.env': webpackEnvs.development }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    // new analyzer.BundleAnalyzerPlugin({
    //   analyzerMode: 'static',
    //   generateStatsFile: true,
    //   openAnalyzer: false,
    // }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components|client\/vendor)/,
        include: path.resolve('src'),
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.s[ac]ss$/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap=true',
          'sass-loader?sourceMap=true',
        ],
        exclude: /(node_modules|lib)/,
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader?prefix=font/&limit=5000',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
      },
      {
        test: /\.(woff2?|ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file-loader?emitFile=false',
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '75-90',
                speed: 4,
              },
            },
          },
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  resolve: {
    modules: [
      `${__dirname}/client/vendor`,
      'node_modules',
    ],
    extensions: ['*', '.js', '.jsx'],
  },
};
// -----------------------------------------------------------------------------
// NOTE : Production Webpack configuration below.

const prodConfig = {
  entry: [
    './src/styles.scss',
    './src/index.js',
  ],
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  target: 'web',
  plugins: [
    new ProgressBarPlugin(),
    new webpack.DefinePlugin({ 'process.env': webpackEnvs.production }),
    new CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      minChunks: Infinity,
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        negate_iife: false,
      },
      mangle: {
        except: ['import', 'export', 'module', 'exports', 'require', 'default'],
      },
      comments: false,
      sourceMap: true,
    }),
    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true,
    }),
    new analyzer.BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components|client\/vendor)/,
        include: path.resolve('src'),
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // modules: true,
              minimize: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]',
            },
          },
        ],
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.s[ac]ss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          filename: '[name].css',
          allChunks: true,
        }),
        exclude: /node_modules|lib/,
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader?prefix=font/&limit=5000',
        exclude: /node_modules/,
      },
      {
        test: /\.tff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
        exclude: /node_modules/,
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
        exclude: /node_modules/,
      },
      {
        test: /\.(woff2?|ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file-loader?emitFile=false',
        exclude: /node_modules/,
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '75-90',
                speed: 4,
              },
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: [
      `${__dirname}/client/vendor`,
      'node_modules',
    ],
    extensions: ['*', '.js', '.jsx'],
  },
};
console.log(process.env.NODE_ENV);
export default (process.env.NODE_ENV === 'production') ? prodConfig : devConfig;
