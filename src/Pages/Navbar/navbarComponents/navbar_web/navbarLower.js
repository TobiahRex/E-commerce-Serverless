import React, { PureComponent, PropTypes } from 'react';

import NavbarLowerShop from './navbar_web_nav/navbarNavs_shop/navbarNavs_shop';
import NavbarLowerMedia from './navbar_web_nav/navbarNavs_media/navbarNavs_media';
import NavbarLowerInfo from './navbar_web_nav/navbarNavs_info/navbarNavs_info';

class NavbarLower extends PureComponent {
  static propTypes = {
    dropdownDisplay: PropTypes.bool.isRequired,
    hideNavbarDropdown: PropTypes.func.isRequired,
  }
  static styles = {
    hidden: {
      display: 'none',
    },
    show: {},
  }

  render() {
    return (
      <div className="navbar-actionSection-lower">
        <NavbarLowerShop
          dropdownDisplay={this.props.dropdownDisplay}
          hideNavbarDropdown={this.hideNavbarDropdown}
        />
        <NavbarLowerMedia
          dropdownDisplay={this.props.dropdownDisplay}
          hideNavbarDropdown={this.hideNavbarDropdown}
        />
        <NavbarLowerInfo
          dropdownDisplay={this.props.dropdownDisplay}
          hideNavbarDropdown={this.hideNavbarDropdown}
        />
      </div>
    );
  }
}

export default NavbarLower;
