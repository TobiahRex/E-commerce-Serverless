import {
  ApolloClient,
  createNetworkInterface,
} from 'react-apollo';
import logErrors from './errorLogging';

const {
  LAMBDA_ENV,
  GRAPHQL_PORT,
  CLIENT_GRAPHQL_URL,
} = process.env;

const uri = CLIENT_GRAPHQL_URL;


if (!uri) throw new Error('Apollo Client network interface is not defined.');
console.info('Apollo Netowrk URI = ', uri); //eslint-disable-line

const networkInterface = createNetworkInterface({ uri });
// networkInterface.use([storeQueriesMiddleware]);
networkInterface.useAfter([logErrors]);
const client = new ApolloClient({ networkInterface });

export default client;
