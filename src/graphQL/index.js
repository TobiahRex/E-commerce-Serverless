import {
  ApolloClient,
  createNetworkInterface,
} from 'react-apollo';

const {
  NODE_ENV,
  GRAPHQL_PORT,
  LAMBDA_GRAPHQL,
} = process.env;

const uri = NODE_ENV === 'production' ? LAMBDA_GRAPHQL : `http://localhost:${GRAPHQL_PORT}/graphql`;

if (!uri) throw new Error('Apollo Client network interface is not defined.');
console.info('Apollo Netowrk URI = ', uri); //eslint-disable-line

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri,
  }),
});
export default client;
