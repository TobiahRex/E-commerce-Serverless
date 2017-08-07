/* eslint-disable import/default, global-require, no-unused-expressions, import/first */
// if (!global._babelPolyfill) require('babel-polyfill'); // eslint-disable-line

import 'babel-polyfill';
import React from 'react';

import './styles.scss';
import 'masonry-layout';
import './services/utils/formValidationRulesExtension';

import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Perf from 'react-addons-perf';

import createStore from './redux/index';
import apolloClient from './graphql';
import routes from './navigation/routes';
import Root from './Root';

window.Perf = Perf;
const { store, history } = createStore();
store.dispatch({ type: 'APP_STARTUP' });


render(
  <AppContainer>
    <Root
      store={store}
      routes={routes}
      history={history}
      apolloClient={apolloClient}
    />
  </AppContainer>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NewRoot = require('./Root').default;
    render(
      <AppContainer>
        <NewRoot
          store={store}
          routes={routes}
          history={history}
          apolloClient={apolloClient}
        />
      </AppContainer>,
      document.getElementById('app'),
    );
  });
}
