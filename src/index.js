import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import createStore from './Redux/index';
import routes from './Navigation/main';

injectTapEventPlugin();
const store = createStore();

render(
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
  </Provider >
  ,
  document.getElementById('app')
);
