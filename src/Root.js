/* eslint-disable react/prefer-stateless-function */
import ja from 'react-intl/locale-data/ja';
import en from 'react-intl/locale-data/en';
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
        <IntlProvider key={locale} locale={locale} messages={messages}>
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
addLocaleData([...ja, ...en]);
export default connect(({ locale }) => ({
  locale: locale.activeLanguage,
  messages: locale.translations[locale.activeLanguage].messages,
}))(Root);

const {
  any,
  string,
  objectOf,
} = PropTypes;
Root.propTypes = {
  store: objectOf(any).isRequired,
  locale: string.isRequired,
  routes: objectOf(any).isRequired,
  history: objectOf(any).isRequired,
  messages: objectOf(any).isRequired,
  apolloClient: objectOf(any).isRequired,
};
