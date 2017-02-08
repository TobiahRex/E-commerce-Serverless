import React from 'react';
import { Link } from 'react-router';

/* TODO
1. to={'/mycart'}
2. to={'/checkout'}
*/

export default () => (
  <div className="action-links">
    <Link className="action-links-cart">
      <span>View Cart</span>
    </Link>
    <Link className="action-links-checkout">
      <span>Checkout</span>
    </Link>
  </div>
);
