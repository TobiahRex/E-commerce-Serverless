import React, { PureComponent, PropTypes } from 'react';
import { Link } from 'react-router';
import SocialLoginButton from './loginForm.socialButton';

class SocialButtonList extends PureComponent {
  static propTypes = {
    socialLogin: PropTypes.func.isRequired,
  }

  socialLogin = e => this.props.socialLogin(e);

  render() {
    return (
      <div className="social--btns__list">
        <ul className="list--container">
          <li className="list--option line">
            <SocialLoginButton
              callback={this.socialLogin}
              slug="loginWithLine"
              faName="line"
            />
          </li>
          <li className="list--option facebook">
            <SocialLoginButton
              callback={this.socialLogin}
              slug="loginWithFacebook"
              faName="facebook"
            />
          </li>
          <li className="list--option twitter">
            <SocialLoginButton
              callback={this.socialLogin}
              slug="loginWithTwitter"
              faName="twitter"
            />
          </li>
          <li className="list--option google">
            <SocialLoginButton
              callback={this.socialLogin}
              slug="loginWithGoogle"
              faName="google-plus"
            />
          </li>
          <li className="list--option linkedin">
            <SocialLoginButton
              callback={this.socialLogin}
              slug="loginWithLinkedin"
              faName="linkedin"
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
