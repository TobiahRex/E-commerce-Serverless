import express from 'express';
import graphqlHTTP from 'express-graphql';
import Schema from '../../serverless/db/graphql/schema';

const PORT = process.env.GRAPHIQL_PORT || 3002;

const server = express();
server.use('/graphql', graphqlHTTP({
  Schema,
  graphiql: true,
}));
server.listen(PORT, () => console.log(`Server listening @ ${PORT}`));
