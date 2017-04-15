import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { browserHistory } from 'react-router';
import createLogger from 'redux-logger';
import apiActions from '../../redux/api';

export default (rootReducer, rootSaga) => {
  const enhancers = [];
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(browserHistory),
    createLogger(),
  ];

  enhancers.push(
    applyMiddleware(...middlewares),
    autoRehydrate(),
    window.devToolsExtension ? window.devToolsExtension() : _ => _,
  );

  const store = createStore(rootReducer, compose(...enhancers));
  sagaMiddleware.run(rootSaga);
  persistStore(store);
  store.dispatch(apiActions.fetching());
  const history = syncHistoryWithStore(browserHistory, store);

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
