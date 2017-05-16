import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NavbarMobileNavHamburger from './navbar_mobile_nav_mainBar_hamburger';
import NavbarMobileNavTitle from './navbar_mobile_nav_mainBar_title';
import NavbarMobileNavCart from './navbar_mobile_nav_mainBar_cart';

const { number, func, bool } = PropTypes;

class NavbarMobileNavMain extends PureComponent {
  static propTypes = {
    cartQty: number,
    toggleDropdown: func.isRequired,
    ddOpen: bool,
  }
  static defaultProps = {
    cartQty: 0,
    ddOpen: false,
  }
  constructor(props) {
    super(props);
    this.state = {
      x: '',
    };
  }

  render() {
    const {
    cartQty,
    toggleDropdown,
    ddOpen,
    } = this.props;

    return (
      <div className="navbar-mobile-nav-main">
        <span className="navbar-mobile-nav-main-left">
          <NavbarMobileNavHamburger
            ddOpen={ddOpen}
            toggleDropdown={toggleDropdown}
          />
          <NavbarMobileNavTitle />
        </span>
        <span className="navbar-mobile-nav-main-right">
          <NavbarMobileNavCart cartQty={cartQty} />
        </span>
      </div>
    );
  }
}

export default NavbarMobileNavMain;
