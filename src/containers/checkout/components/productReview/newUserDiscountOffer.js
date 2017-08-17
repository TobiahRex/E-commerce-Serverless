import React from 'react';
import PropTypes from 'prop-types';

function NewUserDiscountOffer({ routerPush }) {
  return (
    <div>
      <div className="input__row">
        <div className="input__row--guest-warning">
          <p><span className="warning-bold">Warning: </span>You are currently trying to checkout out as a “Guest”. You will need to login or register to complete this transaction.  If it is your first purchase with us you will receive 10% off your first order!<span className="required">* </span></p>
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
        <p> <span className="required">* </span> Your credit card information is extremely sensitive and we respect that.  We will never save your credit card information.</p>
      </div>
    </div>
  );
}
NewUserDiscountOffer.propTypes = {
  routerPush: PropTypes.func.isRequired,
};
export default NewUserDiscountOffer;
