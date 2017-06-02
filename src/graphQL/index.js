import {
  ApolloClient,
  createNetworkInterface,
} from 'react-apollo';

// import logErrors from './errorLogging';
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
const client = new ApolloClient({ networkInterface });

export default client;
