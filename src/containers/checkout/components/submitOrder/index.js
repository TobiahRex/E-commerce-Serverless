import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Validation from 'react-validation';
import FontAwesome from 'react-fontawesome';
import { withHandlers, lifecycle } from 'recompose';
import { FormattedMessage as IntlMsg } from 'react-intl';

import {
  squarePaymentForm as SqrPaymentForm,
} from '../../assets/utils';

function SubmitOrder({ enable, requestCardNonce, loading }) {
  if (enable) {
    return (
      <div className="checkout__purchase-btn" style={{ display: loading ? 'none' : '' }} >
        <Validation.components.Button
          className="button"
          errorClassName="asd"
          onClick={requestCardNonce}
        >
          <span className="btn-flex-parent">
            <p>
              <IntlMsg id="checkout.submit1" />
            </p>
            &nbsp;
            <FontAwesome name="opencart" />
          </span>
        </Validation.components.Button>
      </div>
    );
  }
  return (
    <div className="checkout__purchase-btn">
      <button className="button" disabled>
        <span className="btn-flex-parent">
          <p>
            <IntlMsg id="checkout.submit1" />
          </p>
          &nbsp;
          <FontAwesome name="opencart" />
        </span>
      </button>
    </div>
  );
}
SubmitOrder.propTypes = {
  enable: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  requestCardNonce: PropTypes.func.isRequired,
};
const SubmitOrderWithHandlers = withHandlers({
  requestCardNonce: () => (event) => { //eslint-disable-line
    SqrPaymentForm.get().requestCardNonce();
  },
})(SubmitOrder);
const SubmitOrderWithHandlersAndLifecycle = lifecycle({
  shouldComponentUpdate(nextProps) {
    const npCopy = _.cloneDeep(nextProps);
    const tpCopy = _.cloneDeep(this.props);

    if (!_.isEqual(npCopy, tpCopy)) return true;
    return false;
  },
})(SubmitOrderWithHandlers);
export default SubmitOrderWithHandlersAndLifecycle;
