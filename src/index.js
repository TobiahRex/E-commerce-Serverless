/* eslint-disable import/default, global-require, no-unused-expressions, import/first */

import React from 'react';
import './styles.scss';

import 'babel-polyfill';
import 'masonry-layout';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import Perf from 'react-addons-perf';
import createStore from './redux/index';
import saveLocation from './services/utils/saveLocation';
import routes from './navigation/routes';

window.Perf = Perf;
const { store, history } = createStore();
store.dispatch({ type: 'APP_STARTUP' });

render(
  <Provider store={store} >
    <Router
      history={history}
      routes={routes}
      onUpdate={() => saveLocation(store.dispatch)}
    />
  </Provider >,
  document.getElementById('app'),
);
