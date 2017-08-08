import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import FontAwesome from 'react-fontawesome';

function SubmitOrder() {
  return (
    <div className="checkout__purchase-btn">
      <Validation.components.Button className="button" errorClassName="asd" >
        <span className="btn-flex-parent">
          <FontAwesome name="barcode" />
          {'\u00A0'}
          <p>Place Order Now</p>
        </span>
      </Validation.components.Button>
    </div>
  );
}
SubmitOrder.propTypes = {
  show: PropTypes.bool.isRequired,
};
export default SubmitOrder;
