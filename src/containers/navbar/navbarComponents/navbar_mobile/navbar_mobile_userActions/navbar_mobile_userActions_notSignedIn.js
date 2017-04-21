import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const { objectOf, any } = React.PropTypes;

class NavbarMobileUserActionsNotSignedIn extends PureComponent {
  static propTypes = {
    profile: objectOf(any),
  }
  static defaultProps = {
    profile: {
      picture: '../images/default-user.png',
    },
  }
  render() {
    return (
      <ul className="actions__notSignedIn--list">
        <li className="list--login sweep-right-red">
          <Link
            to={'/login'}
            className="login__link"
          >Login</Link>
        </li>
      </ul>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  profile: user.profile,
});
export default connect(mapStateToProps, null)(NavbarMobileUserActionsNotSignedIn);
