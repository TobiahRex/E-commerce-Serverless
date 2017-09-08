/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import { addLocaleData, IntlProvider } from 'react-intl';
import saveLocation from './services/utils/saveLocation';

class Root extends React.Component {
  render() {
    const {
      store,
      locale,
      routes,
      history,
      messages,
      apolloClient,
    } = this.props;
    return (
      <ApolloProvider client={apolloClient} store={store}>
        <IntlProvider locale={locale} messages={messages}>
          <Router
            history={history}
            routes={routes}
            onUpdate={() => saveLocation(store.dispatch)}
          />
        </IntlProvider>
      </ApolloProvider >
    );
  }
}

export default connect(({ locale: activeLanguage }) => ({
  locale: activeLanguage,
  messages: locale.translations[activeLanguage],
}))(Root);

const { any, objectOf } = PropTypes;
Root.propTypes = {
  store: objectOf(any).isRequired,
  routes: objectOf(any).isRequired,
  history: objectOf(any).isRequired,
  apolloClient: objectOf(any).isRequired,
};
