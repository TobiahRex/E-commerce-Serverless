/* eslint-disable no-console */
import { graphql } from 'graphql';
import schema from './schema';

const runGraphQL = ({ event, dbModels }) =>
new Promise((resolve, reject) => {
  const { variables, query } = event.body;
  console.log('\nvariables: ', variables, '\ndbModels: ', dbModels);

  graphql(schema, query, dbModels, variables)
  .then((result) => {
    console.log('\n//runGraphQL.js @ RESOLVE');
    resolve(result);
  })
  .catch((error) => {
    console.log('\n//runGraphQL.js @ REJECT');
    reject(error);
  });
});
export default runGraphQL;
