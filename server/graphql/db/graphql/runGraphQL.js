/* eslint-disable no-console */
import { graphql } from 'graphql';
import schema from './schema';

const runGraphQL = ({
  event,
  Product,
  User,
}, cb) => {
  const { query, variables, dbType } = event.body;

  switch (dbType) {
    case 'Product': variables.model = Product; break;
    case 'User': variables.model = User; break;
    default: break;
  }

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
