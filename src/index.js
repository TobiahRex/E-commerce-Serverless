import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MobileDetect from 'mobile-detect';

import './Services/socket-init';
import createStore from './Redux/index';
import routes from './Navigation/main';
import asynchServices from './Services/asynchDispatchServices';

injectTapEventPlugin();
const store = createStore();

// alert(/Android 6.0|Android|Android 5.1|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent));

const md = new MobileDetect(window.navigator.userAgent);
alert(JSON.stringify(md, null, 2));

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
