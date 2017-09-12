/* eslint-disable no-console */
import 'babel-polyfill';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './db/graphql/schema';
import { startDB } from './db/mongo/connection';
import runGraphQL from './db/graphql/runGraphQL';

require('dotenv').config({ path: path.resolve('.env-dev'), silent: true }); //eslint-disable-line

const PORT = process.env.GRAPHIQL_PORT || 3002;
const server = express();

startDB()
.then(({ db, dbModels }) => {
  console.log('\n//handler.js @ startDB\n db: ', db.base.connections[0], '\ndbModels: ', dbModels);
  const event = {
    body: {
      query: `query popularProducts($qty: Int!) {
        popularProducts(qty: $qty) {
          _id
          product {
            title
            images {
              purpose
              url
            }
          }
        }
      }`,
      variables: { qty: 1 },
    },
  };

  return runGraphQL({ event, dbModels, db });
})
.then((GraphQLResponse) => {
  console.log('\n//handler.js @ \nRESOLVE: ', GraphQLResponse);
  console.log('GraphQLResponse: ', GraphQLResponse);
})
.catch((error) => {
  console.log('\n//handler.js @ CATCH\nERROR: ', error);
});

server.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));
server.listen(PORT, () => console.log(`Server listening @ ${PORT}
Graphiql Server @ http://localhost:${PORT}/graphql`));
