import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-redux';

function ShoppingCartTotal({ cart, taxes, grandTotal, newUser }) {
  const { discount, totalQty, subTotal } = cart.reduce((accum, next) => {
    if (!!next.qty) {
      accum.totalQty += next.qty;
      accum.subTotal += (Number(next.price) * next.qty);
      return accum;
    }
    return accum;
  }, {
    totalQty: 0,
    subTotal: 0,
    discount: {
      qty: false,
      qtyAmount: 0,
      register: false,
      registerAmount: 0,
    },
  });

  if (totalQty >= 4) {
    discount.qty = true;
    discount.qtyAmount = subTotal * 0.25;
    grandTotal -= discount.qtyAmount;
  }

  if (newUser) {
    discount.register = true;
    discount.qtyAmount = subTotal * 0.1;
    grandTotal -= discount.qtyAmount;
  }

  // <div className="shopping-cart-analysis-main">
  //   <div className="shopping-cart-analysis-subtotal">
  //     <div className="shopping-cart-analysis-subtotal-title">
  //       <h4 className="title">Subtotal</h4>
  //     </div>
  //     <div className="shopping-cart-analysis-subtotal-cost">
  //       <FontAwesome name="usd" />
  //       <h4>{'\u00A0'}{`${subTotal.toFixed(2)}`}</h4>
  //     </div>
  //   </div>
  //
  //   <div className="shopping-cart-analysis-taxes">
  //     <div className="shopping-cart-analysis-taxes-title">
  //       <h4 className="title">Taxes</h4>
  //     </div>
  //     <div className="shopping-cart-analysis-taxes-cost">
  //       <FontAwesome name="usd" />
  //       <h4>{'\u00A0'}{`${taxes.toFixed(2)}`}</h4>
  //     </div>
  //   </div>
  //
  //   <div className="shopping-cart-analysis-shipping">
  //     <div className="shopping-cart-analysis-shipping-title">
  //       <h4 className="title" style={{ 'text-align': 'left' }}>International Shipping</h4>
  //     </div>
  //     <div className="shopping-cart-analysis-shipping-cost">
  //       <FontAwesome name="usd" />
  //       <h4 >{'\u00A0'}Free</h4>
  //     </div>
  //   </div>
  //   {
  //     discount.qty &&
  //       <div className="shopping-cart-analysis-qty-discount">
  //         <div className="shopping-cart-analysis-qty-discount-title">
  //           <h4 className="title required" style={{ 'text-align': 'left' }}>Quantity Discount</h4>
  //         </div>
  //         <div className="shopping-cart-analysis-qty-discount-cost required">
  //           <h4 style={{ color: '#FC2525' }}> 25%{'\u00A0'}</h4>
  //           <FontAwesome name="usd" style={{ color: '#FC2525' }} />
  //           <h4 style={{ color: '#FC2525' }}>
  //             {'\u00A0'}-{discount.qtyAmount.toFixed(2)}
  //           </h4>
  //         </div>
  //       </div>
  //   }
  //
  //   {
  //     discount.register &&
  //       <div className="shopping-cart-analysis-register-discount">
  //         <div className="shopping-cart-analysis-register-discount-title">
  //           <h4 className="title required">Register Discount</h4>
  //         </div>
  //         <div className="shopping-cart-analysis-register-discount-cost required">
  //           <h4 style={{ color: '#FC2525' }}> 10%{'\u00A0'}</h4>
  //           <FontAwesome name="usd" style={{ color: '#FC2525' }} />
  //           <h4 style={{ color: '#FC2525' }}>
  //             {'\u00A0'}-{discount.registerAmount.toFixed(2)}
  //           </h4>
  //         </div>
  //       </div>
  //
  //   }
  //
  //   <div className="shopping-cart-analysis-grand-total">
  //     <div className="shopping-cart-analysis-grand-total-title">
  //       <h4 className="title">Grand Total</h4>
  //     </div>
  //     <div className="shopping-cart-analysis-grand-total-cost">
  //       <FontAwesome name="usd" />
  //       <h4>{'\u00A0'}{`${grandTotal.toFixed(2)}`}</h4>
  //     </div>
  //   </div>
  // </div>
  return (
    <div className="checkout__grand-total">
      <div className="title">
        <h3>Total</h3>
      </div>

      <div className="analysis-container">
        <div className="analysis-container--subtotal">
          <p>Subtotal</p>
          <p><FontAwesome name="usd" />{'\u00A0'}90.00</p>
        </div>
        <div className="analysis-container--shipping">
          <p>Shipping & Handling</p>
          <p><i>Free</i></p>
        </div>
        <div className="analysis-container--discount">
          <p>New Member Discount</p>
          <p><FontAwesome name="usd" />{'\u00A0'}-9.00</p>
        </div>
        <div className="analysis-container--taxes">
          <p>Taxes</p>
          <p><FontAwesome name="usd" />{'\u00A0'}8.10</p>
        </div>
        <div className="analysis-container--grand-total">
          <h3>Grand Total</h3>
          <h3><FontAwesome name="usd" />{'\u00A0'}8.10</h3>
        </div>
      </div>
      <div className="terms-agreement">
        <input type="checkbox" className="checkbox" value={'\f067'} />
        <p>I have read & agree to all <Link to="/terms_and_conditions">
          Terms & Conditions
        </Link></p>
      </div>
      <div className="purchase-btn">
        <button
          onClick={() => console.info('PLACE ORDER')}
        >
          <span className="btn-flex-parent">
            <FontAwesome name="barcode" />
            {'\u00A0'}
            <p>Place Order Now</p>
          </span>
        </button>
      </div>
    </div>
  );
}
const { arrayOf, object, bool, number } = PropTypes;
ShoppingCartTotal.propTypes = {
  cart: arrayOf(object).isRequired,
  taxes: number.isRequired,
  newUser: bool.isRequired,
  grandTotal: number.isRequired,
};
export default ShoppingCartTotal;
