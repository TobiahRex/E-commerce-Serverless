import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { auth as AuthService } from '../../../../../navigation/routes';

const { objectOf, any } = React.PropTypes;

class NavbarUserActionsSignedin extends PureComponent {
  static propTypes = {
    profile: objectOf(any),
  }
  static defaultProps = {
    profile: {
      picture: '../Images/default-user.png',
    },
  }
  static styles = {
    hidden: {
      display: 'none',
    },
    show: {},
  }

  logout = () => AuthService.logout();

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
              src={this.props.profile.picture}
              alt="My Account"
            />
          </Link>
        </li>
      </ul>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  profile: user.profile,
});
export default connect(mapStateToProps)(NavbarUserActionsSignedin);
