import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';

function Reviews({ height }) {
  return (
    <div className="splash-reviews" style={{ height: height / 2 }}>
      <div className="splash-reviews__header">
        <h2 className="splash-reviews__header--text">
          <IntlMsg id="home.reviews.title" />
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
                <FontAwesome name="quote-left" />
              </em>&nbsp;&nbsp;
              <IntlMsg id="home.reviews.slide1.blurb" />
              <em className="blurb--fa-text">
                <FontAwesome name="quote-right" />
              </em>
              <br />
              <br />
              <em className="blurb--fa-text fa-text--signature-dash">
                <FontAwesome name="minus" />
              </em>&nbsp;
              <IntlMsg id="home.reviews.slide1.author" />
            </p>
          </div>
          <div className="mask-slide__2 w-slide">
            <p className="slide__blurb">
              <em className="blurb--fa-text review-special-text">
                <FontAwesome name="quote-left" />
              </em>&nbsp;&nbsp;
              <IntlMsg id="home.reviews.slide2.blurb" />
              <em className="blurb--fa-text">
                <FontAwesome name="quote-right" />
              </em>
              <br />
              <br />
              <em className="blurb--fa-text fa-text--signature-dash">
                <FontAwesome name="minus" />
              </em>&nbsp;
              <IntlMsg id="home.reviews.slide2.author" />
            </p>
          </div>
          <div className="mask-slide__3 w-slide">
            <p className="slide__blurb">
              <em className="blurb--fa-text review-special-text">
                <FontAwesome name="quote-left" />
              </em>&nbsp;
              <IntlMsg id="home.reviews.slide3.blurb" />
              <em className="blurb--fa-text">
                <FontAwesome name="quote-right" />
              </em>
              <br />
              <br />
              <em className="blurb--fa-text fa-text--signature-dash">
                <FontAwesome name="minus" />
              </em>&nbsp;
              <IntlMsg id="home.reviews.slide3.author" />
            </p>
          </div>
          <div className="mask-slide__4 w-slide">
            <p className="slide__blurb">
              <em className="blurb--fa-text review-special-text">
                <FontAwesome name="quote-left" />
              </em>&nbsp;
              <IntlMsg id="home.reviews.slide4.blurb" />
              <em className="blurb--fa-text">
                <FontAwesome name="quote-right" />
              </em>
              <br />
              <br />
              <em className="blurb--fa-text fa-text--signature-dash">
                <FontAwesome name="minus" />
              </em>&nbsp;
              <IntlMsg id="home.reviews.slide4.author" />
            </p>
          </div>
        </div>
        <div className="slider__nav w-round w-shadow w-slider-nav" />
      </div>
    </div>
  );
}

const {
  // bool,
  number,
} = PropTypes;
Reviews.propTypes = {
  // mobile: bool,
  height: number,
};
Reviews.defaultProps = {
  // mobile: false,
  height: 0,
};
export default Reviews;
