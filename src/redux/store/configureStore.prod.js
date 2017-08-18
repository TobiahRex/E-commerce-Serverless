import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { autoRehydrate } from 'redux-persist';
import { browserHistory } from 'react-router';
import RehydrationServices from '../../services/utils/rehydrationServices';
import apolloClient from '../../graphql/';
// BUG delete this in production
import createLogger from 'redux-logger';

export default (rootReducer, rootSaga) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    apolloClient.middleware(),
    createLogger(), // BUG delete this in production
    routerMiddleware(browserHistory),
    sagaMiddleware,
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
    autoRehydrate(),
    window.devToolsExtension ? window.devToolsExtension() : _ => _,
  ];

  const store = createStore(rootReducer, compose(...enhancers));
  const history = syncHistoryWithStore(browserHistory, store);
  sagaMiddleware.run(rootSaga);
  RehydrationServices.updateReducers(store);

  return {
    store,
    history,
  };
};

/* Store Object Ref.
  store: {
    dispatch: (action) =>
    getState: () =>
    replaceReducer: (n) =>
    subscribe: subscribe(listener) =>
  }
*/
