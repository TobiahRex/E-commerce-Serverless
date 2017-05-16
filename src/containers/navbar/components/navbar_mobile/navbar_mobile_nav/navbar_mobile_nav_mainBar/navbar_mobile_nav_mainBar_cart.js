import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

const { number } = PropTypes;
const propTypes = { cartQty: number };
const defaultProps = { cartQty: 0 };

function NavbarMobileNavCart({ cartQty }) {
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
NavbarMobileNavCart.propTypes = propTypes;
NavbarMobileNavCart.defaultProps = defaultProps;
export default NavbarMobileNavCart;
