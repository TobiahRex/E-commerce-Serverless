import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';

function ShoppingCartTotal({ total }) {
  const { discount, subTotal, grandTotal, taxes } = total;

  return (
    <div className="shopping-cart__total-analysis">
      <div className="total-analysis__title-container">
        <div className="total-analysis__title-frame">
          <h3>Total</h3>
        </div>
      </div>
      <div className="total-analysis__subtotal">
        <div className="subtotal__container">
          <p className="subtotal__title">
            <IntlMsg id="cart.total.subtotal" />
          </p>
          <p className="subtotal__cost">
            <FontAwesome name="usd" />&nbsp;
            {`${subTotal.toFixed(2)}`}
          </p>
        </div>
      </div>

      <div className="total-analysis__taxes">
        <div className="taxes__container">
          <p className="taxes__title">
            <IntlMsg id="cart.total.taxes" />
          </p>
          <p className="taxes__cost">
            <FontAwesome name="usd" />&nbsp;
            {`${taxes.toFixed(2)}`}
          </p>
        </div>
      </div>

      <div className="total-analysis__shipping">
        <div className="shipping__container">
          <p className="shipping__title">
            <IntlMsg id="cart.total.shipping" />
          </p>
          <p className="shipping__cost">
            <IntlMsg id="cart.total.free" />
          </p>
        </div>
      </div>
      {discount.qty &&
        <div className="total-analysis__qty-discount">
          <div className="qty-discount__container">
            <p className="qty-discount__title">
              <IntlMsg id="cart.total.quantity-discount" />
            </p>
            <p className="qty-discount__cost">
              25%
              &nbsp;<FontAwesome name="usd" />&nbsp;
              -{discount.qtyAmount.toFixed(2)}
            </p>
          </div>
        </div>}

      {discount.register &&
        <div className="total-analysis__register-discount">
          <div className="register-discount__container">
            <p className="register-discount__title">
              <IntlMsg id="cart.total.register-discount" />
            </p>
            <p className="register-discount__cost">
              10%
              &nbsp;<FontAwesome name="usd" />
              &nbsp;
              -{discount.registerAmount.toFixed(2)}
            </p>
          </div>
        </div>}

      <div className="total-analysis__grand-total">
        <div className="grand-total__container">
          <p className="grand-total__title">
            <IntlMsg id="cart.total.grand-total" />
          </p>
          <p className="grand-total__cost">
            <FontAwesome name="usd" />&nbsp;
            {`${grandTotal.toFixed(2)}`}
          </p>
        </div>
      </div>
    </div>
  );
}
const { bool, shape, number } = PropTypes;
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
