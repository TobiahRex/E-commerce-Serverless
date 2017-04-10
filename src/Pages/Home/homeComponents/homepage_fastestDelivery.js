import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import NavBob from './navBob';

const defaultProps = {
  mobile: false,
};

const propTypes = {
  height: PropTypes.number.isRequired,
  mobile: PropTypes.bool,
};

function HomepageFastestDelivery({ height, mobile }) {
  return (
    <div
      className="homepage-fastest-delivery"
      style={{ height }}
    >
      <div className="fastest-delivery__content--container">
        <h1 className="homepage-fastest-delivery-title">
          Fastest Delivery
        </h1>
        <div className="homepage-fastest-delivery-description-container">
          <img alt="Fastest Delivery" className="homepage-fastest-delivery-description-image" />
          <div className="homepage-fastest-delivery-description-message-container">
            <h3>Nobody Is Faster In Japan</h3>
            <div className="homepage-fastest-delivery-description-message-body">
              <p>
                No one can deliver Nicotine E-Juice to Japan
                faster than us.
              </p>
              <br />
              <p>
                Once you shop with us and see how fast we are, {('we\'re')} confident you {('won\'t')} want to buy Nicotine vape juice from anywhere else.
              </p>
              <br />
              <p>
                Hard to believe? Try us now!
              </p>
              <br />
              <p>
                You’ll be happy you did.
              </p>
            </div>
            <button
              className="homepage-fastest-delivery-description-message-buy-btn sweep-right"
              onClick={() => browserHistory.push('/juices')}
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
HomepageFastestDelivery.defaultProps = defaultProps;
HomepageFastestDelivery.propTypes = propTypes;
export default HomepageFastestDelivery;
