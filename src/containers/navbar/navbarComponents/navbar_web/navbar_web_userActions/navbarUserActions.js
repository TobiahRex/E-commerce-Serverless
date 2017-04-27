import React from 'react';
import { connect } from 'react-redux';
import NavbarUserActionsNotSignedIn from './navbarUserActions_notSignedIn';
import NavbarUserActionsSignedIn from './navbarUserActions_signedIn';

/* TODO :
1. This component needs a "signed-in" prop from it's parent.  It will be used to toggle the inline-style for display: none.
*/
function NavbarUserActions({ activeUser }) {
  return (
    <div className="navbar-actionSection-upper-actions">
      {
        activeUser ?
          <NavbarUserActionsSignedIn /> :
          <NavbarUserActionsNotSignedIn />
      }
    </div>
  );
}
const { bool } = React.PropTypes;
NavbarUserActions.propTypes = {
  activeUser: bool,
};
NavbarUserActions.defaultProps = {
  activeUser: false,
};
export default connect(({ auth }) => ({
  loggedIn: auth.loggedIn,
}), null)(NavbarUserActions);
