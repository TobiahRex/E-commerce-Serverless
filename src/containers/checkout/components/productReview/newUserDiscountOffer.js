import React from 'react';
import PropTypes from 'prop-types';

function NewUserDiscountOffer({ routerPush }) {
  return (
    <div>
      <div className="input__row">
        <div className="input__row--guest-warning">
          <p><span className="warning-bold">Warning: </span>You are currently checking out as a “Guest”. If you would like to save your checkout info for future purchases, register now and we will save your information* & you will receive 10% off your first order as a new member.</p>
        </div>
      </div>

      <div className="input__row">
        <div className="input__row--guest-register">
          <button
            className="guest-register sweep-right"
            data-slug="login"
            onClick={routerPush}
          >
            Register & Save 10%
          </button>

        </div>
        <br />
        <p> Your credit card information is extremely sensitive and we respect that.  We will never save your credit card information.</p>
      </div>
    </div>
  );
}
NewUserDiscountOffer.propTypes = {
  routerPush: PropTypes.func.isRequired,
};
export default NewUserDiscountOffer;
