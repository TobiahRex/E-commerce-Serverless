import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';
import NavBob from '../NavBob';

const juices = ['pina_colada', 'french_vanilla_mocha', 'strawberries_n_cream', 'fruity_bamm_bamm', 'papple_berry', 'key_lime_pie'];

function HomepageFastestDelivery({ height, mobile }) {
  let display;
  if (mobile) {
    display = {
      display: 'block',
    };
    height = '';
  } else {
    display = {
      display: 'none',
    };
  }
  return (
    <div
      className="homepage__fastest-delivery"
      style={{ height }}
    >
      <div className="fastest-delivery__content--container">
        <h1 className="content__title">
          <IntlMsg id="home.fastest.title" />
        </h1>
        <div className="content__description-container">
          <img alt="Fastest Delivery" className="content__description-image" />
          <div className="content__message-container">
            <h3 className="message_container__title">
              <IntlMsg id="home.fastest.subtitle" />
            </h3>
            <div className="message-contianer__body">
              <p style={{ display }} >
                <IntlMsg id="home.fastest.desc1" />
              </p>
              <br />
              <p>
                <IntlMsg id="home.fastest.desc2" />
              </p>
              <br />
              <p>
                <IntlMsg id="home.fastest.desc3" />
              </p>
            </div>
            <button
              className="message-container__btn--buy sweep-right"
              onClick={() => browserHistory.push(`/juice/${juices[Math.floor(Math.random() * (juices.length - 1))]}`)}
            >
              <IntlMsg id="home.fastest.buyNow" />
            </button>
          </div>
        </div>
      </div>
      <NavBob
        className={'fastest-delivery__navBob'}
        height={height * 2}
      />
    </div>
  );
}
const { number, bool } = PropTypes;
HomepageFastestDelivery.propTypes = {
  height: number.isRequired,
  mobile: bool.isRequired,
};
export default HomepageFastestDelivery;
