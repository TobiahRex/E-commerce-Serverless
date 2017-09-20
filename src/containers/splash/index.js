import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {
  intlShape,
  injectIntl,
} from 'react-intl';
import './assets/styles';
import {
  WebflowJs,
  WebflowAnimations,
  contentData,
} from './assets/utils/index';
import {
  NewsReviews,
} from './components';

class Splash extends React.Component {
  constructor(props) {
    super(props);

    const {
      intl: {
        messages: {
          'user-stories.breadCrumb.paths1': bcPaths1,
          'user-stories.breadCrumb.lastCrumb': lastCrumb,
        },
      },
    } = props;

    this.intl = {
      bcPaths1,
      lastCrumb,
    };
  }

  calculateHeight = (header) => {
    const { mobile } = this.props;
    const height = window.innerHeight;

    if (!mobile) {
      if (window.innerWidth > 930) return (height - 120);
      return (height - 267);
    }
    if (header) {
      return (height - 267);
    }
    return (window.innerHeight - 60);
  }

  componentDidUpdate() {
    WebflowJs();
    WebflowAnimations();
  }

  render() {
    return (
      <div className="homepage">
        <div className="splash-container">
          <div className="splash-img__background">
            <div className="splash-img">
              <div className="splash-img__header-container">
                <div className="header-container__box" data-ix="fade-in-on-load">
                  <div className="box__img--container"><img className="box__img" sizes="(max-width: 479px) 83vw, (max-width: 991px) 350px, 500px" src="images/nj2jp_oneLine_2-1.png" srcSet="images/nj2jp_oneLine_2-1-p-500.png 500w, images/nj2jp_oneLine_2-1-p-800.png 800w, images/nj2jp_oneLine_2-1-p-1080.png 1080w, images/nj2jp_oneLine_2-1-p-1600.png 1600w, images/nj2jp_oneLine_2-1-p-2000.png 2000w, images/nj2jp_oneLine_2-1-p-2600.png 2600w, images/nj2jp_oneLine_2-1-p-3200.png 3200w, images/nj2jp_oneLine_2-1.png 6200w" width="514" />
                  </div>
                  <div className="box__header-container">
                    <h1 className="header-container__header" data-ix="staggered-load">
                      Fastest Nicotine e-Juice Delivery in Japan
                    </h1>
                    <h1 className="header--2 header-container__header" data-ix="staggered-load-2">
                      Guaranteed!
                    </h1>
                  </div>
                  <div className="box__button-container">
                    <a
                      className="box__button w-inline-block"
                      data-ix="button-load-hover"
                      href="http://www.google.com"
                    >
                      <div className="box__button--alt" data-ix="button-load-hover"></div>
                      <div className="box__button--alt-2" data-ix="button-load-hover"></div>
                      <p className="box__button--text" data-ix="button-load-hover">
                        Buy Now
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="nav-button">
                <div className="nav-button__container">
                  <div className="container__nav-button">
                    <div className="nav-button__fa-chevron">
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="splash-reviews">
            <div className="splash-reviews__header">
              <h2 className="splash-reviews__header--text">
                Reviews
              </h2>
            </div>
            <div
              className="splash-reviews__slide--portrait splash-reviews__slider w-slider"
              data-animation="slide"
              data-autoplay="1"
              data-delay="4000"
              data-duration="600"
              data-easing="ease-in-out"
              data-infinite="1"
              data-nav-spacing="5"
            >
              <div className="slider__mask w-slider-mask">
                <div className="mask__slide-1 w-slide">
                  <p className="slide__blurb slide__blurb--portrait">
                    <em className="blurb--fa-text review-special-text">
                      
                    </em>&nbsp;&nbsp;
                    NicJuice2Japan (NJ2JP) are killing it with these delivery speeds.
                    <br />
                    Not to mention the juice line is delicious. Looking forward to more juices flavors.
                    <em className="blurb--fa-text">
                      
                    </em>
                    <br />
                    <br />
                    <em className="blurb--fa-text fa-text--signature-dash">
                      
                    </em>&nbsp;
                    Robert McNair, Sasebo
                  </p>
                </div>
                <div className="mask-slide__2 w-slide">
                  <p className="slide__blurb">
                    <em className="blurb--fa-text review-special-text">
                      
                    </em>&nbsp;&nbsp;
                    Wow! Fruity Bamm-Bamm = Delicious.
                    <br />
                    4 Day Delivery = Fast.
                    <br />
                    My New Juice Source = NJ2JP.
                    <em className="blurb--fa-text">
                      
                    </em>
                    <br />
                    <br />
                    <em className="blurb--fa-text fa-text--signature-dash">
                      
                    </em>&nbsp;
                    Gene Smith, Okinawa
                  </p>
                </div>
                <div className="mask-slide__3 w-slide">
                  <p className="slide__blurb">
                    <em className="blurb--fa-text review-special-text">
                      
                    </em>&nbsp;
                    Well, NJ2JP wasn’t lying. 5 days to Fukuoka.
                    <br />
                    Way faster than all of my previous online choices. I’m sold.
                    <em className="blurb--fa-text">
                      
                    </em>
                    <br />
                    <br />
                    <em className="blurb--fa-text fa-text--signature-dash">
                      
                    </em>&nbsp;
                    Matt Shipmen, Okinawa
                  </p>
                </div>
                <div className="mask-slide__4 w-slide">
                  <p className="slide__blurb">
                    <em className="blurb--fa-text review-special-text">
                      
                    </em>&nbsp;
                    I placed my order on Monday, by Thursday morning,
                    <br />
                    I was vaping Nicotine e-juice. Nj2jp is blazing fast!
                    <em className="blurb--fa-text">
                      
                    </em>
                    <br />
                    <br />
                    <em className="blurb--fa-text fa-text--signature-dash">
                      
                    </em>&nbsp;
                    Justin Arians, Yokosuka
                  </p>
                </div>
              </div>
              <div className="slider__nav w-round w-shadow w-slider-nav" />
            </div>
          </div>
          <div className="splash-fastest-delivery">
            <div className="fastest-delivery__header" data-ix="fastest-delivery-scroll">
              <h2 className="header__text" data-ix="fastest-delivery-scroll">
                Fastest Delivery
              </h2>
            </div>
            <div className="fastest-delivery__blurb-container">
              <div className="blurb-container__content">
                <div className="content__text-container" data-ix="fastest-delivery-scroll">
                  <div className="text-container__heading-blurb">
                    <h3 className="heading-blurb__content--heading">
                      Nobody Is Faster In Japan
                    </h3>
                  </div>
                  <div className="text-container__blurb">
                    <p className="blurb__content--text">
                      No one can deliver Nicotine E-Juice to Japan faster than us.
                      <br />
                      <br />
                      Once you shop with us and see how fast we are,&nbsp;{'we\'re'} confident you&nbsp;{'won\'t'}&nbsp;want to buy Nicotine vape juice from anywhere else.
                      <br />
                      <br />
                      Hard to believe? Try us now! You’ll be happy you did.
                    </p>
                  </div>
                </div>
                <div className="content__button-container" data-ix="fade-up">
                  <a className="large__button w-inline-block" data-ix="large-button-hover">
                    <div className="large__button--alt" />
                    <p className="large-button__text">
                      Buy Now
                    </p>
                  </a>
                </div>
              </div>
              <div className="blurb-container__img-container" data-ix="fastest-delivery-fade-in-right">
                <img
                  alt="delivery-scan"
                  className="image-container__img"
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 375px, 49vw"
                  src="images/fastest-delivery-scan.jpg"
                  srcSet="images/fastest-delivery-scan-p-500.jpeg 500w, images/fastest-delivery-scan.jpg 648w"
                />
              </div>
            </div>
          </div>
          <div className="splash-how">
            <div className="how__header">
              <div className="header__text--container">
                <h2 className="text-container__header-button" data-ix="show-hide">
                  How
                </h2>
              </div>
              <div className="header__text--container">
                <h2 className="container__heading--moving" data-ix="questionmark-tilt">
                  ?
                </h2>
              </div>
            </div>
            <div className="how__curious-person">
              <img
                alt="how"
                className="curious-person__img"
                sizes="(max-width: 479px) 195px, (max-width: 767px) 273px, (max-width: 991px) 389.859375px, 587.140625px"
                src="images/girl-wondering.png"
                srcSet="images/girl-wondering-p-500.png 500w, images/girl-wondering.png 640w"
              />
              <div className="how__action-btn">
                <a
                  className="show-me__button w-inline-block"
                  data-ix="show-me"
                >
                  <div className="show-me__button--alt-1" />
                  <div className="show-me__button--alt-2" />
                  <div className="show-me__text">
                    Show Me
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="splash-expanding-how-steps" data-ix="hide-on-load">
            <div className="how-steps__outer-container" data-ix="fade-on-scroll-first-how-section">
              <div className="how-steps__inner-container inner-container--white-background">
                <div className="inner-container__left--container">
                  <img
                    alt="couple-buying"
                    className="container__img"
                    sizes="(max-width: 767px) 100vw, 50vw"
                    src="images/nj2jp-homepage-carousel-couple-800x486.png"
                    srcSet="images/nj2jp-homepage-carousel-couple-800x486-p-500.png 500w, images/nj2jp-homepage-carousel-couple-800x486.png 800w"
                  />
                </div>
                <div className="inner-container__blurb">
                  <p className="blurb__text">
                    <strong className="text--number">1.</strong>&nbsp;
                    Start by choosing from our delicious Juice Flavors with 4 different Nicotine Strengths and place your order.
                  </p>
                </div>
              </div>
            </div>
            <div className="divider--gradient how-steps__outer-container">
              <div className="how-steps__inner-container inner-container--gradient">
                <div className="inner-container__blurb" data-ix="fade-on-scroll">
                  <p className="blurb__text">
                    <strong className="text--number">2.</strong>&nbsp;
                    Moments later, we receive your order at our Distribution Center in California.
                  </p>
                </div>
                <div className="inner-container__right--container">
                  <img
                    alt="distribution"
                    className="container__img"
                    data-ix="slide-on-scroll-right"
                    sizes="(max-width: 767px) 100vw, 50vw"
                    src="images/nj2jp-homepage-carousel-distribution-800x486.png"
                    srcSet="images/nj2jp-homepage-carousel-distribution-800x486-p-500.png 500w, images/nj2jp-homepage-carousel-distribution-800x486.png 800w"
                  />
                </div>
              </div>
            </div>
            <div className="divider--grey how-steps__outer-container">
              <div className="how-steps__inner-container">
                <div className="inner-container__left--container">
                  <img
                    alt="warehouse"
                    className="container__img"
                    data-ix="slide-on-scroll-left"
                    sizes="(max-width: 767px) 100vw, 50vw"
                    src="images/nj2jp-homepage-carousel-warehouse-800x486.png"
                    srcSet="images/nj2jp-homepage-carousel-warehouse-800x486-p-500.png 500w, images/nj2jp-homepage-carousel-warehouse-800x486.png 800w"
                  />
                </div>
                <div className="inner-container__blurb" data-ix="fade-on-scroll">
                  <p className="blurb__text">
                    <strong className="text--number">3.</strong>&nbsp;
                    Our distribution center then quickly prepares your package.
                  </p>
                </div>
              </div>
            </div>
            <div className="divider--grey how-steps__outer-container">
              <div className="how-steps__inner-container inner-container--mobile">
                <div className="inner-container__blurb" data-ix="fade-on-scroll">
                  <p className="blurb__text">
                    <strong className="text--number">4.</strong>&nbsp;
                    A few hours later, your package is put on a direct flight from California to Japan.
                  </p>
                </div>
                <div className="inner-container__right--container">
                  <img
                    alt="flight"
                    className="container__img"
                    data-ix="slide-on-scroll-right"
                    sizes="(max-width: 767px) 100vw, 50vw"
                    src="images/nj2jp-homepage-carousel-flight-800x486.png"
                    srcSet="images/nj2jp-homepage-carousel-flight-800x486-p-500.png 500w, images/nj2jp-homepage-carousel-flight-800x486.png 800w"
                  />
                </div>
              </div>
            </div>
            <div className="divider--grey how-steps__outer-container">
              <div className="how-steps__inner-container">
                <div className="inner-container__left--container">
                  <img
                    alt="delivery-truck"
                    className="container__img"
                    data-ix="slide-on-scroll-left"
                    sizes="(max-width: 767px) 100vw, 50vw"
                    src="images/nj2jp-homepage-carousel-truck-800x486.png"
                    srcSet="images/nj2jp-homepage-carousel-truck-800x486-p-500.png 500w, images/nj2jp-homepage-carousel-truck-800x486.png 800w"
                  />
                </div>
                <div className="inner-container__blurb" data-ix="fade-on-scroll">
                  <p className="blurb__text">
                    <strong className="text--number">5.</strong>&nbsp;
                    Soon after landing, your package is on a delivery truck, on its way to your Japanese address.
                  </p>
                </div>
              </div>
            </div>
            <div className="divider--grey how-steps__outer-container">
              <div className="how-steps__inner-container inner-container--mobile">
                <div className="inner-container__blurb section-blurb--grey" data-ix="fade-on-scroll">
                  <div className="blurb__text-container">
                    <p className="blurb__text text--alt">
                      <strong className="text--number">6.</strong>&nbsp;
                      A few days later, you receive your package from Nic Juice 2 Japan. 😁
                    </p>
                  </div>
                  <div className="blurb__button--container" data-ix="fade-up-2">
                    <a
                      className="large__button w-inline-block"
                      data-ix="large-button-hover"
                      href="/juice/pina_colada"
                    >
                      <div className="large__button--alt" />
                      <p className="large-button__text text--phone-landscape">
                        Buy Now
                      </p>
                    </a>
                  </div>
                </div>
                <div className="inner-container__right--container">
                  <img
                    alt="delivery"
                    className="container__img"
                    data-ix="slide-on-scroll-right"
                    sizes="(max-width: 767px) 100vw, 50vw"
                    src="images/nj2jp-homepage-carousel-delivery-800x486.png"
                    srcSet="images/nj2jp-homepage-carousel-delivery-800x486-p-500.png 500w, images/nj2jp-homepage-carousel-delivery-800x486.png 800w"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="splash-news-reviews">
            <div className="news-reviews__header-container">
              <h2 className="header__text" data-ix="flyout-footer">
                News &amp; Reviews
              </h2>
            </div>
            <div className="news-reviews__masonry-container">
              <div className="place-holder-div__please-delete" />
            </div>
          </div>
          <div className="flyout__footer" data-ix="hide-on-load-2">
            <div className="footer__promotion-container">
              <div className="promotion-top">
                <div className="non-member__title">
                  <div className="tittle--header">
                    Not a member?
                  </div>
                </div>
                <div className="exit-btn__container" data-ix="close-popup">
                  <div className="container__fa-text">
                    
                  </div>
                </div>
              </div>
              <div className="promotion-bottom">
                <div className="register-text">
                  Register &amp; Save
                </div>&nbsp;
                <div className="discount-text">
                  10%
                </div>
              </div>
            </div>
          </div>
        </div>
        <NewsReviews />
      </div>
    );
  }
}
Splash.propTypes = {
  mobile: PropTypes.bool,
};
Splash.defaultProps = {
  mobile: false,
};
const mapStateToProps = ({ mobile }) => ({
  mobile: !!mobile.mobileType,
});
const mapDispatchToProps = dispatch => ({
  push: location => dispatch(push(location)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Splash);
