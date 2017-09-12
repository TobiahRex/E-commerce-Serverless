import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  NavbarWebSignedIn,
  NavbarWebNotSignedIn,
} from '../';

/* TODO :
1. This component needs a "signed-in" prop from it's parent.  It will be used to toggle the inline-style for display: none.
*/
function NavbarUserActions({ activeUser }) {
  return (
    <div className="navbar-actionSection-upper-actions">
      {
        activeUser ?
          <NavbarWebSignedIn activeUser={activeUser} /> :
          <NavbarWebNotSignedIn />
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
