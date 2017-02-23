import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mobileDetect from 'mobile-detect';
import apiActions from '../Redux/ApiRedux';
import mobileActions from '../Redux/MobileRedux';

export default (rootReducer, rootSaga) => {
  const enhancers = [];
  const middlewares = [];

  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);

  enhancers.push(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, compose(...enhancers));
  sagaMiddleware.run(rootSaga);

  store.dispatch(apiActions.fetching());

  const mobileDevice = mobileDetect(window.navigator.userAgent);
  const type = mobileDevice.mobile();
  const screenSize = String(window.screen.width);
  store.dispatch(mobileActions.setMobileDevice(screenSize, type));

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
