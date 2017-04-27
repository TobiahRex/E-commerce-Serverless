import React from 'react';
import PropTypes from 'prop-types';
import NavbarCartPromotion from './navbarCart_dropdn_promotion';
import NavbarCartRecentadd from './navbarCart_dropdn_recentadd';
import NavbarCartTotalPrice from './navbarCart_dropdn_totalPrice';
import NavbarCartActionLinks from './navbarCart_dropdn_actionLinks';
import NavbarCartProducts from './navbarCart_dropdn_products';

function NavbarCartDropdnContent({
  cartProducts,
  cartTotal,
  editCartItem,
  deleteFromCart,
}) {
  return (
    <span className="dropdown-content">
      <div className="dropdown-content__container">
        <NavbarCartPromotion />
        <NavbarCartRecentadd />
        <NavbarCartProducts
          cartProducts={cartProducts}
          editCartItem={editCartItem}
          deleteFromCart={deleteFromCart}
        />
        <NavbarCartTotalPrice
          cartTotal={cartTotal}
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
