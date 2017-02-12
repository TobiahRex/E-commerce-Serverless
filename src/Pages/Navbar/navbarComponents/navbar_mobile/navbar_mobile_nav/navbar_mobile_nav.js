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
              </div>
              <div className="navbar-mobile-nav-dropdown-shop-expanded">
                <ul className="navbar-mobile-nav-dropdown-shop-expanded-list">
                  <li>
                    <Link to="/product_fbb">
                      Fruity Bamm Bamm
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Keylime Pie
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Pina Colada
                    </Link>
                  </li>
                  <li>
                    <Link>
                      French Vanilla Mocha
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Strawberries {('N\'')} Cream
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Papple Berry
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="navbar-mobile-nav-dropdown-shop">
            <div className="navbar-mobile-nav-dropdown-shop-dropdown">
              <div className="navbar-mobile-nav-dropdown-shop-hover-container">
                <h3 className="navbar-mobile-nav-dropdown-shop-title">Media</h3>
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
                  <li>
                    <Link to="/product_fbb">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Vape News
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Juice Reviews
                    </Link>
                  </li>
                  <li>
                    <Link>
                      User Stories
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Social Media
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="navbar-mobile-nav-dropdown-shop">
            <div className="navbar-mobile-nav-dropdown-shop-dropdown">
              <div className="navbar-mobile-nav-dropdown-shop-hover-container">
                <h3 className="navbar-mobile-nav-dropdown-shop-title">Info</h3>
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
                  <li>
                    <Link to="/product_fbb">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link>
                      {('FAQ\'s')}
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Return Policy
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Nicotine Disclaimer
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Mission Statement
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Wholesale
                    </Link>
                  </li>
                  <li>
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
