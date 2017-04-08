import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createLogger from 'redux-logger';
import apiActions from '../Redux/ApiRedux';

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
    window.devToolsExtension ? window.devToolsExtension() : _ => _,
  );

  const store = createStore(rootReducer, compose(...enhancers));
  sagaMiddleware.run(rootSaga);

  store.dispatch(apiActions.fetching());

  return store;
};

/* Store Object Ref.
  store: {
    dispatch: (action) =>
    getState: () =>
    replaceReducer: (n) =>
    subscribe: subscribe(listener) =>
  }
*/
