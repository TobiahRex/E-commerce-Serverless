/* eslint-disable no-console */
import { graphql } from 'graphql';
import schema from './schema';
// import { closeDB } from '../mongo/connection';

const runGraphQL = ({ event, dbModels }) =>
new Promise((resolve, reject) => {
  const { variables, query } = event.body;

  graphql(schema, query, null, {...dbModels, ...event.headers}, variables)
  .then((dbResponse) => {
    console.log(`
    (runGraphQL.js @ graphql.catch)
    Results = ${JSON.stringify(dbResponse, null, 2)}
    `);
    // return closeDB(db, dbResponse);
    resolve(dbResponse);
  })
  .catch((error) => {
    console.log(`
    (runGraphQL.js @ graphql.catch)
    Error = ${error}
    `);
    reject(error);
  });
});
export default runGraphQL;
