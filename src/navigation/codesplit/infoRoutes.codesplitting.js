import React from 'react';
import { Route } from 'react-router';

// ----------------------------- Media -------------------------------
// import Wholesale from '../containers/info/legal/wholesale';
// import Affiliates from '../containers/info/legal/affiliateProgram';

const errorLoading = (error) => {
  throw new Error(`Dynamic page loading failed ${error}`);
};
const loadRoute = cb => module => cb(null, module.default);

const InfoRoutes = () => (
  <div>
    <Route
      path="/about"
      getComponent={(_, cb) => {
        import('../containers/info/aboutUs' /* webpackChunkName: "about" */)
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    <Route
      path="/faqs"
      getComponent={(_, cb) => {
        import('../containers/info/faqs' /* webpackChunkName: "faqs" */)
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    <Route
      path="/return_policy"
      getComponent={(location, cb) => {
        import('../containers/info/legal/components/returnsPolicy' /* webpackChunkName: "returnPolicy" */)
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    <Route
      path="/shipping_policy"
      getComponent={(location, cb) => {
        import('../containers/info/legal/components/shippingPolicy' /* webpackChunkName: "shippingPolicy" */)
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    <Route
      path="/privacy_policy"
      getComponent={(location, cb) => {
        import('../containers/info/legal/components/privacyPolicy' /* webpackChunkName: "privacyPolicy" */)
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    <Route
      path="/terms_and_conditions"
      getComponent={(location, cb) => {
        import('../containers/info/legal/components/termsAndConditions' /* webpackChunkName: "termsAndConditions" */)
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    <Route
      path="/nicotine_disclaimer"
      getComponent={(location, cb) => {
        import('../containers/info/legal/components/nicotineDisclaimer' /* webpackChunkName: "nicotineDisclaimer" */)
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    {/* <Route path="/wholesale" component={Wholesale} /> */}
    {/* <Route path="/affiliate_program" component={Affiliates} /> */}
  </div>
);

export default InfoRoutes;
