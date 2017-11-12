import React from 'react';
import PropTypes from 'prop-types';
import {
  MyCartDdPrmxn,
  MyCartRecentAdd,
  // NavbarLinkBtns,
  // NavbarProducts,
} from './components';

function NavbarDropdown({
  loading,
  cartItems,
  cartTotal,
  deleteFromCart,
  editCartItem,
}) {
  return (
    <div className="navbar-big__cart-dropdown">
      <div className="cart-dropdown__nav-b-cart-container" data-ix="nav-b-cart-hover">
        <MyCartDdPrmxn />
        <MyCartRecentAdd />
        {/* <NavbarRecentAdd />
          <NavbarProducts
          loading={loading}
          cartItems={cartItems}
          cartTotal={cartTotal}
          deleteFromCart={deleteFromCart}
          editCartItem={editCartItem}
          />
        <NavbarLinkBtns /> */}
      </div>
    </div>
  );
}
const { bool, arrayOf, object, number, func } = PropTypes;
NavbarDropdown.propTypes = {
  loading: bool.isRequired,
  cartItems: arrayOf(object).isRequired,
  cartTotal: number.isRequired,
  editCartItem: func.isRequired,
  deleteFromCart: func.isRequired,
};
export default NavbarDropdown;
