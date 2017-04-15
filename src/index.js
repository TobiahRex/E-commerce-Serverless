/* eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import Perf from 'react-addons-perf';
import 'masonry-layout';
import './styles.scss';
import createStore from './redux/index';
import startupActions from './services/utils';
import routes from './navigation/routes';

window.Perf = Perf;
const { store, history } = createStore();
startupActions(store.dispatch, history, { startup: true });

render(
  <Provider store={store} >
    <Router
      history={history}
      routes={routes}
      onUpdate={() =>
        startupActions(store.dispatch, history, { startup: false })}
    />
  </Provider >,
  document.getElementById('app'),
);
