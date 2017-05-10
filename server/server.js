import express from 'express';
import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import webpack from 'webpack';
import hotMiddleware from 'webpack-hot-middleware';
import devMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
import api from './api';

const dotenv = require('dotenv').config({ silent: true }); //eslint-disable-line
// ---------------------------- CONFIG -----------------------------------------
mongoose.Promise = Promise;
// const __DEV__ = process.env.NODE_ENV === 'development';
// const awsMongoDevelopment = process.env.AWS_MONGO_URI_DEV;
// const awsMongoProduction = process.env.AWS_MONGO_URI_PROD;
// const MONGO = __DEV__ ? awsMongoDevelopment : awsMongoProduction;
const PORT = process.env.PORT || 3000;
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
app.use((req, res, next) => {
  const resRef = res;
  resRef.handle = (err, data) => {
    if (err) {
      process.stdout.write(`Response Error: 😕
${err}
`);
    } else {
      process.stdout.write(`Response Data: 😎
${data}
`);
    }
    res.status(err ? 400 : 200).send(err || data);
  };
  next();
});
app.use('/api', api);
app.get('*', (req, res) => res.sendFile(path.resolve('./src/index.html')));

// --------------------------- Listeners ---------------------------------------
process.stdout.write('\n');
app.listen(PORT, err =>
  process.stdout.write(JSON.stringify(err, null, 2) || `==> 📡  Server @ ${PORT}
`));

// mongoose.connect(MONGO)
// .then(() => process.stdout.write(`==> 📜  MONGO @ ${MONGO}
// `))
// .catch(err => process.stdout.write(JSON.stringify(err, null, 2)));
