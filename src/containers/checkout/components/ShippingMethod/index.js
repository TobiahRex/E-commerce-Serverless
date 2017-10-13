import React from 'react';
import _ from 'lodash';
import { lifecycle } from 'recompose';
import {
  HdrBox,
  IntlShippingForm,
} from './components';
import './assets/styles/style.css';

function ShippingMethod() {
  return (
    <div className="main-section__shipping-method">
      <HdrBox />
      <IntlShippingForm />
    </div>
  );
}
const ShippingMethodWithLifecycle = lifecycle({
  shouldComponentUpdate(nextProps) {
    if (!_.isEqual(nextProps, this.props)) return true;
    return false;
  },
})(ShippingMethod);

export default ShippingMethodWithLifecycle;
