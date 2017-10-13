import React from 'react';
import PropTypes from 'prop-types';
import {
  Warning,
  Register,
  Disclaimer,
} from './components';

function NewUserDiscountOffer({ routerPush }) {
  return (
    <div className="product-review__logged-out">
      <Warning />
      <Register routerPush={routerPush} />
      <Disclaimer />
    </div>
  );
}
NewUserDiscountOffer.propTypes = {
  routerPush: PropTypes.func.isRequired,
};
export default NewUserDiscountOffer;
