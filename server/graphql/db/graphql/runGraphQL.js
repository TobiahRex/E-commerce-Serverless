/* eslint-disable no-console */
import { graphql } from 'graphql';
import schema from './schema';

const runGraphQL = (event, cb) => {
  const { query, variables } = event.body;
  graphql(schema, query, null, {}, variables)
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
