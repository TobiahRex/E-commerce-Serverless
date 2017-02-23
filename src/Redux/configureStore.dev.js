import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import MobileDetect from 'mobile-detect';
import apiActions from '../Redux/ApiRedux';
import mobileActions from '../Redux/MobileRedux';

export default (rootReducer, rootSaga) => {
  const enhancers = [];
  const middlewares = [];

  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);
  middlewares.push(createLogger());

  enhancers.push(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  const store = createStore(rootReducer, compose(...enhancers));
  sagaMiddleware.run(rootSaga);

  store.dispatch(apiActions.fetching());

  // store.dispatch(
  //   mobileActions.setMobileDevice(
  //     String(window.screen.width), mobileDevice.mobile()
  //   )
  // );

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
