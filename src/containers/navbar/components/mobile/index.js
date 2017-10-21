import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const { objectOf, any } = PropTypes;

class NavbarMobile extends React.PureComponent {
  static propTypes = {
    activeUser: objectOf(any),
  }
  static defaultProps = {
    activeUser: false,
  }
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <a className="navbar__hamburger-container w-inline-block" data-ix="mobile-navbar-ppic-fade-in" href="#">
            <div className="hamburger-btn-top" />
            <div className="hamburger-btn-mid" />
            <div className="hamburger-btn-bottom" />
          </a>
          <div className="navbar__action-section">
            <a className="navbar__logo-container w-inline-block" href="/">
              <img alt="logo" className="image" sizes="(max-width: 767px) 31vw, (max-width: 991px) 20vw, 766px" src="images/nj2jp-small-logo-2-white_shadow.png" srcSet="images/nj2jp-small-logo-2-white_shadow-p-500.png 500w, images/nj2jp-small-logo-2-white_shadow.png 766w" />

            </a>
            <div className="action-section__right-side">
              <div className="user-icon" data-ix="mobile-navbar-ppic-fade-in">
                <img alt="profile-pic" className="image-2" sizes="(max-width: 479px) 35px, (max-width: 991px) 50px, (max-width: 1092px) 100vw, 1092px" src="images/social-media-PP.jpg" srcSet="images/social-media-PP-p-800.jpeg 800w, images/social-media-PP-p-1080.jpeg 1080w, images/social-media-PP.jpg 1092w" />

              </div>
              <a className="mycart__container w-inline-block" href="/cart">
                <div className="cart-icon__container">
                  <div className="text-block">FA</div>
                </div>
                <div className="cart-qty__container">
                  <div className="text-block">0</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="navbar-expanded__container">
          <div className="expanded-header__container">
            <div className="greetings__container" data-ix="mobile-navbar-authorization-change-enter">
              <h3 className="heading">Hi, Toby</h3>
            </div>
            <div className="greetings__container not-logged-in" data-ix="mobile-navbar-authorization-change-enter">
              <h3 className="heading">Login <em>FA</em></h3>
            </div>
            <div className="expanded-status__logging-in greetings__container" data-ix="mobile-navbar-authorization-change-enter">
              <h3 className="logging-in"><em className="italic-text-2">Logging In...</em> <em className="italic-text-3">FA</em></h3>
            </div>
            <div className="greetings__container successsfully-logged-in" data-ix="mobile-navbar-authorization-change-exit">
              <h3 className="success-title"><em>FA</em> Success!</h3>
            </div>
            <div className="error-loggin-in greetings__container" data-ix="mobile-navbar-authorization-change-exit">
              <h3 className="error-title"><em>FA</em> Error!</h3>
              <h4 className="error-subtitle">
                There was a problem loggin you in.
                <br />
                Please try again later.
              </h4>
            </div>
          </div>
          <div className="expanded-content__container">
            <div className="expanded-section__container">
              <div className="section-title__container">
                <h3 className="expanded-nav-title-normal">
                  Language
                </h3>
              </div>
              <div className="dropdown-content">
                <div className="option__container">
                  <div className="language-flag">
                    <img alt="japan-flag" sizes="(max-width: 991px) 30px, 440px" src="images/japan_flag.png" srcSet="images/japan_flag-p-500.png 500w, images/japan_flag-p-800.png 800w, images/japan_flag-p-1080.png 1080w, images/japan_flag-p-1600.png 1600w, images/japan_flag-p-2000.png 2000w, images/japan_flag-p-2600.png 2600w, images/japan_flag.png 3543w" width="440" />
                  </div>
                  <div className="language-title">
                    <div className="text-block-2">
                      Japanese
                    </div>
                  </div>
                </div>
                <div className="option__container">
                  <div className="language-flag">
                    <img alt="us-flag" sizes="(max-width: 991px) 30px, 440px" src="images/us_flag.png" srcSet="images/us_flag-p-500.png 500w, images/us_flag-p-800.png 800w, images/us_flag-p-1080.png 1080w, images/us_flag-p-1600.png 1600w, images/us_flag-p-2000.png 2000w, images/us_flag-p-2600.png 2600w, images/us_flag-p-3200.png 3200w, images/us_flag.png 6065w" width="440" />
                  </div>
                  <div className="language-title">
                    <div className="text-block-2">
                      English
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="expanded-section__container">
              <h3 className="expanded-nav-title-normal">
                juices
              </h3>
              <div className="dropdown-content">
                <div className="option__container">
                  <div className="language-title">
                    <div className="text-block-2">
                      Keylime Pie
                    </div>
                  </div>
                </div>
                <div className="option__container">
                  <div className="language-title">
                    <div className="text-block-2">
                      Pina Colada
                    </div>
                  </div>
                </div>
                <div className="option__container">
                  <div className="language-title">
                    <div className="text-block-2">
                      Papple Berry
                    </div>
                  </div>
                </div>
                <div className="option__container">
                  <div className="language-title">
                    <div className="text-block-2">
                      Fruity Bamm-Bamm
                    </div>
                  </div>
                </div>
                <div className="option__container">
                  <div className="language-title">
                    <div className="text-block-2">
                      French Vanilla Mocha
                    </div>
                  </div>
                </div>
                <div className="option__container">
                  <div className="language-title">
                    <div className="text-block-2">
                      Strawberries N{'\''} Cream
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="expanded-section__container">
              <h3 className="expanded-nav-title-normal">
                MEDIA
              </h3>
              <div className="dropdown-content">
                <div className="option__container">
                  <div className="language-title">
                    <div className="text-block-2">
                      Contact us
                    </div>
                  </div>
                </div>
                <div className="option__container">
                  <div className="language-title">
                    <div className="text-block-2">
                      Vape News
                    </div>
                  </div>
                </div>
                <div className="option__container">
                  <div className="language-title">
                    <div className="text-block-2">
                      User Stories
                    </div>
                  </div>
                </div>
                <div className="option__container">
                  <div className="language-title">
                    <div className="text-block-2">
                      Product Reviews
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="social-media__container">
              <h3 className="social-media__title">
                CONNECT WITH US
              </h3>
              <div className="media-btns__container">
                <button className="social-media-btn w-inline-block">
                  <div>FA</div>
                </button>
                <button className="social-media-btn w-inline-block" >
                  <div>FA</div>
                </button>
                <button className="social-media-btn w-inline-block" >
                  <div>FA</div>
                </button>
                <button className="social-media-btn w-inline-block" >
                  <div>FA</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  activeUser: user.profile,
});
export default connect(mapStateToProps)(NavbarMobile);
