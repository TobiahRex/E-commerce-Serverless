import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import compression from 'compression';

// ---------------------------- CONFIG -----------------------------------------
dotenv.config({ silent: true });
const app = express();
// ---------------------- Express Middleware -----------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(express.static('dist'));
app.get('*', (req, res) => res.sendFile(path.resolve('dist/index.html')));

// --------------------------- Listeners ---------------------------------------
const PORT = process.env.PORT || 3001;
process.stdout.write('\n');
app.listen(PORT, err =>
  process.stdout.write(err || `==> 📡  Server @ ${PORT}
`));
