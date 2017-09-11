import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
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
          Fastest Delivery
        </h1>
        <div className="content__description-container">
          <img alt="Fastest Delivery" className="content__description-image" />
          <div className="content__message-container">
            <h3 className="message_container__title">Nobody Is Faster In Japan</h3>
            <div className="message-contianer__body">
              <p style={{ display }} >
                No one can deliver Nicotine E-Juice to Japan
                faster than us.
              </p>
              <br />
              <p>
                Once you shop with us and see how fast we are, {('we\'re')} confident you {('won\'t')} want to buy Nicotine vape juice from anywhere else.
              </p>
              <br />
              <p>
                Hard to believe? Try us now! You’ll be happy you did.
              </p>
            </div>
            <button
              className="message-container__btn--buy sweep-right"
              onClick={() => browserHistory.push(`/juice/${juices[Math.floor(Math.random() * (juices.length - 1))]}`)}
            >Buy Now</button>
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
