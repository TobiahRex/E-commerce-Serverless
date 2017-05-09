import { graphql } from 'graphql';
import Schema from './schema';

const runGraphQL = (event, cb) => {
  console.log('1) runGraphQL');
  const { query, variables } = event.body;
  graphql(Schema, query, null, {}, variables)
  .then(res => cb(null, res))
  .catch(cb);
};
export default runGraphQL;
/*
graphql(
  schema: GraphQLSchema,
  requestString: string,
  rootValue?: ?any,
  contextValue?: ?any,
  variableValues?: ?{[key: string]: any},
  operationName?: ?string
): Promise<GraphQLResult>
*/
