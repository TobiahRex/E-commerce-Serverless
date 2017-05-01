import React from 'react';
import PropTypes from 'prop-types';
import {
  NavbarCartPromotion,
  NavbarCartRecentlyAdded,
  NavbarCartActionLinks,
  NavbarCartProducts,
} from './imports';

function NavbarCartDropdnContent({
  cartTotal,
  cartProducts,
  editCartItem,
  deleteFromCart,
}) {
  return (
    <span className="dropdown-content">
      <div className="dropdown-content__container">
        <NavbarCartPromotion />
        <NavbarCartRecentlyAdded />
        <NavbarCartProducts
          cartTotal={cartTotal}
          cartProducts={cartProducts}
          editCartItem={editCartItem}
          deleteFromCart={deleteFromCart}
        />
        <NavbarCartActionLinks />
      </div>
    </span>
  );
}
const { arrayOf, object, number, func } = PropTypes;
NavbarCartDropdnContent.propTypes = {
  cartProducts: arrayOf(object).isRequired,
  cartTotal: number.isRequired,
  editCartItem: func.isRequired,
  deleteFromCart: func.isRequired,
};
export default NavbarCartDropdnContent;
