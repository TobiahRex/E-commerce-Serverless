import React from 'react';
import { Route } from 'react-router';

const errorLoading = (e) => { throw new Error(e.message); };
const loadRoute = cb => module => cb(null, module.default);

const CheckoutRoutes = () => (
  <div>
    <Route
      path="cart"
      getComponent={(location, cb) => {
        import('../containers/cart' /* webpackChunkName: "cart" */)
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    <Route
      path="empty"
      getComponent={(location, cb) => {
        import('../containers/cart/components/EmptyCart/emptyCart' /* webpackChunkName: "emptyCart" */)
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    <Route
      path="empty"
      getComponent={(location, cb) => {
        import('../containers/cart/components/EmptyCart/emptyCart' /* webpackChunkName: "emptyCart" */)
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    <Route
      path="express_checkout"
      getComponent={(location, cb) => {
        import('../containers/checkout/expressCheckout' /* webpackChunkName: "expressCheckout" */)
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    <Route
      path="successfully_ordered"
      getComponent={(location, cb) => {
        import('../containers/checkout/orderSuccess/index' /* webpackChunkName: "orderSuccess" */)
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
  </div>
);

export default CheckoutRoutes;
