import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress } from 'graphql-server-express';
import cors from 'cors';
import schema from './db/graphql/schema';

require('dotenv').load({ silent: true }); //eslint-disable-line

const PORT = 3001;
const server = express();
server.use('*', cors({ origin: 'http://localhost:3000' }));
server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
}));
server.listen(PORT, () =>
console.log(`Server listening @ ${PORT}
Graphiql Server @ http://localhost:${PORT}/graphiql`));
