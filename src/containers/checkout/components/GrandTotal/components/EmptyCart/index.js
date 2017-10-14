import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';
import './assets/styles/style.css';

export default function EmptyCart() {
  return (
    <div className="total__empty-cart">
      <div className="logged-out__blurb">
        <IntlMsg id="checkout.total.empty-cart" />
      </div>
    </div>
  );
}
