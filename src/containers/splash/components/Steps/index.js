import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';

export default function Steps() {
  return (
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
              <IntlMsg id="home.how.buying.desc" />
            </p>
          </div>
        </div>
      </div>
      <div className="divider--gradient how-steps__outer-container">
        <div className="how-steps__inner-container inner-container--gradient">
          <div className="inner-container__blurb" data-ix="fade-on-scroll">
            <p className="blurb__text">
              <strong className="text--number">2.</strong>&nbsp;
              <IntlMsg id="home.how.distro.desc" />
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
              <IntlMsg id="home.how.warehouse.desc" />
            </p>
          </div>
        </div>
      </div>
      <div className="divider--grey how-steps__outer-container">
        <div className="how-steps__inner-container inner-container--mobile">
          <div className="inner-container__blurb" data-ix="fade-on-scroll">
            <p className="blurb__text">
              <strong className="text--number">4.</strong>&nbsp;
              <IntlMsg id="home.how.flight.desc" />
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
              <IntlMsg id="home.how.truck.desc" />
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
                <IntlMsg id="home.how.delivery.desc" />
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
                  <IntlMsg id="home.how.delivery.desc.buyNow" />
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
  );
}
