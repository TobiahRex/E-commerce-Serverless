/* eslint-disable import/default, global-require, no-unused-expressions, import/first */
// if (!global._babelPolyfill) require('babel-polyfill'); // eslint-disable-line

import 'babel-polyfill';
import React from 'react';
import './styles.scss';
import 'masonry-layout';
import { render } from 'react-dom';
import { Router } from 'react-router';
import Perf from 'react-addons-perf';
import { ApolloProvider } from 'react-apollo';
import createStore from './redux/index';
import client from './graphQL/';
import saveLocation from './services/utils/saveLocation';
import routes from './navigation/routes';

window.Perf = Perf;
const { store, history } = createStore();
store.dispatch({ type: 'APP_STARTUP' });

render(
  <ApolloProvider client={client} store={store}>
    <Router
      history={history}
      routes={routes}
      onUpdate={() => saveLocation(store.dispatch)}
    />
  </ApolloProvider >,
  document.getElementById('app'),
);
