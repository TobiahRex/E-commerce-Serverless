import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';
import _ from 'lodash';
import { lifecycle } from 'recompose';

function ShippingAddress({ children }) {
  return (
    <div className="checkout__shipping">
      <div className="title">
        <h3><IntlMsg id="checkout.shipping-address.title" /></h3>
      </div>
      {children}
    </div>
  );
}
const ShippingAddressWithLifecycle = lifecycle({
  shouldComponentUpdate(nextProps) {
    const npCopy = _.cloneDeep(nextProps);
    const tpCopy = _.cloneDeep(this.props);

    if (!_.isEqual(npCopy, tpCopy)) return true;
    return false;
  },
})(ShippingAddress);

const { arrayOf, object } = PropTypes;
ShippingAddress.propTypes = {
  children: arrayOf(object).isRequired,
};

export default ShippingAddressWithLifecycle;
