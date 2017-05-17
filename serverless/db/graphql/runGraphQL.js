/* eslint-disable no-console */
import { graphql } from 'graphql';
import schema from './schema';
import { closeDB } from '../mongo/connection';

const runGraphQL = ({ event, dbModels, db }) =>
new Promise((resolve, reject) => {
  const { variables, query } = event.body;

  graphql(schema, query, null, dbModels, variables)
  .then((dbResponse) => {
    console.log('\n//runGraphQL.js @ graphql.then: \ndbResponse = ', dbResponse);
    return closeDB(db, dbResponse);
  })
  .then(resolve)
  .catch((error) => {
    console.log('\n//runGraphQL.js @ graphql.catch: \n error = ', error);
    reject(error);
  });
});
export default runGraphQL;
