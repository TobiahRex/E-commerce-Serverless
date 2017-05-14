import { create } from 'apisauce';

let graphqlURL;
if (process.env.NODE_ENV === 'production') {
  graphqlURL = `${process.env.AWS_GRAPHQL_PROD}`;
} else {
  graphqlURL = `${process.env.AWS_GRAPHQL_DEV}`;
}

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
    query: `query($id: String!) {
      fetchProductById(id: $id) {
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
      id,
    },
  });

  const fetchPopularProducts = qty => api.post('', {
    query: `query($qty: Int!) {
      popularProducts(qty: $qty){
        _id
        title
        images
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
