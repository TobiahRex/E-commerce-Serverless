import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { autoRehydrate } from 'redux-persist';
import { browserHistory } from 'react-router';
import createLogger from 'redux-logger';
import RehydrationServices from '../../services/utils/rehydrationServices';

export default (rootReducer, rootSaga) => {
  const enhancers = [];
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    createLogger(),
    routerMiddleware(browserHistory),
    sagaMiddleware,
  ];
  enhancers.push(
    window.devToolsExtension ? window.devToolsExtension() : _ => _,
    applyMiddleware(...middlewares),
    autoRehydrate(),
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
    dispatch: (action) => // Dispatches an action
    getState: () =>  // Get's the current total state tree.
    replaceReducer: (n) => // Replaces a part of the state tree.
    subscribe: subscribe(listener) => // Listens for dispatched actions.
  }
*/
