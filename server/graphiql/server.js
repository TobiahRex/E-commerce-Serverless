/* eslint-disable no-console */
import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import cors from 'cors';
import schema from './db/graphql/schema';
import api from './api/index';

require('dotenv').load({ silent: true });

const PORT = 3001;
const server = express();
server.use('*', cors({ origin: 'http://localhost:3000' }));
server.use(bodyParser.json({ limit: '10mb' }));
server.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

server.use('/graphql', graphqlExpress({ schema }));
server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

server.use('/api', api);

server.listen(PORT, () => console.log(`Server listening @ ${PORT}
Graphiql Server @ http://localhost:${PORT}/graphiql`));
