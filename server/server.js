import express from 'express';
import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import hotMiddleware from 'webpack-hot-middleware';
import devMiddleware from 'webpack-dev-middleware';
import colors from 'colors'; // eslint-disable-line no-unused-vars
import webpackConfig from '../webpack.config';

require('dotenv').config({ path: path.resolve('.env-prod') });

if (process.env.NODE_ENV !== 'development') {
  const errorMsg = 'Local Server DENIED: You are in a PRODUCTION environment.'.red;
  console.log(errorMsg); // eslint-disable-line no-console
  throw new Error();
}

const PORT = process.env.PORT;
const app = express();
// ---------------------- Webpack Middleware -----------------------------------
const compiler = webpack(webpackConfig);
app.use(devMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  noInfo: false,
  quiet: false,
  stats: {
    assets: true,
    colors: true,
    version: true,
    hash: true,
    timings: false,
    chunks: false,
    chunkModules: false,
  },
}));
app.use(hotMiddleware(compiler));
// ---------------------- Express Middleware -----------------------------------
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('src'));
app.get('*', (req, res) => res.sendFile(path.resolve('src/index.html')));
// --------------------------- Listeners ---------------------------------------
process.stdout.write('\n');
app.listen(PORT, err =>
  process.stdout.write(JSON.stringify(err, null, 2) || `==> 📡  Server @ ${PORT}
`));
