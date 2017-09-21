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
);
}
