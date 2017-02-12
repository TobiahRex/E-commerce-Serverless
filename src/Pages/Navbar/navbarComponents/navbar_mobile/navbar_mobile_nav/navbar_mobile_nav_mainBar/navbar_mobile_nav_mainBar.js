import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class NavbarMobileNavMain extends Component {

  constructor(props) {
    super(props);
    this.state = {
      x: '',
    };
  }

  render() {
    return (
      <div className="navbar-mobile-nav-main">
        <span className="navbar-mobile-nav-main-left">
          <div className="navbar-mobile-nav-hamburger">
            <div className="navbar-mobile-nav-hamburger-icon">
              <a
                onClick={e => e.preventDefault()}
                href=""
                className="navbar-mobile-nav-hamburger-icon-button"
              >
                <span />
              </a>
            </div>
          </div>
          <div className="navbar-mobile-nav-title">
            <h5>My Account</h5>
          </div>
        </span>
        <span className="navbar-mobile-nav-main-right">
          <div className="navbar-mobile-nav-cart">
            <div className="navbar-mobile-cart-icon">
              <FontAwesome
                className="navbar-mobile-cart-icon-fa"
                name="shopping-cart"
              />
            </div>
            <span className="navbar-mobile-cart-icon-divider" />
            <div className="navbar-mobile-cart-qty">
              <span className="navbar-mobile-cart-qty-value">0</span>
            </div>
          </div>
        </span>
      </div>
    );
  }
}

export default NavbarMobileNavMain;
