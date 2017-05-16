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

  const fetchProductById = id => api.post('', {
    query: `query {
      fetchProductById(id: ${id}) {
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
  });
  const fetchPopularProducts = qty => api.post('', {
    query: `query {
      popularProducts(qty: ${qty}) {
        _id
        product {
          title
          images {
            purpose
            url
          }
        }
      }
    }`,
  });

  return {
    fetchProductById,
    fetchPopularProducts,
  };
};
export default { createAPI };
