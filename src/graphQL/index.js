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
  // BUG - Use this commented out variable as the GraphQL endpoint when launching for production.  The reason for the difference is because our Mongo DB is inside a Private Subnet VPC and will have a development endpoint or a production endpoint.
  // LAMBDA_GRAPHQL,
  LAMBDA_GRAPHQL_DEV,
} = process.env;

const uri = NODE_ENV === 'production' ? LAMBDA_GRAPHQL_DEV : `http://localhost:${GRAPHQL_PORT}/graphql`;

if (!uri) throw new Error('Apollo Client network interface is not defined.');
console.info('Apollo Netowrk URI = ', uri); //eslint-disable-line

const networkInterface = createNetworkInterface({ uri });
networkInterface.use([storeQueriesMiddleware]);
networkInterface.useAfter([processGQLErrors]);
const client = new ApolloClient({ networkInterface });

export default client;
