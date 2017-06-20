/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import saveLocation from './services/utils/saveLocation';
import routes from './navigation/routes';

export default class Root extends Component {
  render() {
    const {
      store,
      routes
      history,
      apolloClient,
    } = this.props;
    return (
      <ApolloProvider client={apolloClient} store={store}>
        <Router
          history={history}
          routes={routes}
          onUpdate={() => saveLocation(store.dispatch)}
        />
        </ApolloProvider >
    );
  }
}
const { any, objectOf } = PropTypes;
Root.propTypes = {
  store: objectOf(any).isRequired,
  history: objectOf(any).isRequired,
};
