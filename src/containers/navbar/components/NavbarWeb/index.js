import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { lifecycle } from 'recompose';
import './assets/styles/style.css';
import {
  WebflowJs,
  WebflowAnimations,
  WebflowAnimations2,
} from './assets/utils';
import {
  NavbarLogoSxn,
  NavbarLanguage,
  NavbarAuthSxn,
  NavbarCart,
  NavbarNavs,
} from './components';

class NavbarWeb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      activeLanguage: '',
    };
  }

  handleLangChange = (e) => {
    const language = e.target.dataset.language || e.target.dataset.parentNode.language;

    this.setState(() => ({
      activeLanguage: language,
    }),
    () => {
      this.props.saveLanguage(language);
      this.props.push(location);
    });
  }

  render() {
    const { activeLanguage } = this.props;

    return (
      <nav className="navbar-big">
        <div className="navbar-big__nav-section">
          <div className="nav-section__navbar-content">
            <NavbarLogoSxn />
            <div className="navbar-content__action-section">
              <div className="action-section__navbar-action-top">
                <NavbarLanguage
                  handleLangChange={this.handleLangChange}
                  activeLanguage={activeLanguage}
                />
                <div className="navbar-action-top__right-side">
                  <NavbarAuthSxn />
                  <NavbarCart />
                </div>
              </div>
              <NavbarNavs />
            </div>
          </div>
        </div>
        <div className="navbar-big__juice-dropdown">
          <div className="juice-dropdown__floating-juice-container" data-ix="nav-b-juice-hover">
            <div className="floating-juice-container__top-section">
              <div className="top-section__juice-hdr">
                <h2 className="juice-hdr__hdr-blurb">
                  Mission Statement
                </h2>
              </div>
              <div className="top-section__juice-blurb">
                <p className="paragraph">
                  N2JP prides itself on offering our customers top quality products and service. We want your experiences doing business with us to be so good, that we become your #1 choice for all your vape juice needs. Our customers love us, and we plan on making sure you do to. You’ll find all our juice offers below. If you have any questions, don’t hesitate to ask us. Enjoy your experience “making the switch.”
                </p>
              </div>
            </div>
            <div className="floating-juice-container__middle-section">
              <div className="middle-section__section-hdr">
                <h2 className="section-hdr__flavor-hdr">
                  Choose A Flavor!
                </h2>
              </div>
              <div className="middle-section__card-container">
                <Link className="card-container__juice-card juice-card--1 w-inline-block" to="#">
                  <div className="hdr-container--1 juice-card__hdr-container">
                    <h4 className="hdr-container__juice-card-hdr juice-card-hdr--1">
                      French Vanilla Mocha
                    </h4>
                  </div>
                  <div className="juice-card__juice-img juice-img--1">
                    <img alt="" className="card-img--1 juice-img__card-img" src="/images/nj2jp-fvm-small-shadow.png" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="floating-juice-container__bottom-section">
              <div className="buttbottomon-section__btn-container">
                <Link className="btn-container__reccomend-btn w-button" to="/contact_us">
                  Recommend Juice
                </Link>
              </div>
              <div className="bottom-section__register-blurb" data-ix="nav-b-juice-register-hover">
                <p className="register-blurb__blurb-text">
                  GET 10% OFF &nbsp;
                  <strong className="blurb-text__register-bold-text">
                    WHEN YOU BECOME A MEMBER
                  </strong>
                </p>
              </div>
            </div>
            <div className="floating-juice-container__nav-b-menu-box" />
          </div>
        </div>
        <div className="navbar-big__media-dropdown">
          <div className="media-dropdown__floating-media-container" data-ix="nav-b-media-hover">
            <div className="floating-media-container__top-section">
              <Link className="top-section__media-hdr w-inline-block" to="#">
                <h3 className="media-hdr__section-text section-text--contact-us">
                  Contact Us
                </h3>
              </Link>
              <Link className="top-section__media-hdr w-inline-block" to="#">
                <h3 className="media-hdr__section-text section-text--juice-reviews">
                  Juice Reviews
                </h3>
              </Link>
              <div className="top-section__media-hdr" data-ix="nav-s-media-review-hdr-hover-2">
                <Link className="top-section__media-hdr w-inline-block" to="#">
                  <h3 className="media-hdr__section-text section-text--vape-news">
                    Vape News
                  </h3>
                </Link>
              </div>
              <Link className="top-section__media-hdr w-inline-block" to="#">
                <h3 className="media-hdr__section-text section-text--usr-stories">
                  User Stories
                </h3>
              </Link>
            </div>
            <div className="floating-media-container__middle-section">
              <Link className="middle-section__contact--img-container w-inline-block" to="/contact_us">
                <img alt="" className="img-container__media-section-img media-section-img--contact-us" data-ix="nav-s-media-hdr-hover-2" src="/images/navbar_web_media_contactUs.png" />
              </Link>
              <Link className="middle-section__reviews--img-container w-inline-block" to="/juice_reviews">
                <img alt="Juice Reviews" className="img-container__media-section-img media-section-img--juice-reviews" data-ix="nav-s-media-img-hover" src="/images/navbar_web_media_juiceReviews.png" />
              </Link>
              <Link className="middle-section__news--img-container w-inline-block" to="/vape_news">
                <img alt="Vape News" className="img-container__media-section-img media-section-img--vape-news" data-ix="nav-s-media-img-hover" src="/images/navbar_web_media_vapeNews.png" />
              </Link>
              <Link className="middle-section__stories--img-container w-inline-block" to="/user_stories">
                <img alt="User Stories" className="img-container__media-section-img media-section-img--usr-stories" src="/images/navbar_web_media_userStories.png" />
              </Link>
            </div>
            <div className="foating-media-container__bottom-section">
              <div className="bottom-section__inner-container">
                <Link className="inner-container__media-icon media-icon__fb w-inline-block" data-ix="nav-b-media-social-hover" to="http://facebook.com/nj2jp">
                  <p className="media-icon__fa-icon">
                    
                  </p>
                </Link>
                <Link className="inner-container__media-icon media-icon__twitter w-inline-block" data-ix="nav-b-media-social-hover" to="http://twitter.com/nicjuice2japan">
                  <p className="media-icon__fa-icon">
                    
                  </p>
                </Link>
                <Link className="inner-container__media-icon media-icon__insta w-inline-block" data-ix="nav-b-media-social-hover" to="http://instagram.com/nicjuice2japan">
                  <p className="media-icon__fa-icon">
                    
                  </p>
                </Link>
              </div>
            </div>
            <div className="floating-media-container__nav-b-menu-box" />
          </div>
        </div>
        <div className="navbar-big__info-dropdown">
          <div className="info-dropdown__floating-info-container" data-ix="nav-s-info-hover">
            <div className="floating-info-container__left-section">
              <div className="left-section__menu-container">
                <Link className="menu-container__link-blurb" to="/about">
                  About
                </Link>
                <Link className="menu-container__link-blurb" to="/faqs">
                  FAQs
                </Link>
                <Link className="menu-container__link-blurb" to="/contact_us">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="floating-info-container__right-section">
              <div className="right-section__menu-container">
                <Link className="menu-container__link-blurb" data-ix="new-interaction" to="/shipping_policy">
                  Shipping Policy
                </Link>
              </div>
              <div className="right-section__menu-container">
                <Link className="menu-container__link-blurb" to="/return_policy">
                  Return Policy
                </Link>
              </div>
              <div className="right-section__menu-container">
                <Link className="menu-container__link-blurb" to="/privacy_policy">
                  Privacy Policy
                </Link>
              </div>
              <div className="right-section__menu-container">
                <Link className="menu-container__link-blurb" to="/terms_and_conditions">
                  Terms &amp; Conditions
                </Link>
              </div>
              <div className="right-section__menu-container">
                <Link className="menu-container__link-blurb" to="/nicotine_disclaimer">
                  Nicotine Disclaimer
                </Link>
              </div>
            </div>
            <div className="floating-info-container__nav-b-menu-box" />
          </div>
        </div>
        <div className="navbar-big__cart-dropdown">
          <div className="cart-dropdown__nav-b-cart-container" data-ix="nav-b-cart-hover">
            <Link className="floating-cart-container__promotion-box w-inline-block" to="/login">
              <p className="promotion-box__promotion-blurb">
                BUY 4 BOTTLES
              </p>
              <p className="promotion-box__promotion-blurb">
                GET 25% OFF
              </p>
            </Link>
            <div className="floating-cart-container__recently-added">
              <p className="recently-added__blurb-text">
                Recently Added Item(s)
              </p>
            </div>
            <div className="floating-cart-container__product-stage">
              <div className="product-stage__product-list-card">
                <div className="product-list-card__img-container">
                  <img alt="French Vanilla Mocha" className="img-container__cart-card-img" src="/images/nj2jp-fvm-small-shadow.png" />
                </div>
                <div className="product-list-card__product-info">
                  <div className="product-info__product-title">
                    <p className="product-title__nav-cart-blurb">
                      French Vanilla Mocha
                    </p>
                  </div>
                  <div className="product-info__qty-price">
                    <p className="qty-price__nav-cart-blurb">
                      1 x $ 30.00
                    </p>
                  </div>
                  <div className="product-info__nicotine">
                    <p className="nicotine__nav-cart-blurb">
                      8 mg
                    </p>
                  </div>
                </div>
                <div className="product-list-card__card-btn">
                  <div className="card-btn__nav-cart-edit">
                    <p className="nav-cart-edit__fa-text">
                      
                    </p>
                  </div>
                  <div className="card-btn__nav-cart-delete">
                    <p className="nav-cart-delete__fa-text">
                      
                    </p>
                  </div>
                </div>
              </div>
              <div className="product-stage__product-list-card">
                <div className="product-list-card__img-container">
                  <img alt="" className="img-container__cart-card-img" src="/images/nj2jp-fvm-small-shadow.png" />
                </div>
                <div className="product-list-card__product-info">
                  <div className="product-info__product-title">
                    <p className="product-title__nav-cart-blurb">
                      French Vanilla Mocha
                    </p>
                  </div>
                  <div className="product-info__qty-price">
                    <p className="qty-price__nav-cart-blurb">
                      1 x $ 30.00
                    </p>
                  </div>
                  <div className="product-info__nicotine">
                    <p className="nicotine__nav-cart-blurb">
                      8 mg
                    </p>
                  </div>
                </div>
                <div className="product-list-card__card-btn">
                  <div className="card-btn__nav-cart-edit">
                    <p className="nav-cart-edit__fa-text">
                      
                    </p>
                  </div>
                  <div className="card-btn__nav-cart-delete">
                    <p className="nav-cart-delete__fa-text">
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="floating-cart-container__loading-stage">
              <div className="loading-stage__loading-blurb">
                <p className="loading-blurb__nav-cart-blurb">
                  Loading...
                  &nbsp;
                  <em className="nav-cart-blurb__fa-spinner">
                    
                  </em>
                </p>
              </div>
            </div>
            <div className="floating-cart-container__empty-stage">
              <div className="empty-stage__empty-blurb">
                <p className="empty-blurb__nav-cart-blurb">
                  Your Cart Is Currently Empty
                </p>
              </div>
            </div>
            <div className="floating-cart-container__total-price-card">
              <div className="total-price-card__total-blurb">
                <p className="total-blurb__card-blurb">
                  TOTAL PRICE
                </p>
              </div>
              <div className="total-price-card__total-price">
                <p className="total-price__cart-price">
                  $ 30.00
                </p>
              </div>
            </div>
            <div className="floating-cart-container__btn-section">
              <Link className="btn-section__checkout-btn w-button" to="/express_checkout">
                Checkout
              </Link>
              <Link className="btn-section__view-cart-btn w-button" to="/cart">
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
const { func, string } = PropTypes;
NavbarWeb.propTypes = {
  location: string.isRequired,
  activeLanguage: string.isRequired,
  saveLanguage: func.isRequired,
  push: func.isRequired,
};
const NavbarWebWithLifecycle = lifecycle({
  componentDidMount: () => {
    WebflowJs();
    WebflowAnimations();
    WebflowAnimations2();
  },
  componentDidUpdate: () => {
    WebflowAnimations();
    WebflowAnimations2();
  },
})(NavbarWeb);

export default NavbarWebWithLifecycle;
