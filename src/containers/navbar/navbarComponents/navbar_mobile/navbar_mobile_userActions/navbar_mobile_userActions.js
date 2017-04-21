/* eslint react/no-unused-prop-types: 0 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import NavbarMobileUserActionsNotSignedIn from './navbar_mobile_userActions_notSignedIn';
import NavbarMobileUserActionsSignedIn from './navbar_mobile_userActions_signedIn';

const { bool } = React.PropTypes;

class NavbarMobileActions extends PureComponent {
  static propTypes = {
    activeUser: bool.isRequired,
  }

  render() {
    return (
      <div className="navbar__mobile--actions">
        {
          this.props.activeUser ?
            <NavbarMobileUserActionsSignedIn /> :
            <NavbarMobileUserActionsNotSignedIn />
        }
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => ({
  activeUser: auth.loggedIn,
});
export default connect(mapStateToProps)(NavbarMobileActions);
