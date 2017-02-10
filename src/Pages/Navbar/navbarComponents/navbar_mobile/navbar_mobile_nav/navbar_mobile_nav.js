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
