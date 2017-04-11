/* eslint react/no-unused-prop-types: 0 */

import React, { PropTypes, PureComponent } from 'react';
import NavbarMobileUserActionsNotSignedIn from './navbar_mobile_userActions_notSignedIn';
import NavbarMobileUserActionsSignedIn from './navbar_mobile_userActions_signedIn';


/* TODO
1. Redux Action method "logoutUser"
2. Redux State property "active_user : true/false"
3. Remove UUID as dummy generator.
*/

class NavbarMobileActions extends PureComponent {
  static defaultProps = {
    activeUser: null,
  }
  static propTypes = {
    activeUser: PropTypes.objectOf(PropTypes.any),
    logoutUser: PropTypes.func.isRequired,
  }

  logoutUser = () => this.props.logoutUser;

  renderHelper = ({ activeUser, logoutUser }) => {
    if (!activeUser.loggedIn) return <NavbarMobileUserActionsNotSignedIn />;
    return (
      <NavbarMobileUserActionsSignedIn
        activeUser={activeUser}
        logoutUser={logoutUser}
      />);
  }

  render() {
    return (
      <div className="navbar__mobile--actions">
        {this.renderHelper(this.props)}
      </div>
    );
  }
}

export default NavbarMobileActions;
