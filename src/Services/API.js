import { create } from 'apisauce';

// --------------------------------------------------------
let baseURL;
if (process.env.NODE_ENV === 'production') {
  baseURL = `${process.env.DEPLOY_URL}`;
} else {
  baseURL = process.env.BASE_URL;
}
console.info('baseURL: ', baseURL);

// --------------------------------------------------------
const createAPI = () => {
  const api = create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
    },
  });

  // --------------------------------------------------------
  const getAllThings = () =>
  api.get('api/things/');

  const createThing = thing =>
  api.post('api/things', { name: thing.name });

  const removeThing = id =>
  api.delete(`api/things/${id}`);

  const editThing = thing =>
  api.put(`api/things/${thing._id}`, { name: thing.name });

  // --------------------------------------------------------
  return {
    getAllThings,
    createThing,
    removeThing,
    editThing,
  };
};

// --------------------------------------------------------
export default { createAPI };
