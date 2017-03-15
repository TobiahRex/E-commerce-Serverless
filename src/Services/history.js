import createHistory from 'history/createBrowserHistory';

const history = createHistory();
export const unlisten = history.listen((location, action) => {
  console.info('location: ', location, '\naction: ', action);
});

export default history;
