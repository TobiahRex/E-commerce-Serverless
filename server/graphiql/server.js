import 'babel-polyfill';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './db/graphql/schema';

require('dotenv').load({ silent: true }); //eslint-disable-line

const PORT = process.env.GRAPHIQL_PORT || 3002;
const server = express();

server.use('/graphiql', graphqlHTTP({
  schema,
  graphiql: true,
}));
server.listen(PORT, () => console.log(`Server listening @ ${PORT}
Graphiql Server @ http://localhost:${PORT}/graphiql`));
