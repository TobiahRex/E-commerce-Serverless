import React from 'react';
import NavbarCartDropdnContent from './navbar_web_cart_dropdn/navbarCart_dropdn_content';
import NavbarCartMainButton from './navbarCart_mainButton';

export default function NavbarCart() {
  return (
    <div className="navbar actionSection upper mycart-container">
      <div className="mycart-main">
        <NavbarCartMainButton />
        <NavbarCartDropdnContent />
      </div>
    </div>
  );
}
