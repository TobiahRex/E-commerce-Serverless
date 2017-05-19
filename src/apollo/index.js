import {
  ApolloClient,
  createNetworkInterface,
} from 'react-apollo';

const {
  NODE_ENV,
  AWS_GRAPHQL_PROD,
} = process.env;

const uri = NODE_ENV === 'production' ? AWS_GRAPHQL_PROD : 'http://localhost:3001/graphql';

if (!uri) throw new Error('Apollo Client network interface is not defined.');
console.info('Apollo Netowrk URI = ', uri); //eslint-disable-line

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri,
  }),
});
export default client;
