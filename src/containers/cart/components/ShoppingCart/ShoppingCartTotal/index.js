import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';

function ShoppingCartTotal({ total }) {
  const {
    discount,
    subTotal,
    grandTotal,
    taxes,
  } = total;

  return (
    <div className="shopping-cart-analysis-main">
      <div className="shopping-cart-analysis-subtotal">
        <div className="shopping-cart-analysis-subtotal-title">
          <h4 className="title">
            <IntlMsg id="cart.total.subtotal" />
          </h4>
        </div>
        <div className="shopping-cart-analysis-subtotal-cost">
          <FontAwesome name="usd" />&nbsp;
          <h4>{`${subTotal.toFixed(2)}`}</h4>
        </div>
      </div>

      <div className="shopping-cart-analysis-taxes">
        <div className="shopping-cart-analysis-taxes-title">
          <h4 className="title">
            <IntlMsg id="cart.total.taxes" />
          </h4>
        </div>
        <div className="shopping-cart-analysis-taxes-cost">
          <FontAwesome name="usd" />&nbsp;
          <h4>{`${taxes.toFixed(2)}`}</h4>
        </div>
      </div>

      <div className="shopping-cart-analysis-shipping">
        <div className="shopping-cart-analysis-shipping-title">
          <h4 className="title" style={{ textAlign: 'left' }}>
            <IntlMsg id="cart.total.shipping" />
          </h4>
        </div>
        <div className="shopping-cart-analysis-shipping-cost">
          <FontAwesome name="usd" />&nbsp;
          <h4>
            <IntlMsg id="cart.total.free" />
          </h4>
        </div>
      </div>
      {
        discount.qty &&
          <div className="shopping-cart-analysis-qty-discount">
            <div className="shopping-cart-analysis-qty-discount-title">
              <h4 className="title required" style={{ textAlign: 'left' }}>
                <IntlMsg id="cart.total.quantity-discount" />
              </h4>
            </div>
            <div className="shopping-cart-analysis-qty-discount-cost required">
              <h4 style={{ color: '#FC2525' }}> 25%{'\u00A0'}</h4>
              <FontAwesome name="usd" style={{ color: '#FC2525' }} />
              <h4 style={{ color: '#FC2525' }}>&nbsp;
                -{discount.qtyAmount.toFixed(2)}
              </h4>
            </div>
          </div>
      }

      {
        discount.register &&
          <div className="shopping-cart-analysis-register-discount">
            <div className="shopping-cart-analysis-register-discount-title">
              <h4 className="title required">
                <IntlMsg id="cart.total.register-discount" />
              </h4>
            </div>
            <div className="shopping-cart-analysis-register-discount-cost required">
              <h4 style={{ color: '#FC2525' }}>
                10%
              </h4>
              &nbsp;<FontAwesome name="usd" style={{ color: '#FC2525' }} />

              <h4 style={{ color: '#FC2525' }}>&nbsp;
                -{discount.registerAmount.toFixed(2)}
              </h4>
            </div>
          </div>

      }

      <div className="shopping-cart-analysis-grand-total">
        <div className="shopping-cart-analysis-grand-total-title">
          <h4 className="title">
            <IntlMsg id="cart.total.grand-total" />
          </h4>
        </div>
        <div className="shopping-cart-analysis-grand-total-cost">
          <FontAwesome name="usd" />&nbsp;
          <h4>{`${grandTotal.toFixed(2)}`}</h4>
        </div>
      </div>
    </div>
  );
}
{/* TODO: Change the style of the Cart Total to this element instead.
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
</div> */}

const {
  bool,
  shape,
  number,
} = PropTypes;
ShoppingCartTotal.propTypes = {
  total: shape({
    discount: shape({
      qty: bool.isRequired,
      qtyAmount: number.isRequired,
      register: bool.isRequired,
      registerAmount: number.isRequired,
    }),
    taxes: number.isRequired,
    grandTotal: number.isRequired,
    subTotal: number.isRequired,
  }),
};
ShoppingCartTotal.defaultProps = {
  total: {
    discount: {
      qty: false,
      qtyAmount: 0,
      register: false,
      registerAmount: 0,
    },
    taxes: 0,
    grandTotal: 0,
    subTotal: 0,
  },
};
export default ShoppingCartTotal;
