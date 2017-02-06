import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

import NavbarOptions from './NavbarOptions';


export default () => (
  <div className="navbar actionSection">
    <div className="navbar actionSection upper">
      <NavbarOptions />
      <div className="navbar actionSection upper user-action">
        <ul className="navbar actionSection upper user-action not-signed-in">
          <li className="sign-in-title">
            <span>Sign In</span>
          </li>
          <li className="register-title">
            <span>Register</span>
          </li>
        </ul>
        <ul className="hidden navbar actionSection upper user-action signed-in">
          <li className="my-account-title">
            <span>My Account</span>
          </li>
          <li className="checkout-title">
            <span>Checkout</span>
          </li>
          <li className="sign-out-title">
            <span>Sign Out</span>
          </li>
        </ul>
      </div>
      <div className="navbar actionSection upper mycart">
        <div className="title">
          <span>My Cart</span>
        </div>
        <div className="cart-qty">
          <span>0</span>
        </div>
      </div>
    </div>
    <div className="navbar actionSection lower">
      <div className="navbar actionSection lower shop">
        <div className="title">
          <span>SHOP</span>
        </div>
      </div>
      <div className="navbar actionSection lower media">
        <div className="title">
          <span>MEDIA</span>
        </div>
      </div>
      <div className="navbar actionSection lower info">
        <div className="title">
          <span>INFO</span>
        </div>
      </div>
    </div>
  </div>
);
