import React from 'react';
import Validation from 'react-validation';
import FontAwesome from 'react-fontawesome';

export default function SubmitOrder() {
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
