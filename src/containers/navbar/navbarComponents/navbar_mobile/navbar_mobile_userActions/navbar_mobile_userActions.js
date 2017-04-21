/* eslint react/no-unused-prop-types: 0 */
import React, { PureComponent } from 'react';

import NavbarMobileUserActionsNotSignedIn from './navbar_mobile_userActions_notSignedIn';
import NavbarMobileUserActionsSignedIn from './navbar_mobile_userActions_signedIn';

const { bool } = React.PropTypes;
/* TODO
1. Redux Action method "logoutUser"
2. Redux State property "active_user : true/false"
3. Remove UUID as dummy generator.
*/

class NavbarMobileActions extends PureComponent {
  static propTypes = {
    loggedIn: bool.isRequired,
  }

  renderHelper = ({ activeUser }) => {
    if (!activeUser.loggedIn) return <NavbarMobileUserActionsNotSignedIn />;
    return (
      <NavbarMobileUserActionsSignedIn activeUser={activeUser} />);
  }

  render() {
    return (
      <div className="navbar__mobile--actions">
        {this.renderHelper(this.props)}
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => ({
  loggedIn: auth.loggedIn,
});
export default connect(mapStateToProps)(NavbarMobileActions);
