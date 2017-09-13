import React from 'react';
import { Link } from 'react-router';

export default function NavbarLinkBtns() {
  return (
    <div className="action-links">
      <Link to="/cart" className="action-links-cart sweep-right">
        <span>View Cart</span>
      </Link>
      <Link to="/express_checkout" className="action-links-checkout sweep-right">
        <span>Checkout</span>
      </Link>
    </div>
  );
}
