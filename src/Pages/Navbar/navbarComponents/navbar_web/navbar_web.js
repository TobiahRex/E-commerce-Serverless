import React, { PureComponent, PropTypes } from 'react';
import NavbarLogo from './navbarLogo';
import NavbarActionSection from './navbarActionSection';

class NavbarWeb extends PureComponent {
  static defaultProps = { }
  static propTypes = {
    activeUser: PropTypes.objectOf(PropTypes.any).isRequired,
    logoutUser: PropTypes.func.isRequired,
    dropdownDisplay: PropTypes.bool.isRequired,
    toggleNavbarDropdown: PropTypes.func.isRequired,
  }
  render() {
    return (
      <nav className="navbar navbar-web navbar-default">
        <div className="container">
          <div className="navbar navbar-header">
            <NavbarLogo />
            <NavbarActionSection
              logoutUser={this.props.logoutUser}
              activeUser={this.props.activeUser}
              dropdownDisplay={this.props.dropdownDisplay}
              toggleNavbarDropdown={this.toggleNavbarDropdown}
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default NavbarWeb;
