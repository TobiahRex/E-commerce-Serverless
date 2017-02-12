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

function showLocation() {
  return (console.info(window.location.pathname));
}

render(
  <Provider store={store} >
    <Router
      history={browserHistory}
      routes={routes}
      onUpdate={showLocation}
    />
    </Provider >
  ,
  document.getElementById('app')
);
