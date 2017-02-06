import React, { PropTypes } from 'react';

import NavbarOptions from './navbarOptions';
import NavbarUserAction from './navbarUserActions';
import NavbarCart from './navbarCart';
import NavbarLower form './navbarLower';


export default () => (
  <div className="navbar actionSection">
    <div className="navbar actionSection upper">
      <NavbarOptions />
      <NavbarUserAction />
      <NavbarCart />
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
