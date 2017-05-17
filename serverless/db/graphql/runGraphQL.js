/* eslint-disable no-console */
import { graphql } from 'graphql';
import schema from './schema';

const runGraphQL = ({ event, dbModels }, cb) => {
  const { variables, query } = event.body;
  console.log('\nvariables: ', variables, '\ndbModels: ', JSON.stringify(dbModels, null, 2));

  graphql(schema, query, dbModels, variables)
  .then((result) => {
    console.log('\n//runGraphQL.js @ RESOLVE');
    cb(null, result);
  })
  .catch((error) => {
    console.log('\n//runGraphQL.js @ REJECT');
    cb(error);
  });
};
export default runGraphQL;
