import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import apiActions from '../../redux/api';

export default (rootReducer, rootSaga) => {
  const enhancers = [];
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(browserHistory),
  ];

  enhancers.push(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, compose(...enhancers));
  sagaMiddleware.run(rootSaga);

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
