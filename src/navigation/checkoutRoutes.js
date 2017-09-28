import React from 'react';
import { Route } from 'react-router';

import Cart from '../containers/cart';
import EmptyCart from '../containers/cart/components/EmptyCart/emptyCart';
import ExpressCheckout from '../containers/checkout/expressCheckout';
import OrderSuccess from '../containers/checkout/orderSuccess/index';

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
      component={OrderSuccess}
    />
  </div>
);

export default CheckoutRoutes;
