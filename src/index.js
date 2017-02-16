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

alert(/Android 6.0| Android Android 5.1|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent));

render(
  <Provider store={store} >
    <Router
      history={browserHistory}
      routes={routes}
      onUpdate={() => {
        asynchServices.saveGeoLocation(store.dispatch);
        asynchServices.generateDynamicTitle(store.dispatch);
      }}
    />
  </Provider >
  ,
  document.getElementById('app')
);
