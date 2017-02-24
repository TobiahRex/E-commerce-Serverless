/* eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import { taxRateListener } from './Services/socket-init';
import createStore from './Redux/index';
import routes from './Navigation/main';
import initiateActions from './Services/asynchDispatchServices';

const store = createStore();
initiateActions(store.dispatch);
taxRateListener(store.dispatch);

render(
  <Provider store={store} >
    <Router
      history={browserHistory}
      routes={routes}
      onUpdate={() => initiateActions(store.dispatch)}
    />
  </Provider >
  ,
  document.getElementById('app')
);
