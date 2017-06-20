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
  LAMBDA_ENV,
  GRAPHQL_PORT,
  API_GATEWAY_GRAPHQL,
} = process.env;

const uri = NODE_ENV === 'development' ? `http://localhost:${GRAPHQL_PORT}/graphql` : `${API_GATEWAY_GRAPHQL}/${LAMBDA_ENV}/graphql`;


if (!uri) throw new Error('Apollo Client network interface is not defined.');
console.info('Apollo Netowrk URI = ', uri); //eslint-disable-line

const networkInterface = createNetworkInterface({ uri });
networkInterface.use([storeQueriesMiddleware]);
networkInterface.useAfter([processGQLErrors]);
const client = new ApolloClient({ networkInterface });

export default client;
