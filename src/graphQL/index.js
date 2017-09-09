import {
  ApolloClient,
  createNetworkInterface,
} from 'react-apollo';
import logErrors from './errorLogging';

const { CLIENT_GRAPHQL_URL: uri } = process.env;
console.info('Apollo Netowrk URI = ', uri); // eslint-disable-line no-console
if (!uri) throw new Error('Apollo Client network interface is not defined.');

const networkInterface = createNetworkInterface({ uri });
networkInterface.useAfter([logErrors]);
const client = new ApolloClient({ networkInterface });

export default client;
