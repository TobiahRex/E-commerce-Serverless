import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';

export default function FastestDelivery() {
  return (
    <div className="splash-fastest-delivery">
      <div className="fastest-delivery__header" data-ix="fastest-delivery-scroll">
        <h2 className="header__text" data-ix="fastest-delivery-scroll">
          <IntlMsg id="home.fastest.title" />
        </h2>
      </div>
      <div className="fastest-delivery__blurb-container">
        <div className="blurb-container__content">
          <div className="content__text-container" data-ix="fastest-delivery-scroll">
            <div className="text-container__heading-blurb">
              <h3 className="heading-blurb__content--heading">
                <IntlMsg id="home.fastest.subtitle" />
              </h3>
            </div>
            <div className="text-container__blurb">
              <p className="blurb__content--text">
                <IntlMsg id="home.fastest.desc1" />
                <br />
                <br />
                <IntlMsg id="home.fastest.desc2" />
                <br />
                <br />
                <IntlMsg id="home.fastest.desc3" />
              </p>
            </div>
          </div>
          <div className="content__button-container" data-ix="fade-up">
            <a className="large__button w-inline-block" data-ix="large-button-hover">
              <div className="large__button--alt" />
              <p className="large-button__text">
                <IntlMsg id="home.fastest.buyNow" />
              </p>
            </a>
          </div>
        </div>
        <div
          className="blurb-container__img-container"
          data-ix="fastest-delivery-fade-in-right"
        >
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
  );
}
