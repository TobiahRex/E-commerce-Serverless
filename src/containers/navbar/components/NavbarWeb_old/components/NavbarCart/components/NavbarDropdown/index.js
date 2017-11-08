import React from 'react';
import PropTypes from 'prop-types';
import {
  NavbarPromotion,
  NavbarRecentAdd,
  NavbarLinkBtns,
  NavbarProducts,
} from '../';

function NavbarDropdown({
  loading,
  cartItems,
  cartTotal,
  deleteFromCart,
  editCartItem,
}) {
  return (
    <span className="dropdown-content">
      <div className="dropdown-content__container">
        <NavbarPromotion />
        <NavbarRecentAdd />
        <NavbarProducts
          loading={loading}
          cartItems={cartItems}
          cartTotal={cartTotal}
          deleteFromCart={deleteFromCart}
          editCartItem={editCartItem}
        />
        <NavbarLinkBtns />
      </div>
    </span>
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
