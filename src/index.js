import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './Services/socket-init';
import createStore from './Redux/index';
import routes from './Navigation/main';
import asynchServices from './Services/asynchDispatchServices';

injectTapEventPlugin();
const store = createStore();
render(
  <Provider store={store} >
    <Router
      history={browserHistory}
      routes={routes}
      onUpdate={() => {
        asynchServices.determineMobileDevice(store.dispatch);
        asynchServices.saveGeoLocation(store.dispatch);
        asynchServices.generateDynamicTitle(store.dispatch);
      }}
    />
  </Provider >
  ,
  document.getElementById('app')
);
