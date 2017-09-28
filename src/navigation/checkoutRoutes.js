import React from 'react';
import { Route } from 'react-router';

import Cart from '../containers/cart';
import EmptyCart from '../containers/cart/components/EmptyCart/emptyCart';
import ExpressCheckout from '../containers/checkout/expressCheckout';

const errorLoading = (e) => { throw new Error(e.message); };
const loadRoute = cb => module => cb(null, module.default);

const CheckoutRoutes = () => (
  <div>
    <Route
      path="cart"
      component={Cart}
    />
    <Route
      path="empty"
      component={EmptyCart}
    />
    <Route
      path="express_checkout"
      component={ExpressCheckout}
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
