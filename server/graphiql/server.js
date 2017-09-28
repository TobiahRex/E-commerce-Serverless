/* eslint-disable no-console */
import 'babel-polyfill';
import colors from 'colors';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import cors from 'cors';
import schema from './db/graphql/schema';
import api from './api/index';
import authCheck from './api/authentication';
import envCheck from './envCheck';

require('dotenv').config({ path: path.resolve('.dev-server-env') });

envCheck(process.env.NODE_ENV);
const PORT = process.env.GRAPHQL_PORT;
const app = express();
app.use('*', cors({ origin: process.env.BASE_URL_DEV }));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.use('/graphql', graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
app.use(authCheck);
app.use('/api', api);

app.listen(PORT, () => console.log(`Graphiql Server @ ${colors.yellow(process.env.CLIENT_GRAPHQL_URL)}`));
