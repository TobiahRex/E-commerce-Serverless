import React from 'react';
import PropTypes from 'prop-types';
import {
  NavbarCartPromotion,
  NavbarCartRecentlyAdded,
  NavbarCartActionLinks,
  NavbarCartProducts,
} from '../container/imports';

function NavbarCartDropdnContent({
  loading,
  cartItems,
  cartTotal,
  editCartItem,
  deleteFromCart,
}) {
  return (
    <span className="dropdown-content">
      <div className="dropdown-content__container">
        <NavbarCartPromotion />
        <NavbarCartRecentlyAdded />
        <NavbarCartProducts
          loading={loading}
          cartItems={cartItems}
          cartTotal={cartTotal}
          editCartItem={editCartItem}
          deleteFromCart={deleteFromCart}
        />
        <NavbarCartActionLinks />
      </div>
    </span>
  );
}
const { bool, arrayOf, object, number, func } = PropTypes;
NavbarCartDropdnContent.propTypes = {
  loading: bool.isRequired,
  cartItems: arrayOf(object).isRequired,
  cartTotal: number.isRequired,
  editCartItem: func.isRequired,
  deleteFromCart: func.isRequired,
};
export default NavbarCartDropdnContent;
