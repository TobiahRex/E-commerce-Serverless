import React, { PropTypes, Component } from 'react';

import NavbarMobileUserActionsNotSignedIn from './navbar_mobile_userActions_notSignedIn';
import NavbarMobileUserActionsSignedIn from './navbar_mobile_userActions_signedIn';


/* TODO
1. Redux Action method "logoutUser"
2. Redux State property "active_user : true/false"
3. Remove UUID as dummy generator.
*/

class NavbarMobileActions extends Component {
  static propTypes = {
    active_user: PropTypes.bool,
    logoutUser: PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.state = {
      active_user: this.props.active_user,
    };
  }

  logoutUser = () => this.props.logoutUser;

  render() {
    return (
      <div className="navbar-mobile-actions">
        <NavbarMobileUserActionsNotSignedIn />
        <NavbarMobileUserActionsSignedIn />
      </div>
    );
  }
}

export default NavbarMobileActions;
