import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { FormattedMessage as IntlMsg } from 'react-intl';
import { lifecycle } from 'recompose';
import {
  Loading,
  TotalContent,
} from './components';

function GrandTotal(props) {
  const renderHelper = (compProps) => {
    const {
      total: {
        subTotal,
        taxes,
        grandTotal,
        discount,
      },
      showTotal,
      termsAgreement,
    } = compProps;

    if (showTotal) {
      return (
        grandTotal ?
          <TotalContent
            subTotal={subTotal}
            taxes={taxes}
            discount={discount}
            grandTotal={grandTotal}
            termsAgreement={termsAgreement}
            handleOnChange={this.handleOnChange}
          />
          :
          <Loading />
      );
    }

    return (
      <div>
        <h4 style={{ color: '#365899', padding: '2em 0em 1em 0em' }}>
          <span className="required">
            <IntlMsg id="checkout.total.empty-cart" />
          </span>
        </h4>
      </div>
    );
  };

  return (
    <div className="checkout__grand-total">
      {renderHelper(props)}
    </div>
  );
}
const GrandTotalWithLifecycle = lifecycle({
  shouldComponentUpdate(nextProps) {
    const npCopy = _.cloneDeep(nextProps);
    const tpCopy = _.cloneDeep(this.props);

    if (!_.isEqual(npCopy, tpCopy)) return true;
    return false;
  },
})(GrandTotal);

const { bool, shape, number, func } = PropTypes;
GrandTotal.propTypes = {
  handleOnChange: func.isRequired,
  termsAgreement: bool.isRequired,
  showTotal: bool.isRequired,
  total: shape({
    subTotal: number,
    taxes: number,
    grandTotal: number,
    discount: shape({
      qty: bool,
      qtyAmount: number,
      register: bool,
      registerAmount: number,
    }),
  }).isRequired,
};
export default GrandTotalWithLifecycle;
