import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import compression from 'compression';
import api from '../server/api';

// ---------------------------- CONFIG -----------------------------------------
mongoose.Promise = Promise;
dotenv.config({ silent: true });

const app = express();

// ---------------------- Express Middleware -----------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(express.static('dist'));
app.use((req, res, next) => {
  const resRef = res;
  resRef.handle = (err, data) =>
  res.status(err ? 400 : 200).send(err || data);
  next();
});

app.use('/api', api);
app.get('*', (req, res) => res.sendFile(path.resolve('dist/index.html')));

// --------------------------- Listeners ---------------------------------------
const PORT = process.env.PORT || 3001;
const MONGO = process.env.MONGODB_URI || 'mongodb://localhost/nj2jp';
process.stdout.write('\n');
app.listen(PORT, err =>
  process.stdout.write(err || `==> 📡  Server @ ${PORT}
`));
mongoose.connect(MONGO, err =>
  process.stdout.write(err || `==> 📜  MONGO @ ${MONGO}
`));
