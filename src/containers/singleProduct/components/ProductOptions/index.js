import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
// import { FormattedMessage as IntlMsg } from 'react-intl';
import {
  // ErrorMsg,
  // AddToCartBtn,
  OptionsHdr,
  OptionsNicotine,
} from '../';

function ProductOptions({
  chosenStrength,
  nicotineStrengths,
  nicotineHandler,
  // inStock,
  // qtyHandler,
  // quantity,
  // added,
  // addToCartHandler,
  // error,
  // errorMsg,
}) {
  return (
    <div className="product-blurb__product-options" data-ix="product-page-button-section">
      <OptionsHdr />
      <OptionsNicotine
        chosenStrength={chosenStrength}
        nicotineHandler={nicotineHandler}
        nicotineStrengths={nicotineStrengths}
      />

      <div className="product-options__options-qty-cart">
        <div className="options-qty-cart__qty-container">
          <div className="qty-container__qty-blurb">
            <div className="qty-blurb__blurb-text">Quantity</div>
          </div>
          <div className="qty-container__qty-input">
            <div className="qty-input__qty-text">0</div>
          </div>
          <div className="qty-container__qty-buttons">
            <div className="qty-buttons__button-container">
              <button className="button-container__qty-adjust w-inline-block" data-ix="new-interaction" href="#">
                <div className="qty-adj__text">
                  <FontAwesome name="plus" />
                </div>
              </button>
            </div>
            <div className="qty-buttons__button-container">
              <button className="button-container__qty-adjust w-inline-block" data-ix="qty-adjust-hover-2" href="#">
                <div className="qty-adj__text">
                  <FontAwesome name="minus" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="options-qty-cart__cart-button-container">
          <button className="cart-button-container__cart-button w-inline-block" data-ix="product-page-cart-button-hover" href="#">
            <div className="cart-button__cart-text">
              <em className="cart-text__fa-text">
                <FontAwesome name="shopping-cart" />
              </em> &nbsp;&nbsp;
              Add To Cart
            </div>
          </button>
        </div>
      </div>
    </div>
    // <div className="desc__actions">
    //   {
    //     inStock ?
    //     (<div className="actions__btn-container">
    //       <div className="btn-container__qty--container">
    //         <ul className="qty__list">
    //           <li className="list--qty-title">
    //             <p><IntlMsg id="product.single.actions.quantity.title" /></p>
    //           </li>
    //           <li className="list--qty-readout">
    //             <p>{quantity}</p>
    //           </li>
    //           <li className="list--qty-adjust">
    //
    //             <button
    //               data-tag="qty-plus"
    //               className="qty-adjust__plus sweep-right"
    //               onClick={qtyHandler}
    //             ><FontAwesome name="plus" /></button>
    //
    //             <button
    //               data-tag="qty-minus"
    //               className="qty-adjust__minus sweep-right"
    //               onClick={qtyHandler}
    //             ><FontAwesome name="minus" /></button>
    //
    //           </li>
    //         </ul>
    //       </div>
    //       <AddToCartBtn
    //         added={added}
    //         addToCart={addToCartHandler}
    //       />
    //     </div>)
    //     :
    //     <ErrorMsg
    //       error="true"
    //       errorMsg="Out of stock"
    //     />
    //   }
    //   <ErrorMsg
    //     error={error}
    //     errorMsg={errorMsg}
    //   />
    // </div>
  );
}

const {
  func,
  bool,
  shape,
  number,
  string,
  arrayOf,
} = PropTypes;

ProductOptions.propTypes = {
  chosenStrength: number.isRequired,
  nicotineHandler: func.isRequired,
  nicotineStrengths: arrayOf(shape({
    _id: string,
    nicotineStrength: string,
  })).isRequired,

  inStock: bool.isRequired,
  added: bool.isRequired,
  error: bool.isRequired,
  errorMsg: string.isRequired,
  quantity: number.isRequired,
  qtyHandler: func.isRequired,
  addToCartHandler: func.isRequired,
};
export default ProductOptions;
