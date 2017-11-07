import React from 'react';
import { NavbarLower } from './components';
import './assets/styles/style.css';

function NavbarWebMini() {
  return (
    <nav className="navbar-small">
      <div className="navbar__nav-section">
        <div className="nav-section__navbar-content">
          <div className="navbar-content__logo-container">
            <img
              className="logo-container__nav-img-sml"
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 13vw, 129px"
              src="images/nj2jp-small-logo-2-white.png"
              srcSet="images/nj2jp-small-logo-2-white-p-500.png 500w, images/nj2jp-small-logo-2-white.png 766w"
              width="383"
            />
          </div>
          <div className="navbar-content__navbar-action-section">
            <div className="navbar-action-section__nav-container">
              <button
                className="nav-container__hdr-section w-inline-block"
                data-ix="nav-s-juice-hover"
                onClick={() => browserHistory.push('/juice/french_vanilla_mocha')}>
                <div className="hdr-section__option--title">
                  Juices
                </div>
              </button>
              <div
                className="nav-container__hdr-section"
                data-ix="nav-s-media-hover">
                <div className="hdr-section__option--title">
                  Media
                </div>
              </div>
              <div
                className="nav-container__hdr-section"
                data-ix="nav-s-info-hover">
                <div className="hdr-section__option--title">
                  Info
                </div>
              </div>
            </div>
            <div className="navbar-action-section__right-side">
              <div className="right-side__logged-section" data-ix="nav-s-logged-section-load">
                <div className="logged-section__login-prompt">
                  <div className="logged-section__login-prompt">
                    <p className="login-prompt__nav-s-login">
                      Login
                    </p>
                  </div>
                </div>
                <div className="logged-section__usr-icon">
                  <img className="usr-icon__nav-s-img" src="images/default-avatar-150px.png" />
                </div>
              </div>
              <button
                className="right-side__mycart-container w-inline-block"
                data-ix="nav-s-cart-hover"
                onClick={'/cart'}
              >
                <div className="mycart-container__mycart-title">
                  <div className="mycart-title__blurb">
                    my cart
                  </div>
                </div>
                <div className="mycart-container__mycart-qty">
                  <div className="mycart-qty__blurb">
                    0
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
          <div className="navbar__juice-dropdown">
            <div className="juice-dropdown__floating-juice-container" data-ix="nav-s-juice-hover">
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
                  <a className="card-container__juice-card juice-card--1 w-inline-block" href="#">
                    <div className="hdr-container--1 juice-card__hdr-container">
                      <h4 className="hdr-container__juice-card-hdr juice-card-hdr--1">
                        French Vanilla Mocha
                      </h4>
                    </div>
                    <div className="juice-card__juice-img juice-img--1">
                      <img className="card-img--1 juice-img__card-img" src="images/nj2jp-fvm-small-shadow.png">
                      </div>
                    </a>
                    <a className="card-container__juice-card juice-card--2 w-inline-block" href="#">
                      <div className="hdr-container--2 juice-card__hdr-container">
                        <h4 className="hdr-container__juice-card-hdr juice-card-hdr--2">
                          French Vanilla Mocha
                        </h4>
                      </div>
                      <div className="juice-card__juice-img juice-img--2">
                        <img className="card-img--2 juice-img__card-img" src="images/nj2jp-fvm-small-shadow.png">
                        </div>
                      </a>
                      <a className="card-container__juice-card juice-card--3 w-inline-block" href="#">
                        <div className="hdr-container--3 juice-card__hdr-container">
                          <h4 className="hdr-container__juice-card-hdr juice-card-hdr--3">
                            French Vanilla Mocha
                          </h4>
                        </div>
                        <div className="juice-card__juice-img juice-img--3">
                          <img className="card-img--3 juice-img__card-img" src="images/nj2jp-fvm-small-shadow.png">
                          </div>
                        </a>
                        <a className="card-container__juice-card juice-card--4 w-inline-block" href="#">
                          <div className="hdr-container--4 juice-card__hdr-container">
                            <h4 className="hdr-container__juice-card-hdr juice-card-hdr--4">
                              French Vanilla Mocha
                            </h4>
                          </div>
                          <div className="juice-card__juice-img juice-img--4">
                            <img className="card-img--4 juice-img__card-img" src="images/nj2jp-fvm-small-shadow.png">
                            </div>
                          </a>
                          <a className="card-container__juice-card juice-card--5 w-inline-block" href="#">
                            <div className="hdr-container--5 juice-card__hdr-container">
                              <h4 className="hdr-container__juice-card-hdr juice-card-hdr--5">
                                French Vanilla Mocha
                              </h4>
                            </div>
                            <div className="juice-card__juice-img juice-img--5">
                              <img className="card-img--5 juice-img__card-img" src="images/nj2jp-fvm-small-shadow.png">
                              </div>
                            </a>
                            <a className="card-container__juice-card juice-card--6 w-inline-block" href="#">
                              <div className="hdr-container--6 juice-card__hdr-container">
                                <h4 className="hdr-container__juice-card-hdr juice-card-hdr--6">
                                  French Vanilla Mocha
                                </h4>
                              </div>
                              <div className="juice-card__juice-img juice-img--6">
                                <img className="card-img--6 juice-img__card-img" src="images/nj2jp-fvm-small-shadow.png">
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="floating-juice-container__bottom-section">
                            <div className="buttbottomon-section__btn-container">
                              <a className="btn-container__reccomend-btn w-button" href="#">
                                Recommend Juice
                              </a>
                            </div>
                            <div className="bottom-section__register-blurb" data-ix="nav-s-juice-register-hover">
                              <p className="register-blurb__blurb-text">
                                GET 10% OFF
                                <strong className="blurb-text__register-bold-text">
                                  WHEN YOU BECOME A MEMBER
                                </strong>
                              </p>
                            </div>
                          </div>
                          <div className="floating-juice-container__menu-box">
                          </div>
                        </div>
                      </div>
                      <div className="navbar__media-dropdown">
                        <div className="media-dropdown__floating-media-container" data-ix="nav-s-media-hover">
                          <div className="floating-media-container__top-section">
                            <div className="top-section__media-hdr">
                              <h3 className="media-hdr__section-text section-text--contact-us">
                                Contact Us
                              </h3>
                            </div>
                            <div className="top-section__media-hdr" data-ix="nav-s-media-review-hdr-hover">
                              <h3 className="media-hdr__section-text section-text--juice-reviews">
                                Juice Reviews
                              </h3>
                            </div>
                            <div className="top-section__media-hdr" data-ix="nav-s-media-review-hdr-hover-2">
                              <h3 className="media-hdr__section-text section-text--vape-news">
                                Vape News
                              </h3>
                            </div>
                            <div className="top-section__media-hdr" data-ix="nav-s-media-news-hdr-hover-2">
                              <h3 className="media-hdr__section-text section-text--usr-stories">
                                User Stories
                              </h3>
                            </div>
                          </div>
                          <div className="floating-media-container__middle-section">
                            <div className="middle-section__contact--img-container">
                              <img className="img-container__media-section-img media-section-img--contact-us" data-ix="nav-s-media-hdr-hover-2" src="images/navbar_web_media_contactUs.png">
                              </div>
                              <div className="middle-section__reviews--img-container">
                                <img className="img-container__media-section-img media-section-img--juice-reviews" data-ix="nav-s-media-img-hover" src="images/navbar_web_media_juiceReviews.png">
                                </div>
                                <div className="middle-section__news--img-container">
                                  <img className="img-container__media-section-img media-section-img--vape-news" data-ix="nav-s-media-img-hover" src="images/navbar_web_media_vapeNews.png">
                                  </div>
                                  <div className="middle-section__stories--img-container">
                                    <img className="img-container__media-section-img media-section-img--usr-stories" src="images/navbar_web_media_userStories.png">
                                    </div>
                                  </div>
                                  <div className="foating-media-container__bottom-section">
                                    <div className="bottom-section__inner-container">
                                      <a className="inner-container__media-icon media-icon__fb w-inline-block" data-ix="nav-s-media-social-hover" href="#">
                                        <p className="media-icon__fa-icon">
                                          
                                        </p>
                                      </a>
                                      <a className="inner-container__media-icon media-icon__twitter w-inline-block" data-ix="nav-s-media-social-hover" href="#">
                                        <p className="media-icon__fa-icon">
                                          
                                        </p>
                                      </a>
                                      <a className="inner-container__media-icon media-icon__insta w-inline-block" data-ix="nav-s-media-social-hover" href="#">
                                        <p className="media-icon__fa-icon">
                                          
                                        </p>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="floating-media-container__menu-box"></div>
                                </div>
                              </div>
                              <div className="navbar__info-dropdown">
                                <div className="info-dropdown__floating-info-container" data-ix="nav-s-info-hover">
                                  <div className="floating-info-container__left-section">
                                    <div className="left-section__menu-container">
                                      <a className="menu-container__link-blurb" href="#">
                                        About
                                      </a>
                                      <a className="menu-container__link-blurb" href="#">
                                        FAQs
                                      </a>
                                      <a className="menu-container__link-blurb" href="#">
                                        Contact Us
                                      </a>
                                    </div>
                                  </div>
                                  <div className="floating-info-container__right-section">
                                    <div className="right-section__menu-container">
                                      <a className="menu-container__link-blurb" data-ix="new-interaction" href="#">
                                        Shipping Policy
                                      </a>
                                    </div>
                                    <div className="right-section__menu-container">
                                      <a className="menu-container__link-blurb" href="#">
                                        Return Policy
                                      </a>
                                    </div>
                                    <div className="right-section__menu-container">
                                      <a className="menu-container__link-blurb" href="#">
                                        Privacy Policy
                                      </a>
                                    </div>
                                    <div className="right-section__menu-container">
                                      <a className="menu-container__link-blurb" href="#">
                                        Terms &amp; Conditions
                                      </a>
                                    </div>
                                    <div className="right-section__menu-container">
                                      <a className="menu-container__link-blurb" href="#">
                                        Nicotine Disclaimer
                                      </a>
                                    </div>
                                  </div>
                                  <div className="floating-info-container__menu-box"></div>
                                </div>
                              </div>
                              <div className="navbar__cart-dropdown">
                                <div className="cart-dropdown__floating-cart-container" data-ix="nav-s-cart-hover">
                                  <a className="floating-cart-container__promotion-box w-inline-block" href="#">
                                    <p className="promotion-box__promotion-blurb">
                                      BUY 4 BOTTLES
                                    </p>
                                    <p className="promotion-box__promotion-blurb">
                                      GET 25% OFF
                                    </p>
                                  </a>
                                  <div className="floating-cart-container__recently-added">
                                    <p className="recently-added__blurb-text">
                                      Recently Added Item(s)
                                    </p>
                                  </div>
                                  <div className="floating-cart-container__product-stage">
                                    <div className="product-stage__product-list-card">
                                      <div className="product-list-card__img-container">
                                        <img className="img-container__cart-card-img" src="images/nj2jp-fvm-small-shadow.png">
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
                                          <img className="img-container__cart-card-img" src="images/nj2jp-fvm-small-shadow.png">
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
                                            Loading... &nbsp;
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
                                        <a className="btn-section__checkout-btn w-button" href="#">
                                          Checkout
                                        </a>
                                        <a className="btn-section__view-cart-btn w-button" href="#">
                                          View Cart
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </nav>
  );
}

export default NavbarWebMini;
