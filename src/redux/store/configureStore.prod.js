import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { autoRehydrate } from 'redux-persist';
import { browserHistory } from 'react-router';
import RehydrationServices from '../../services/utils/rehydrationServices';

// BUG delete me before final launch
import createLogger from 'redux-logger';

export default (rootReducer, rootSaga) => {
  const enhancers = [];
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    routerMiddleware(browserHistory),
    // BUG delete me before final launch
    createLogger(),
    sagaMiddleware,
  ];

  enhancers.push(
    applyMiddleware(...middlewares),
    autoRehydrate(),
    // BUG delete me before final launch
    window.devToolsExtension ? window.devToolsExtension() : _ => _,
  );

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
