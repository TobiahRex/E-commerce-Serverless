import React from 'react';
import { Route } from 'react-router';

// ----------------------------- Legal -------------------------------
import Returns from '../containers/legal/returnsPolicy';

const errorLoading = (error) => {
  throw new Error(`Dyanmic page loading failed   ${error}`);
};
const loadRoute = cb => module => cb(null, module.default);

const LegalRoutes = () => (
  <div>
    <Route path="return_policy" component={Returns} />
    <Route
      path="/shipping_policy"
      getComponent={(location, cb) => {
        System.import('../containers/legal/components/shippingPolicy')
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    <Route
      path="/privacy_policy"
      getComponent={(location, cb) => {
        System.import('../containers/legal/components/privacyPolicy')
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    <Route
      path="/terms_and_conditions"
      getComponent={(location, cb) => {
        System.import('../containers/legal/components/termsAndConditions')
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    <Route
      path="/nicotine_disclaimer"
      getComponent={(location, cb) => {
        System.import('../containers/legal/components/nicotineDisclaimer')
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
  </div>
);

export default LegalRoutes;
