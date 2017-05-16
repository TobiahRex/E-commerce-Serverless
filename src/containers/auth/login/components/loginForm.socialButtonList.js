import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SocialLoginButton from './loginForm.socialButton';

const { func, bool } = PropTypes;
class SocialButtonList extends PureComponent {
  static propTypes = {
    socialLogin: func.isRequired,
    visibility: bool.isRequired,
  }

  socialLogin = e => this.props.socialLogin(e);

  render() {
    const display = !!this.props.visibility && 'none';
    return (
      <div className="sign-in__social--container" style={{ display }} >
        <div className="social--title">
          <div className="social--title-msg">
            <h5>Login or Register with...</h5>
          </div>
        </div>
        <div className="social--btns__list" >
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
          {/* TODO: MVP 2
            <div className="list__forgot-msg">
            <Link className="forgot-link" to="/forgot">
              Forgot your Email or Password?
            </Link>
          </div> */}
        </div>
      </div>
    );
  }
}
export default SocialButtonList;
