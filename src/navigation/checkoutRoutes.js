import React from 'react';
import { Route } from 'react-router';

const errorLoading = (e) => { throw new Error(e.message); };
const loadRoute = cb => module => cb(null, module.default);

const CheckoutRoutes = () => (
  <div>
    <Route
      path="cart"
      getComponent={(location, cb) => {
        System.import('../containers/cart')
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
        System.import('../containers/checkout/orderSuccess/index')
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
  </div>
);

export default CheckoutRoutes;
