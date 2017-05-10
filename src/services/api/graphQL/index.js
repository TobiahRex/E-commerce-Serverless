import { create } from 'apisauce';
// --------------------------------------------------------
let graphqlURL;
if (process.env.NODE_ENV === 'production') {
  graphqlURL = `${process.env.AWS_GRAPHQL_PROD}`;
} else {
  graphqlURL = `${process.env.AWS_GRAPHQL_DEV}`;
}
// --------------------------------------------------------
const createAPI = () => {
  const api = create({
    graphqlURL,
    headers: {
      'Cache-Control': 'no-cache',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'omit',
  });

  // --------------------------------------------------------
  const fetchProductById = id => api.post('', {
    query: JSON.stringify(`query {
      fetchProductById($id: Int!) {
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
    }`),
    variables: {
      id,
    },
  });

  const fetchPopularProducts = qty => api.post('', {
    query: JSON.stringify(`query {
      popularProducts($qty: Int!){
        _id,
        title,
        images,
      }
    }`),
    variables: {
      qty,
    },
  });

  // const createThing = thing =>
  // api.post('api/things', { name: thing.name });
  //
  // const removeThing = id =>
  // api.delete(`api/things/${id}`);
  //
  // const editThing = thing =>
  // api.put(`api/things/${thing._id}`, { name: thing.name });

  // --------------------------------------------------------
  return {
    fetchProductById,
    fetchPopularProducts,
  };
};

// --------------------------------------------------------
export default { createAPI };
