import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  cartQty: PropTypes.number,
};
NavbarMobileNavCart.propTypes = propTypes;

export default function NavbarMobileNavCart({ cartQty }) {
  return (
    <div className="navbar-mobile-nav-cart">
      <Link to="/cart">
        <div className="navbar-mobile-cart-icon">
          <FontAwesome
            className="navbar-mobile-cart-icon-fa"
            name="shopping-cart"
          />
        </div>
        <span className="navbar-mobile-cart-icon-divider" />
        <div className="navbar-mobile-cart-qty">
          <span className="navbar-mobile-cart-qty-value">{cartQty || 0}</span>
        </div>
      </Link>
    </div>
  );
}
