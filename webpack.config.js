/* eslint-disable no-use-before-define, max-len, import/first */
import path from 'path';
import webpack from 'webpack';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import analyzer from 'webpack-bundle-analyzer';
import autoprefixer from 'autoprefixer';

import CommonsChunkPlugin from './node_modules/webpack/lib/optimize/CommonsChunkPlugin';
import webpackEnvs from './tools/webpack.envs';

// -----------------------------------------------------------------------------
const extractCSS = new ExtractTextPlugin('[contenthash]-css.css');
const extractSCSS = new ExtractTextPlugin('[contenthash]-scss.css');
let webpackConfig = {}; // eslint-disable-line

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
      './src/webpack-public-path',
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?reload=true',
      path.resolve(__dirname, 'src/index.js'), // Defining path seems necessary for this to work consistently on Windows machines.
    ],
    // vendor: ['react', 'react-dom', 'reduxsauce'],
  },
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  devtool: 'eval-source-map',
  target: 'web',
  plugins: [
    new ProgressBarPlugin(),
    new CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].bundle.js',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1,
    }),
    new CommonsChunkPlugin({
      name: 'common',
      filename: '[name].bundle.js',
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
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /(\.css|\.s[ac]ss)$/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap',
          'postcss-loader',
          'sass-loader?sourceMap',
        ],
      },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]' },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader' },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
      },
      { test: /\.ico$/, loader: 'file-loader?name=[name].[ext]' },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
      },
      { test: require.resolve('react-addons-perf'), loader: 'expose-loader?Perf' },
    ],
  },
};

const prodConfig = {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
  },
  stats: {
    color: true,
    reasons: true,
    chunks: true,
  },
  entry: {
    app: path.resolve('./src/index'),
  },
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  devtool: false,
  target: 'web',
  plugins: [
    new ProgressBarPlugin(),
    new CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].bundle.js',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1,
    }),
    new CommonsChunkPlugin({
      name: 'common',
      filename: '[name].bundle.js',
    }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({ 'process.env': webpackEnvs.production }),
    new webpack.NoEmitOnErrorsPlugin(),
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
    extractSCSS,
    extractCSS,
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      comments: false,
      sourceMap: true,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      noInfo: true,
      options: {
        sassLoader: {
          includePaths: [path.resolve(__dirname, 'src', 'scss')],
        },
        cssLoader: {
          includePaths: [path.resolve(__dirname, 'src', 'css')],
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
      {
        test: /(\.s[ac]ss)$/,
        use: extractSCSS.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
        }),
      },
      {
        test: /(\.css)$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?name=[name].[ext]' },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=[name].[ext]',
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=[name].[ext]',
      },
      {
        test: /\.svg(\?v=\d+.\d+.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=[name].[ext]',
      },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]' },
      { test: require.resolve('react-addons-perf'), loader: 'expose-loader?Perf' },
    ],
  },
};

const tshConfig = {
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
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  devtool: false,
  target: 'web',
  plugins: [
    new ProgressBarPlugin(),
    new CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].bundle.js',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1,
    }),
    new CommonsChunkPlugin({
      name: 'common',
      filename: '[name].bundle.js',
    }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({ 'process.env': webpackEnvs.troubleshoot }),
    new webpack.NoEmitOnErrorsPlugin(),
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
    extractCSS,
    extractSCSS,
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      comments: false,
      sourceMap: true,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      noInfo: true,
      options: {
        sassLoader: {
          includePaths: [path.resolve(__dirname, 'src', 'scss')],
        },
        cssLoader: {
          includePaths: [path.resolve(__dirname, 'src', 'css')],
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
      {
        test: /(\.css)$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      },
      {
        test: /(\.s[ac]ss)$/,
        use: extractSCSS.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
        }),
      },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?name=[name].[ext]' },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=[name].[ext]',
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=[name].[ext]',
      },
      {
        test: /\.svg(\?v=\d+.\d+.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=[name].[ext]',
      },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]' },
      { test: require.resolve('react-addons-perf'), loader: 'expose-loader?Perf' },
    ],
  },
};

switch (process.env.NODE_ENV) {
  case 'production':
    webpackConfig = prodConfig;
    break;
  case 'troubleshoot':
    webpackConfig = tshConfig;
    break;
  case 'development':
    webpackConfig = devConfig;
    break;
  default: break;
}

export default webpackConfig;
