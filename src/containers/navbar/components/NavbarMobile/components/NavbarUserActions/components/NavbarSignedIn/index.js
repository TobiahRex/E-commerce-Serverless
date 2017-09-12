import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { auth as AuthService } from '../../assets/utils';

function NavbarMobileUserActionsSignedIn({ profile }) {
  return (
    <ul className="actions__signedIn--list">
      <li className="list--signOut sweep-right-red">
        <a href="" className="signOut__button" onClick={AuthService.logout}>
          Logout
        </a>
      </li>
      <li className="list--checkout sweep-right-red">
        <Link to={'/express_checkout'} className="checkout__link" >
          Checkout
        </Link>
      </li>
      <li className="list--myAccount">
        <Link className="myAccount__link">
          <img
            src={profile.pictures.small || profile.pictures.default}
            alt="My Account"
          />
        </Link>
      </li>
    </ul>
  );
}
const { objectOf, any } = PropTypes;
NavbarMobileUserActionsSignedIn.propTypes = {
  profile: objectOf(any),
};
NavbarMobileUserActionsSignedIn.defaultProps = {
  profile: {
    pictures: {
      small: '',
      default: '/images/default-avatar.png',
    },
  },
};
export default NavbarMobileUserActionsSignedIn;
