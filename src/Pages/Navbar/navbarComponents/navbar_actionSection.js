import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';


export default () => (
  <div className="navbar actionSection">
    <div className="navbar actionSection upper">
      <div className="navbar actionSection upper language">
        <div className="navbar actionSection upper language flag-us">
          <img
            src="https://s3-ap-southeast-2.amazonaws.com/nj2jp/language_usFlagnavbar_languageGrp_us.png"
            alt="us-flag"
            className="navbar actionSection upper language flag-us image"
          />
        </div>
        <div className="navbar actionSection upper language title">
          <span>LANGUAGE</span>
        </div>
        <div className="navbar actionSection upper language chevron">
          <FontAwesome
            name="chevron-down"
            className="navbar actionSection upper language chevron icon"
          />
        </div>
      </div>
      <div className="navbar actionSection upper currency">
        <div className="navbar actionSection upper currency dollar">
          <FontAwesome
            name="usd"
            className="navbar actionSection upper currency dollar icon"
          />
        </div>
        <div className="navbar actionSection upper currency title">
          <span>CURRENCY</span>
        </div>
        <div className="navbar actionSection upper currency chevron">
          <FontAwesome
            name="chevron-down"
            className="navbar actionSection upper currency chevron icon"
          />
        </div>
      </div>
      <div className="navbar actionSection upper user-action">
        <ul className="navbar actionSection upper user-action not-signed-in">
          <li className="sign-in-title">
            <span>Sign In</span>
          </li>
          <li className="register-title">
            <span>Register</span>
          </li>
        </ul>
        <ul className="navbar actionSection upper user-action signed-in hidden">
          <li>My Account</li>
          <li>Checkout</li>
          <li>Sign Out</li>
        </ul>
      </div>
      <div className="navbar actionSection upper mycart">
        <span>My Cart</span>
        <span>0</span>
      </div>
    </div>
    <div className="navbar actionSection lower">
      <div className="navbar actionSection lower shop container">
        <span>SHOP</span>
      </div>
      <div className="navbar actionSection lower media container">
        <span>MEDIA</span>
      </div>
      <div className="navbar actionSection lower info container">
        <span>INFO</span>
      </div>
    </div>
  </div>
);
