import React from 'react';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';

export default function Loading() {
  return (
    <h3 className="checkout__loading">
      <IntlMsg id="checkout.total.calculating-total" />&nbsp;
      <FontAwesome name="spinner" pulse size="2x" />
    </h3>
  );
}
