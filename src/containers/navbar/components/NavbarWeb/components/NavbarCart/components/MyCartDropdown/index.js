import React from 'react';
import PropTypes from 'prop-types';
import {
  MyCartDdPrmxn,
  MyCartRecentAdd,
  MyCartProducts,
  MyCartTotal,
  MyCartLinks,
} from './components';

function MyCartDropdown({
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
        <MyCartProducts
          loading={loading}
          cartItems={cartItems}
          editCartItem={editCartItem}
          deleteFromCart={deleteFromCart}
        />
        <MyCartTotal cartTotal={cartTotal} />
        <MyCartLinks />
      </div>
    </div>
  );
}
const { bool, arrayOf, object, number, func } = PropTypes;
MyCartDropdown.propTypes = {
  loading: bool.isRequired,
  cartItems: arrayOf(object).isRequired,
  cartTotal: number.isRequired,
  editCartItem: func.isRequired,
  deleteFromCart: func.isRequired,
};
export default MyCartDropdown;
