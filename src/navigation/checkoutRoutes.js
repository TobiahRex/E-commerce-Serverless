import React from 'react';
import { Route } from 'react-router';

const errorLoading = () => { throw new Error('Dyanmic page loading failed.'); };
const loadRoute = cb => module => cb(null, module.default);

const CheckoutRoutes = () => (
  <div>
    <Route
      path="cart"
      getComponent={(location, cb) => {
        System.import('../containers/cart/cart')
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    <Route
      path="empty"
      getComponent={(location, cb) => {
        System.import('../containers/cart/EmptyCart/emptyCart')
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    <Route
      path="express_checkout"
      getComponent={(location, cb) => {
        System.import('../containers/checkout/expressCheckout')
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    <Route
      path="successfully_ordered"
      getComponent={(location, cb) => {
        System.import('../containers/checkout/orderSuccess')
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
  </div>
);

export default CheckoutRoutes;
