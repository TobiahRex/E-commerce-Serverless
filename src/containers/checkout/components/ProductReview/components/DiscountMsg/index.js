import React from 'react';
import PropTypes from 'prop-types';
import {
  Warning,
  Register,
  Disclaimer,
} from './components';

function DiscountMsg({ routerPush }) {
  return (
    <div className="product-review__logged-out">
      <Warning />
      <Register routerPush={routerPush} />
      <Disclaimer />
    </div>
  );
}
DiscountMsg.propTypes = {
  routerPush: PropTypes.func.isRequired,
};
export default DiscountMsg;
