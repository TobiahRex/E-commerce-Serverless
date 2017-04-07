import React, { PureComponent, PropTypes } from 'react';

import NavbarOptions from './navbar_web_options/navbarOptions';
import NavbarUserAction from './navbar_web_userActions/navbarUserActions';
import NavbarCart from './navbar_web_cart/navbarCart';

class NavbarUpper extends PureComponent {
  static propTypes = {
    activeUser: PropTypes.objectOf(PropTypes.any).isRequired,
    logoutUser: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className="navbar-actionSection-upper">
        <NavbarOptions />
        {/* TODO:
        Options will receive Option handlers & Active Language & Currency Qty  */}
        <NavbarUserAction
          activeUser={this.props.activeUser}
          logoutUser={this.props.logoutUser}
        />
        <NavbarCart />
        {/* TODO: Cart will receive Cart Qty & Handlers:
          1. Remove Product
        2. Data currenlty in cart to render dynamically */}
      </div>
    );
  }
}

export default NavbarUpper;
