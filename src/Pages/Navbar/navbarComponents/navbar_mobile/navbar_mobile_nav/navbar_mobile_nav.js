import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
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
              <span className="navbar-mobile-cart-icon-divider" />
              <div className="navbar-mobile-cart-qty">
                <span className="navbar-mobile-cart-qty-value">0</span>
              </div>
            </div>
          </span>
        </div>
        <ul className="navbar-mobile-nav-dropdown-content">
          <li className="navbar-mobile-nav-dropdown-shop">
            <div className="navbar-mobile-nav-dropdown-shop-dropdown">
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
              <div className="navbar-mobile-nav-dropdown-shop-expanded">
                <ul className="navbar-mobile-nav-dropdown-shop-expanded-list">
                  <li className="sweep-right-white">
                    <Link className="sweep-right" to="/product_fbb">
                      Fruity Bamm Bamm
                    </Link>
                  </li>
                  <li className="sweep-right-white">
                    <Link className="sweep-right">
                      Keylime Pie
                    </Link>
                  </li>
                  <li className="sweep-right-white">
                    <Link className="sweep-right">
                      Pina Colada
                    </Link>
                  </li>
                  <li className="sweep-right-white">
                    <Link className="sweep-right">
                      French Vanilla Mocha
                    </Link>
                  </li>
                  <li className="sweep-right-white">
                    <Link className="sweep-right">
                      Strawberries {('N\'')} Cream
                    </Link>
                  </li>
                  <li className="sweep-right-white">
                    <Link className="sweep-right">
                      Papple Berry
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="navbar-mobile-nav-dropdown-media">
            <div className="navbar-mobile-nav-dropdown-media-dropdown">
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
              <div className="navbar-mobile-nav-dropdown-media-expanded">
                <ul className="navbar-mobile-nav-dropdown-media-expanded-list">
                  <li>
                    <Link className="sweep-right" to="/product_fbb">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link className="sweep-right">
                      Vape News
                    </Link>
                  </li>
                  <li>
                    <Link className="sweep-right">
                      Juice Reviews
                    </Link>
                  </li>
                  <li>
                    <Link className="sweep-right">
                      User Stories
                    </Link>
                  </li>
                  <li>
                    <Link className="sweep-right">
                      Social Media
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="navbar-mobile-nav-dropdown-info">
            <div className="navbar-mobile-nav-dropdown-info-dropdown">
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
              <div className="navbar-mobile-nav-dropdown-info-expanded">
                <ul className="navbar-mobile-nav-dropdown-info-expanded-list">
                  <li className="sweep-right-white">
                    <Link to="/product_fbb">
                      About
                    </Link>
                  </li>
                  <li className="sweep-right-white">
                    <Link>
                      Contact Us
                    </Link>
                  </li>
                  <li className="sweep-right-white">
                    <Link>
                      {('FAQ\'s')}
                    </Link>
                  </li>
                  <li className="sweep-right-white">
                    <Link>
                      Return Policy
                    </Link>
                  </li>
                  <li className="sweep-right-white">
                    <Link>
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="sweep-right-white">
                    <Link>
                      Nicotine Disclaimer
                    </Link>
                  </li>
                  <li className="sweep-right-white">
                    <Link>
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className="sweep-right-white">
                    <Link>
                      Mission Statement
                    </Link>
                  </li>
                  <li className="sweep-right-white">
                    <Link>
                      Wholesale
                    </Link>
                  </li>
                  <li className="sweep-right-white">
                    <Link>
                      Affiliate Program
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavbarMobileNav;

/* TODO
1. This component is mapped to State and received the three props defined in propTypes.

2. Hamburger Icon reference = http://elijahmanor.com/css-animated-hamburger-icon/

*/
