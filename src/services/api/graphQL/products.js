import { create } from 'apisauce';

const {
  NODE_ENV,
  GRAPHQL_PORT,
  AWS_GRAPHQL_PROD,
} = process.env;
const graphqlURL = NODE_ENV === 'production' ? AWS_GRAPHQL_PROD : `http://localhost:${GRAPHQL_PORT}`;

if (!graphqlURL) throw new Error(`Cannot create API: "graphqlURL" = ${typeof graphqlURL}.`);
console.info('graphqlURL: ', graphqlURL); // eslint-disable-line

const createAPI = () => {
  const api = create({
    baseURL: graphqlURL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'omit',
  });

  const fetchProductById = _id => api.post('', {
    query: `query fetchProductById($_id: String!) {
      fetchProductById(_id: $_id) {
        _id
        mainTitle
        title
        price
        images {
          purpose
          url
        }
        nicotine_strengths
        routeTag
      }
    }`,
    variables: {
      _id,
    },
  });
  const fetchPopularProducts = qty => api.post('', {
    query: `query popularProducts($qty: Int!) {
      popularProducts(qty: $qty) {
        _id
        product {
          title
          routeTag
          images {
            purpose
            url
          }
        }
      }
    }`,
    variables: {
      qty,
    },
  });

  return {
    fetchProductById,
    fetchPopularProducts,
  };
};
export default { createAPI };
