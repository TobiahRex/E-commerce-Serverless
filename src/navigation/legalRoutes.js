import React from 'react';
import { Route } from 'react-router';

const errorLoading = (error) => {
  throw new Error(`Dyanmic page loading failed   ${error}`);
};
const loadRoute = cb => module => cb(null, module.default);

const LegalRoutes = () => (
  <div>
    <Route
      path="/return_policy"
      getComponent={(location, cb) => {
        import('../containers/legal/components/returnsPolicy' /* webpackChunkName: "returnPolicy" */)
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    <Route
      path="/shipping_policy"
      getComponent={(location, cb) => {
        import('../containers/legal/components/shippingPolicy' /* webpackChunkName: "shippingPolicy" */)
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    <Route
      path="/privacy_policy"
      getComponent={(location, cb) => {
        import('../containers/legal/components/privacyPolicy' /* webpackChunkName: "privacyPolicy" */)
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    <Route
      path="/terms_and_conditions"
      getComponent={(location, cb) => {
        import('../containers/legal/components/termsAndConditions' /* webpackChunkName: "termsAndConditions" */)
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    <Route
      path="/nicotine_disclaimer"
      getComponent={(location, cb) => {
        import('../containers/legal/components/nicotineDisclaimer' /* webpackChunkName: "nicotineDisclaimer" */)
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
  </div>
);

export default LegalRoutes;
