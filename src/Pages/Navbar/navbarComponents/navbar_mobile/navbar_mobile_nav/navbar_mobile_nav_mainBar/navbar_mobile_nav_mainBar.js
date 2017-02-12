import React, { PropTypes, PureComponent } from 'react';

import NavbarMobileNavHamburger from './navbar_mobile_nav_mainBar_hamburger';
import NavbarMobileNavTitle from './navbar_mobile_nav_mainBar_title';
import NavbarMobileNavCart from './navbar_mobile_nav_mainBar_cart';


class NavbarMobileNavMain extends PureComponent {
  static propTypes = {
    activePage: PropTypes.string,
    cartQty: PropTypes.number,
    toggleHamburger: PropTypes.func,
    ddOpen: PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.state = {
      x: '',
    };
  }

  render() {
    const { activePage,
    cartQty,
    toggleHamburger,
    ddOpen,
    } = this.props;

    return (
      <div className="navbar-mobile-nav-main">
        <span className="navbar-mobile-nav-main-left">
          <NavbarMobileNavHamburger
            ddOpen={ddOpen}
            toggleHamburger={toggleHamburger}
          />
          <NavbarMobileNavTitle activePage={activePage} />
        </span>
        <span className="navbar-mobile-nav-main-right">
          <NavbarMobileNavCart cartQty={cartQty} />
        </span>
      </div>
    );
  }
}

export default NavbarMobileNavMain;
