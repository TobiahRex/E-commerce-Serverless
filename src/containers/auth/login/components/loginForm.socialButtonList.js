import React, { PureComponent, PropTypes } from 'react';
import { Link } from 'react-router';
import SocialLoginButton from './loginForm.socialButton';

class SocialButtonList extends PureComponent {
  static propTypes = {
    socialLogin: PropTypes.func.isRequired,
  }

  socialLogin = type => this.props.socialLogin(type)

  render() {
    return (
      <div className="social--btns__list">
        <ul className="list--container">
          <li className="list--option line">
            <SocialLoginButton
              callback={this.socialLogin('loginWithLine')}
              slug="line"
            />
          </li>
          <li className="list--option facebook">
            <SocialLoginButton
              callback={this.socialLogin('loginWithFacebook')}
              slug="facebook"
            />
          </li>
          <li className="list--option twitter">
            <SocialLoginButton
              callback={this.socialLogin('loginWithTwitter')}
              slug="twitter"
            />
          </li>
          <li className="list--option google">
            <SocialLoginButton
              callback={this.socialLogin('loginWithGoogle')}
              slug="google-plus"
            />
          </li>
          <li className="list--option linkedin">
            <SocialLoginButton
              callback={this.socialLogin('loginWithLinkedin')}
              slug="linkedin"
            />
          </li>
        </ul>
        <div className="list__forgot-msg">
          <Link className="forgot-link" to="/forgot">
            Forgot your Email or Password?
          </Link>
        </div>
      </div>
    );
  }
}
export default SocialButtonList;
