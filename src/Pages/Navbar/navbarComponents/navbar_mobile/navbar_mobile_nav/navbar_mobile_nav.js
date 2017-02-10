import React, { PropTypes, Component } from 'react';
import FontAwesome from 'react-fontawesome';

class NavbarMobileNav extends Component {
  static defaultProps = {
    active: false,
    role: 'user',
    _id: null,
  }

  static propTypes = {
    mobileNavbarExpanded: PropTypes.bool,
    activePage: PropTypes.string,
    cartQty: PropTypes.number,
  }

  constructor(props) {
    super(props);

    this.toasts = {
      logoutToast: null,
      loginFail: null,
      loginSuccess: null,
    };
  }

  render() {
    return (
      <div className="navbar-mobile-nav">
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
              <span className="navbar-mobile-cart-icon-divider"></span>
              <div className="navbar-mobile-cart-qty">
                <span className="navbar-mobile-cart-qty-value">0</span>
              </div>
            </div>
          </span>
        </div>
        <div className="navbar-mobile-nav-dropdown-content">
          <div className="navbar-mobile-nav-dropdown-shop">
            <div className="navbar-mobile-nav-dropdown-shop-hover-container">
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
              <div className="navbar-mobile-nav-dropdown-shop-expanded hidden">
                <ul>
                  <li>Fruity Bamm Bamm</li>
                  <li>Keylime Pie</li>
                  <li>Pina Colada</li>
                  <li>French Vanilla Mocha</li>
                  <li>Strawberries {('N\'')} Cream</li>
                  <li>Papple Berry</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="navbar-mobile-nav-dropdown-media">
            <div className="navbar-mobile-nav-dropdown-media-hover-container">
              <h3 className="navbar-mobile-nav-dropdown-media-title">Media</h3>
              <div className="navbar-mobile-nav-dropdown-media-expand-container">
                <div className="navbar-mobile-nav-dropdown-media-expand-icon">
                  <FontAwesome
                    className="navbar-mobile-nav-dropdown-media-expand-icon-plus-fa"
                    name="plus"
                  />
                </div>
              </div>
              <div className="navbar-mobile-nav-dropdown-media-expanded hidden">
                <ul>
                  <li>Contact Us</li>
                  <li>Juice Reviews</li>
                  <li>Vape News</li>
                  <li>User Stories</li>
                  <li>(Social Media Icons)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="navbar-mobile-nav-dropdown-info">
            <div className="navbar-mobile-nav-dropdown-info-hover-container">
            <h3 className="navbar-mobile-nav-dropdown-info-title">Info</h3>
            <div className="navbar-mobile-nav-dropdown-info-expand-container">
              <div className="navbar-mobile-nav-dropdown-info-expand-icon">
                <FontAwesome
                  className="navbar-mobile-nav-dropdown-info-expand-icon-fa"
                  name="plus"
                />
              </div>
            </div>
            <div className="navbar-mobile-nav-dropdown-info-expanded hidden">
              <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>{('FAQ\'s')}</li>
                <li>Wholesale</li>
                <li>Mission Statement</li>
                <li>Shipping Policy</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Nicotine Disclaimer</li>
                <li>Return Policy</li>
                <li>Affiliate Program</li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarMobileNav;

/* TODO
1. This component is mapped to State and received the three props defined in propTypes.

2. Hamburger Icon reference = http://elijahmanor.com/css-animated-hamburger-icon/

*/
