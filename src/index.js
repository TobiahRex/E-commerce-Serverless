/* eslint-disable import/default, global-require, no-unused-expressions, import/first */

import React from 'react';
import './styles.scss';

import 'babel-polyfill';
import 'masonry-layout';
import { render } from 'react-dom';
import { Router } from 'react-router';
import Perf from 'react-addons-perf';
import { ApolloProvider } from 'react-apollo';
import createStore from './redux/index';
import client from './apollo/';
import saveLocation from './services/utils/saveLocation';
import routes from './navigation/routes';

window.Perf = Perf;
const { store, history } = createStore();
store.dispatch({ type: 'APP_STARTUP' });

render(
  <ApolloProvider store={store} client={client}>
    <Router
      history={history}
      routes={routes}
      onUpdate={() => saveLocation(store.dispatch)}
    />
  </ApolloProvider >,
  document.getElementById('app'),
);
