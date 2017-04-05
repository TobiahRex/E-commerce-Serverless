/* eslint-disable import/default */
import 'babel-polyfill';
import 'masonry-layout';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import './styles.scss';

import createStore from './Redux/index';
import initiateActions from './Services/Asynch';
import routes from './Navigation/routes';

const store = createStore();
const history = syncHistoryWithStore(browserHistory, store);
initiateActions(store.dispatch, history);

render(
  <Provider store={store} >
    <Router
      history={history}
      routes={routes}
      onUpdate={() => initiateActions(store.dispatch, history)}
    />
  </Provider >
  ,
  document.getElementById('app'),
);
