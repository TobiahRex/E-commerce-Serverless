import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

import NavbarOptions from './navbarOptions';
import NavbarUserAction from './navbarUserAction';


export default () => (
  <div className="navbar actionSection">
    <div className="navbar actionSection upper">
      <NavbarOptions />
      <NavbarUserAction />
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
