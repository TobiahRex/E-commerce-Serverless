import express from 'express';
import http from 'http';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import socketIO from 'socket.io';
import api from '../server/api';

// ---------------------------- CONFIG -----------------------------------------
mongoose.Promise = Promise;
dotenv.config({ silent: true });

const app = express();
const server = new http.Server(app);
const io = socketIO(server);
let socketEmitter;

io.on('connection', (socket) => {
  process.stdout.write('\n>>> Socket Connection!\n');
  socketEmitter = (type, data) => socket.emit(type, data);
});

// ---------------------- Express Middleware -----------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));
app.use((req, res, next) => {
  const resRef = res;
  resRef.socketEmitter = socketEmitter;
  resRef.handle = (err, data) =>
  res.status(err ? 400 : 200).send(err || data);
  next();
});

app.use('/api', api);
app.get('*', (req, res) => res.sendFile(path.resolve('dist/index.html')));

// --------------------------- Listeners ---------------------------------------
const PORT = process.env.PORT || 3000;
const MONGO = process.env.MONGODB_URI || 'mongodb://localhost/template';
server.listen(PORT, err =>
  process.stdout.write(err || `==> 📡  Server @ ${PORT}
`));
mongoose.connect(MONGO, err =>
  process.stdout.write(err || `==> 📜  MONGO @ ${MONGO}
`));
