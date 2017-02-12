import React from 'react';
import FontAwesome from 'react-fontawesome';

export default function NavbarMobileNavShopTitle() {
  return (
    <div className="navbar-mobile-nav-dropdown-shop-hover-container sweep-right-white">
      <h3 className="navbar-mobile-nav-dropdown-shop-title">Shop</h3>
      <div className="navbar-mobile-nav-dropdown-shop-expand-container">
        <div className="navbar-mobile-nav-dropdown-shop-expand-icon">
          <FontAwesome
            className="navbar-mobile-nav-dropdown-shop-expand-icon-plus-fa"
            name="plus"
          />
          <FontAwesome
            className="navbar-mobile-nav-dropdown-shop-expand-icon-minus-fa"
            name="minus"
          />
        </div>
      </div>
    </div>
  );
}
