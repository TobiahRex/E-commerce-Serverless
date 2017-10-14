import React from 'react';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';
import _ from 'lodash';
import { lifecycle } from 'recompose';
import './assets/styles/style.css';

function PleaseWait() {
  return (
    <div className="main-section__loading-state">
      <div className="loading-state__spinner">
        <div className="spinner__blurb">
          <FontAwesome className="spinner-icon" name="spinner" pulse />&nbsp;
        </div>
      </div>
      <div className="loading-state__blurb">
        <div className="blurb__text">
          <IntlMsg id="checkout.loading.title" />
          <br />
          <IntlMsg id="checkout.loading.subtitle" />
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
