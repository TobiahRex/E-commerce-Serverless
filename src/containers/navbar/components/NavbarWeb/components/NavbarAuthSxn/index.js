import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  NavbarAuthLogin,
  NavbarAuthLogout,
} from './';

function NavbarAuthSxn({ activeUser }) {
  return (
    <div>
      {
        activeUser ?
          <NavbarAuthLogout /> :
          <NavbarAuthLogin />
      }
    </div>
  );
}
const { objectOf, any } = PropTypes;
NavbarAuthSxn.propTypes = {
  activeUser: objectOf(any),
};
NavbarAuthSxn.defaultProps = {
  activeUser: {},
};
export default connect(({ user }) => ({
  activeUser: user.profile,
}), null)(NavbarAuthSxn);
