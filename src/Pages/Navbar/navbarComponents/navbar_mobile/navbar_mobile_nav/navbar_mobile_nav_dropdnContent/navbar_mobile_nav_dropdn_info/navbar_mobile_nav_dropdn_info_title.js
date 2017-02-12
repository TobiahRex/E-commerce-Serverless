import React from 'react';
import FontAwesome from 'react-fontawesome';

export default function NavbarMobileNavInfoTitle() {
  return (
    <div className="navbar-mobile-nav-dropdown-info-hover-container sweep-right-white">
      <h3 className="navbar-mobile-nav-dropdown-info-title">Info</h3>
      <div className="navbar-mobile-nav-dropdown-info-expand-container">
        <div className="navbar-mobile-nav-dropdown-info-expand-icon">
          <FontAwesome
            className="navbar-mobile-nav-dropdown-info-expand-icon-plus-fa"
            name="plus"
          />
          <FontAwesome
            className="navbar-mobile-nav-dropdown-info-expand-icon-minus-fa"
            name="minus"
          />
        </div>
      </div>
    </div>
  );
}
