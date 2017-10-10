import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';

export default function ShippingMethod() {
  return (
    <div className="checkout__shipping-method">
      <div className="title">
        <h3>
          <IntlMsg id="checkout.shipping-method.title" />
        </h3>
      </div>
      <div className="input__row">
        <div className="input__row--free-shipping">
          <input
            type="checkbox"
            checked
            onChange={e => console.log(e.target.value)}
          />
          <p>
            <IntlMsg id="checkout.shipping-method.free-shipping" />
          </p>
        </div>
      </div>
    </div>
  );
}
