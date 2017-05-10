import { graphql } from 'graphql';
import schema from './schema';

const runGraphQL = (event, cb) => {
  const { query, variables } = event.body;
  graphql(schema, query, null, {}, variables)
  .then(result => cb(null, result))
  .catch(error => cb(error));
};
export default runGraphQL;
