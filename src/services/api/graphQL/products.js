import { create } from 'apisauce';

let graphqlURL;
if (process.env.NODE_ENV === 'production') {
  graphqlURL = `${process.env.AWS_GRAPHQL_PROD}`;
} else {
  graphqlURL = `${process.env.AWS_GRAPHQL_DEV}`;
}
console.info('graphqlURL: ', graphqlURL);
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
