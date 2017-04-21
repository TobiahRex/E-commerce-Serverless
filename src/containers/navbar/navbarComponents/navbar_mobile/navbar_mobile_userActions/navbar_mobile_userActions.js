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
    activeUser: bool.isRequired,
  }

  render() {
    return (
      <div className="navbar__mobile--actions">
        {
          this.props.activeUser ?
            <NavbarMobileUserActionsNotSignedIn /> :
            <NavbarMobileUserActionsSignedIn />
        }
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => ({
  activeUser: auth.loggedIn,
});
export default connect(mapStateToProps)(NavbarMobileActions);
