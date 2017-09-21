import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';

export default function FastestDelivery() {
  return (
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
                Once you shop with us and see how fast we are,&nbsp;
                {"we're"}
                {' '}
                confident you&nbsp;
                {"won't"}
                &nbsp;want to buy Nicotine vape juice from anywhere else.
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
