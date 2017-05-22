import React from 'react';
import PropTypes from 'prop-types';
import {
  NavbarCartPromotion,
  NavbarCartRecentlyAdded,
  NavbarCartActionLinks,
  NavbarCartProducts,
} from '../container/imports';

function NavbarCartDropdnContent({
  products,
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
          products={products}
          cartTotal={cartTotal}
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
  products: arrayOf(object).isRequired,
  cartTotal: number.isRequired,
  editCartItem: func.isRequired,
  deleteFromCart: func.isRequired,
};
export default NavbarCartDropdnContent;
