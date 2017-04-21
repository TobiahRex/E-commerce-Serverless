/* eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import Perf from 'react-addons-perf';
import 'babel-polyfill';
import 'masonry-layout';
import './styles.scss';
import { store, history } from './redux/index';
import saveLocation from './services/utils/saveLocation';
import routes from './navigation/routes';

window.Perf = Perf;
render(
  <Provider store={store} >
    <Router
      history={history}
      routes={routes}
      onUpdate={saveLocation}
    />
  </Provider >,
  document.getElementById('app'),
);
