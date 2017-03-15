import React from 'react';
import { Link } from 'react-router-dom';

/* TODO
1. to={'/mycart'}
2. to={'/checkout'}
*/

export default () => (
  <div className="action-links">
    <Link to="/cart" className="action-links-cart sweep-right">
      <span>View Cart</span>
    </Link>
    <Link to="/express_checkout" className="action-links-checkout sweep-right">
      <span>Checkout</span>
    </Link>
  </div>
);
