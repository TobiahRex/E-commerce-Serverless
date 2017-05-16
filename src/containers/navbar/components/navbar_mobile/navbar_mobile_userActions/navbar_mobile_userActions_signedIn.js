import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { auth as AuthService } from '../../../../../navigation/routes';

const { objectOf, any } = PropTypes;

class NavbarMobileUserActionsSignedIn extends PureComponent {
  static propTypes = {
    profile: objectOf(any),
  }
  static defaultProps = {
    profile: null,
  }

  logout = () => AuthService.logout();

  render() {
    return (
      <ul className="actions__signedIn--list">
        <li className="list--signOut sweep-right-red">
          <a href="" className="signOut__button" onClick={this.logout}>
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
            <img src={this.props.profile.picture} alt="My Account" />
          </Link>
        </li>
      </ul>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  profile: user.profile,
});
export default connect(mapStateToProps, null)(NavbarMobileUserActionsSignedIn);
