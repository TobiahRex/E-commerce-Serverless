import path from 'path';
import dotenv from 'dotenv';
import webpack from 'webpack';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import analyzer from 'webpack-bundle-analyzer';
import autoprefixer from 'autoprefixer';

import CommonsChunkPlugin from './node_modules/webpack/lib/optimize/CommonsChunkPlugin';
import webpackEnvs from './tools/webpack_envs';

dotenv.load({ silent: true });

const devConfig = {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
  },
  stats: {
    color: true,
    reasons: true,
    chunks: true,
  },
  entry: {
    app: [
      'webpack-hot-middleware/client?reload=true',
      path.resolve('./src/index'),
    ],
    // vendor: ['react', 'react-dom', 'reduxsauce'],
  },
  output: {
    path: path.resolve('src'),
    publicPath: '/',
    filename: 'bundle.[name].js',
  },
  devtool: 'source-map',
  target: 'web',
  plugins: [
    new ProgressBarPlugin(),
    new CommonsChunkPlugin({
      name: 'vendor',
      filename: 'bundle.[name].js',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1,
    }),
    new CommonsChunkPlugin({
      name: 'common',
      filename: 'bundle.[name].js',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({ 'process.env': webpackEnvs.development }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      inject: true,
      filename: './index.html',
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
      noInfo: true,
      options: {
        sassLoader: {
          includePaths: [path.resolve('src', 'scss')],
        },
        context: '/',
        postcss: () => [autoprefixer],
      },
    }),
  ],
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /(node_modules|bower_components)/ },
      { test: /(\.css|\.s[ac]ss)$/, loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'sass-loader?sourceMap'] },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]' },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.ico$/, loader: 'file-loader?name=[name].[ext]' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
      { test: require.resolve('react-addons-perf'), loader: 'expose-loader?Perf' },
    ],
  },
};
// -----------------------------------------------------------------------------
const prodConfig = {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
  },
  stats: {
    color: true,
    reasons: true,
    chunks: true,
  },
  // entry: [
  //   // './src/styles.scss',
  //   './src/index.js',
  // ],
  entry: {
    app: path.resolve('./src/index'),
  },
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: 'bundle.[name].js',
  },
  devtool: false,
  target: 'web',
  plugins: [
    new ProgressBarPlugin(),
    new CommonsChunkPlugin({
      name: 'vendor',
      filename: 'bundle.[name].js',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1,
    }),
    new CommonsChunkPlugin({
      name: 'common',
      filename: 'bundle.[name].js',
    }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({ 'process.env': webpackEnvs.production }),
    new HtmlWebpackPlugin({
      template: 'tools/index.template.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDocType: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
      title: 'Nic Juice 2 Japan',
      filename: './index.html',
    }),
    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      comments: false,
      sourceMap: true,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      noInfo: true,
      options: {
        sassLoader: {
          includePaths: [path.resolve(__dirname, 'src', 'scss')],
        },
        context: '/',
        postcss: () => [autoprefixer],
      },
    }),
    new analyzer.BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: '../build-report.html',
    }),
  ],
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /(\.css|\.s[ac]ss)$/, loader: ExtractTextPlugin.extract('css-loader?sourceMap!postcss-loader!sass-loader') },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?name=[name].[ext]' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=[name].[ext]' },
      { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=[name].[ext]' },
      { test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=[name].[ext]' },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]' },
      { test: require.resolve('react-addons-perf'), loader: 'expose-loader?Perf' },
    ],
  },
};
export default (process.env.NODE_ENV === 'production') ? prodConfig : devConfig;
