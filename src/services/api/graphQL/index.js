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
      'Access-Control-Allow-Origin': '"*"',
      'Cache-Control': 'no-cache',
    },
  });

  // --------------------------------------------------------
  const fetchProductById = id => api.post('', {
    query: `query {
      fetchProductById(id: ${id}) {
        _id,
        mainTitle,
        title,
        price,
        images,
        nicotine_strengths,
        routeTag
      }
    }`,
  });

  const fetchPopularProducts = qty => api.post('', {
    query: `query {
      popularProducts(qty: ${qty}){
        _id,
        title,
        images,
      }
    }`,
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
