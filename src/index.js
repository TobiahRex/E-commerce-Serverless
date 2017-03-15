/* eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { synchHistoryWithStore } from 'react-router-redux';

import 'masonry-layout';
import './Services/history';

import { taxRateListener } from './Services/socket-init';
import createStore from './Redux/index';
import initiateActions from './Services/asynchDispatchServices';
import routes from './Navigation/main';

const store = createStore();
const history = synchHistoryWithStore(browserHistory, store);
initiateActions(store.dispatch);
taxRateListener(store.dispatch);

render(
  <Provider store={store} >
    <Router
      history={history}
      onUpdate={initiateActions}
      route={routes}
    />
  </Provider >
  ,
  document.getElementById('app'),
);
