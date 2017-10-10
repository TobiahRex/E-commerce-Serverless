import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

function ProductUnitPrice({ productObj }) {
  return (
    <div className="line-item__qty-container">
      <div className="qty-container__box-container">
        <div className="qty-container__qty-text">100</div>
        <div className="box-container__qty-buttons">
          <a className="qty-buttons__btn w-button" href="#">
            <FontAwesome name="plus" />
          </a>
          <a className="qty-buttons__btn w-button" href="#">
            <FontAwesome name="minus" />
          </a>
        </div>
      </div>
      <div className="qty-container__error-msg">
        <p className="error-msg__blurb-container">
          Maximum of 4 bottles, per customer, per address. More info
          <em className="error-msg__link">here</em>.
          <br>
            Japanese Statute # 123123123.
          </p>
        </div>
      </div>
      );
      }
const { shape, string } = PropTypes;
ProductUnitPrice.propTypes = {
  productObj: shape({
    product: shape({
      price: string,
    }),
  }).isRequired,
};
export default ProductUnitPrice;
