import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';
import './assets/styles/style.css';

export default function IntlShippingForm() {
  return (
    <div className="shipping-method__form">
      <div className="shipping-method__form--checkbox w-checkbox">
        <input
          checked="checked"
          className="shipping-method__checkbox w-checkbox-input"
          data-name="Checkbox 2"
          id="checkbox-2"
          name="checkbox-2"
          type="checkbox"
        />
        <label className="shipping-method__field-label w-form-label" htmlFor="checkbox-2">
          <IntlMsg id="checkout.shipping-method.free-shipping" />
        </label>
      </div>
    </div>
  );
}
