/* eslint-disable no-extra-boolean-cast */
import React from 'react';
import PropTypes from 'prop-types';
import { MyCartBox } from './components';

function NavbarMyCart({ qty }) {
  return (
    <div className="navbar actionSection upper mycart-container">
      <div className="mycart-main">
        <MyCartBox qty={qty} />
      </div>
    </div>
  );
}

NavbarMyCart.propTypes = {
  qty: PropTypes.number.isRequired,
};
export default NavbarMyCart;
