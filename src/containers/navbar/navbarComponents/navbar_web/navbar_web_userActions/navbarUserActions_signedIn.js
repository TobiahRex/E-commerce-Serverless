import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router';

import { auth as AuthService } from '../../../../../navigation/routes';

class NavbarUserActionsSignedin extends PureComponent {
  static propTypes = {
    user: PropTypes.objectOf(PropTypes.any).isRequired,
    push: PropTypes.func.isRequired,
  }
  static styles = {
    hidden: {
      display: 'none',
    },
    show: {},
  }

  logout = () => {
    AuthService.logout();
    this.props.push('/');
  };

  render() {
    return (
      <ul className="upper-actions__signedIn" >
        <li className="signedIn__logout--title">
          <button onClick={this.logout} className="logout__button" >
            Logout
          </button>
        </li>
        <li className="signedIn__checkout--title" >
          <Link to={'/express_checkout'} className="checkout__link">
            Checkout
          </Link>
        </li>
        <li className="signedIn__myAccount--title">
          <Link to={`/user/${123123}`} className="myAccount__link">
            <img
              className="myAccount__link--picture"
              src={this.props.user.profile.picture}
              alt="My Account"
            />
            
          </Link>
        </li>
      </ul>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  push: location => dispatch(location),
});
const mapStateToProps = ({ user }) => ({
  user,
});
export default connect(mapStateToProps, mapDispatchToProps)(NavbarUserActionsSignedin);
