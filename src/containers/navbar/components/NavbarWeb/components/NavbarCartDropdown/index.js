import React from 'react';
import PropTypes from 'prop-types';
import {
  MyCartDdPrmxn,
  MyCartRecentAdd,
  MyCartProducts,
  MyCartTotal,
  MyCartLinks,
} from './components';

function NavbarCartDropdown({
  loading,
  cartItems,
  editCartItem,
  deleteFromCart,
  cartTotal,
  renderKey,
  reRenderNavbar,
}) {
  return (
    <div
      className="navbar-big__cart-dropdown"
      data-w-id="2b259db5-c17c-3603-9c57-bb718cbb98ca"
      data-ix-affect="1"
      key={renderKey}
    >
      <div
        className="cart-dropdown__nav-b-cart-container"
        data-ix="nav-b-cart-hover"
        data-w-id="d444f075-6433-0d63-7963-f5535b489088"
      >
        <MyCartDdPrmxn reRenderNavbar={reRenderNavbar} />
        <MyCartRecentAdd />
        <MyCartProducts
          loading={loading}
          cartItems={cartItems}
          editCartItem={editCartItem}
          deleteFromCart={deleteFromCart}
          reRenderNavbar={reRenderNavbar}
        />
        <MyCartTotal cartTotal={cartTotal} />
        <MyCartLinks reRenderNavbar={reRenderNavbar} />
      </div>
    </div>
  );
}
const { bool, arrayOf, object, number, func } = PropTypes;
NavbarCartDropdown.propTypes = {
  loading: bool.isRequired,
  cartItems: arrayOf(object).isRequired,
  cartTotal: number.isRequired,
  editCartItem: func.isRequired,
  deleteFromCart: func.isRequired,
  renderKey: number.isRequired,
  reRenderNavbar: func.isRequired,
};
export default NavbarCartDropdown;
