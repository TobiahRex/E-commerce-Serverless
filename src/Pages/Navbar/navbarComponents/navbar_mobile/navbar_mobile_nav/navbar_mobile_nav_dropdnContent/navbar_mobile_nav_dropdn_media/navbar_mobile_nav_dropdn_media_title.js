import React from 'react';
import FontAwesome from 'react-fontawesome';

export default function NavbarMobileNavTitleDropdnContent() {
  return (
    <div className="navbar-mobile-nav-dropdown-media-hover-container sweep-right-white">
      <h3 className="navbar-mobile-nav-dropdown-media-title">Media</h3>
      <div className="navbar-mobile-nav-dropdown-media-expand-container">
        <div className="navbar-mobile-nav-dropdown-media-expand-icon">
          <FontAwesome
            className="navbar-mobile-nav-dropdown-media-expand-icon-plus-fa"
            name="plus"
          />
          <FontAwesome
            className="navbar-mobile-nav-dropdown-media-expand-icon-minus-fa"
            name="minus"
          />
        </div>
      </div>
    </div>
  );
}
