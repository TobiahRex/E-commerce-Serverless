import {
  ApolloClient,
  createNetworkInterface,
} from 'react-apollo';

import {
  processGQLErrors,
  storeQueriesMiddleware,
} from './errorLogging';

const {
  NODE_ENV,
  GRAPHQL_PORT,
  LAMBDA_GRAPHQL,
} = process.env;

const uri = NODE_ENV === 'production' ? LAMBDA_GRAPHQL : `http://localhost:${GRAPHQL_PORT}/graphql`;

if (!uri) throw new Error('Apollo Client network interface is not defined.');
console.info('Apollo Netowrk URI = ', uri); //eslint-disable-line

const networkInterface = createNetworkInterface({ uri });
networkInterface.use([storeQueriesMiddleware]);
networkInterface.useAfter([processGQLErrors]);
const client = new ApolloClient(networkInterface);
// const client = new ApolloClient({
//   networkInterface: createNetworkInterface({
//     uri,
//   }),
// });
export default client;
//
// import ApolloClient, { createNetworkInterface } from 'apollo-client';
// import {logout} from './logout';
// const networkInterface = createNetworkInterface({ uri: '/graphql' });
// networkInterface.useAfter([{
//   applyAfterware({ response }, next) {
//     if (response.status === 401) {
//       logout();
//     }
//     next();
//   }
// }]);
// const client = new ApolloClient({
//   networkInterface,
// });
