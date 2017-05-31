import React from 'react';
import PropTypes from 'prop-types';
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
          <NavbarUserActionsSignedIn activeUser={activeUser} /> :
          <NavbarUserActionsNotSignedIn />
      }
    </div>
  );
}
const { objectOf, any } = PropTypes;
NavbarUserActions.propTypes = {
  activeUser: objectOf(any),
};
NavbarUserActions.defaultProps = {
  activeUser: false,
};
export default connect(
  ({ user }) => ({ activeUser: user.profile }),
  null,
)(NavbarUserActions);
