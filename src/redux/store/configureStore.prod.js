import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { autoRehydrate } from 'redux-persist';
import { browserHistory } from 'react-router';
import RehydrationServices from '../../services/utils/rehydrationServices';

export default (rootReducer, rootSaga) => {
  const enhancers = [];
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(browserHistory),
  ];

  enhancers.push(
    applyMiddleware(...middlewares),
    autoRehydrate(),
  );

  const store = createStore(rootReducer, compose(...enhancers));
  const history = syncHistoryWithStore(browserHistory, store);
  RehydrationServices.updateReducers(store);
  sagaMiddleware.run(rootSaga);

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
