/* eslint-disable import/default */
import 'babel-polyfill';
import 'masonry-layout';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import createStore from './Redux/index';
import initiateActions from './Services/Asynch';
import routes from './Navigation/routes';
import './styles.scss';

const { store, history } = createStore();
initiateActions(store.dispatch, history, { startup: true });

render(
  <Provider store={store} >
    <Router
      history={history}
      routes={routes}
      onUpdate={() =>
        initiateActions(store.dispatch, history, { startup: false })}
    />
  </Provider >,
  document.getElementById('app'),
);
