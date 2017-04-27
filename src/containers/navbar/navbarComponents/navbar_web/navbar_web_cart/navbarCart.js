import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavbarCartDropdnContent from './navbar_web_cart_dropdn/navbarCart_dropdn_content';
import NavbarCartMainButton from './navbarCart_mainButton';

/* TODO
1. Navbar has an entire CRUD capability if hovered over.  Therefore the component that is revealed upon hover, will be passed down several CRUD like methods via props to PureComponents.

2. The NavbarCartDropdnContent comp has 3 LINKS
- Edit: Takes the user back to the product page of the item.
- View Cart: goes to cart.
- Checkout: goes to checkout.
*/
function NavbarCart() {
  return (
    <div className="navbar actionSection upper mycart-container">
      <div className="mycart-main">
        <NavbarCartMainButton />
        <NavbarCartDropdnContent />
      </div>
    </div>
  );
}
const { number } = PropTypes;
NavbarCart.propTypes = {
  qty: number.isRequired,
};
const calculateQty = (loggedIn, cartObj) => {
  let cartType;
  if (loggedIn) {
    cartType = 'member';
  } else {
    cartType = 'guest';
  }
  return (cartObj[cartType].reduce((accum, next) => {
    if (next.id) {
      accum += 1;
      return accum;
    }
    return accum;
  }, 0));
};
export default connect(({ auth, orders }) => ({
  qty: calculateQty(auth.loggedIn, orders.cart),
}), null)(NavbarCart);
