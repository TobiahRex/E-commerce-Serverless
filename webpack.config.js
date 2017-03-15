import path from 'path';
import dotenv from 'dotenv';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpackEnvs from './tools/webpack_envs';

dotenv.load({ silent: true });

const devConfig = {
  devtool: 'source-map',
  target: 'web',
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({ 'process.env': webpackEnvs.development }),
    new webpack.LoaderOptionsPlugin({
      test: /\.(gif|png|jpe?g|svg)$/i,
      imageWebpackLoader: {
        mozjpeg: {
          quality: 65,
        },
        pngquant: {
          quality: '65-90',
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              removeViewBox: false,
            },
            {
              removeEmptyAttrs: false,
            },
          ],
        },
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
        exclude: /node_modules|lib/,
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
          'url-loader', // Using url loader allows relative file paths when using the "url("<path>")" css property.
          // 'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader',
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
// -----------------------------------------------------------------------------
// NOTE : Production Webpack configuration below.

const prodConfig = {
  devtool: 'source-map',
  target: 'web',
  entry: [
    './src/styles.scss',
    './src/index.js',
  ],
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: 'bundle.js',
    // filename: '/[name]-[hash].min.js',
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': webpackEnvs.production }),
    new ExtractTextPlugin({
      filename: '/styles.min.css',
      allChunks: true,
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.(gif|png|jpe?g|svg)$/i,
      imageWebpackLoader: {
        mozjpeg: {
          quality: 65,
        },
        pngquant: {
          quality: '65-90',
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              removeViewBox: false,
            },
            {
              removeEmptyAttrs: false,
            },
          ],
        },
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
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css?modules$importLoaders=1&localIdentName=[name]_[local]!sass',
        }),
        exclude: /node_modules|lib/,
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
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
        test: /\.(woff2?|ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file?emitFile=false',
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack',
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
console.log(process.env.NODE_ENV);
export default (process.env.NODE_ENV === 'production') ? prodConfig : devConfig;
