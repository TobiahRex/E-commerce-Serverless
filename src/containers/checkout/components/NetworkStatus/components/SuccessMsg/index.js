import React from 'react';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';
import _ from 'lodash';
import { lifecycle } from 'recompose';
import './assets/styles/style.css';

function PleaseWait() {
  return (
    <div className="main-section__success">
      <div className="success__hdr-section">
        <div className="hd-section__hdr-container">
          <h2 className="hdr-container__success-blurb"><em className="success-blurb__fa-text">
            <FontAwesome className="success-icon" name="check-circle" />&nbsp;
          </em>&nbsp;
            <IntlMsg id="checkout.submit.success.title" />
          </h2>
        </div>
      </div>
      <div className="success__blurb-section">
        <div className="blurb-section__success-blurb">
          <IntlMsg id="checkout.submit.success.message" />&nbsp;
          <em className="success-blurb__fa-spinner">
            <IntlMsg id="checkout.submit.success.message" />&nbsp;
          </em>
        </div>
      </div>
    </div>
  );
}
const PleaseWaitWithLifecycle = lifecycle({
  shouldComponentUpdate(nextProps) {
    const npCopy = _.cloneDeep(nextProps);
    const tpCopy = _.cloneDeep(this.props);

    if (!_.isEqual(npCopy, tpCopy)) return true;
    return false;
  },
})(PleaseWait);
export default PleaseWaitWithLifecycle;
