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
            <div className="navbar-mobile-nav-title">
              <h5>Title Here</h5>
            </div>
            <div className="navbar-mobile-cart">
              <div className="navbar-mobile-cart-icon">
                <FontAwesome name="shopping-cart" />
              </div>
              <div className="navbar-mobile-cart-qty">
                <span className="navbar-mobile-cart-qty-value">0</span>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-mobile-nav-dropdown-content">
          <div className="navbar-mobile-nav-dropdown-shop">
            <h3 className="navbar-mobile-nav-dropdown-shop-title">Shop</h3>
            <div className="navbar-mobile-nav-dropdown-shop-expanded">
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
          <div className="navbar-mobile-nav-dropdown-media">
            <h3 className="navbar-mobile-nav-dropdown-media-title">Media</h3>
            <div className="navbar-mobile-nav-dropdown-media-expanded">
              <ul>
                <li>Contact Us</li>
                <li>Juice Reviews</li>
                <li>Vape News</li>
                <li>User Stories</li>
                <li>(Social Media Icons)</li>
              </ul>
            </div>
          </div>
          <div className="navbar-mobile-nav-dropdown-info">
            <h3 className="navbar-mobile-nav-dropdown-info-title">Info</h3>
            <div className="navbar-mobile-nav-dropdown-info-expanded">
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
    );
  }
}

export default NavbarMobileNav;

/* TODO
1. This component is mapped to State and received the three props defined in propTypes.

2. Hamburger Icon reference = http://elijahmanor.com/css-animated-hamburger-icon/

*/
