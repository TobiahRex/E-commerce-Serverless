import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  NavbarAuthLogin,
  NavbarAuthLogout,
} from './components';

class NavbarAuthSxn extends React.PureComponent {
  render() {
    const { activeUser } = this.props;
    return (
      <div>
        {
          activeUser ?
            <NavbarAuthLogout activeUser={activeUser} /> :
            <NavbarAuthLogin />
        }
      </div>
    );
  }
}
const { objectOf, any } = PropTypes;
NavbarAuthSxn.propTypes = {
  activeUser: objectOf(any),
};
NavbarAuthSxn.defaultProps = {
  activeUser: {
    profile: {
      name: 'Avatar',
    },
  },
};
export default connect(({ user }) => ({
  activeUser: user.profile,
}), null)(NavbarAuthSxn);
