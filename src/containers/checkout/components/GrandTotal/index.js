import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { lifecycle } from 'recompose';
import {
  HdrBox,
  EmptyCart,
  Calculating,
  TotalContent,
} from './components';
import './assets/styles/style.css';

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
      handleOnChange,
    } = compProps;

    if (showTotal && grandTotal) {
      return (
        <TotalContent
          subTotal={subTotal}
          taxes={taxes}
          discount={discount}
          grandTotal={grandTotal}
          termsAgreement={termsAgreement}
          handleOnChange={handleOnChange}
        />
      );
    }

    if (showTotal && !grandTotal) return <Calculating />;

    return <EmptyCart />;
  };

  return (
    <div className="main-section__total">
      <HdrBox />
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
