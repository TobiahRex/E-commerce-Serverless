import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';
import _ from 'lodash';
import { lifecycle } from 'recompose';
import './assets/styles/style.css';

function WarningMsg({ message }) {
  return (
    <div className="main-section__error">
      <div className="error__hdr-section">
        <div className="hdr-section__hdr-container">
          <h2 className="hdr-container__error-blurb">
            <em className="error-blurb__fa-text">
              <FontAwesome className="error-icon" name="exclamation-triangle" />&nbsp;
            </em>
            <IntlMsg id="checkout.error.title" />
          </h2>
        </div>
      </div>
      <div className="error__blurb-section">
        <div className="blurb-section__blurb">{message}</div>
      </div>
    </div>
  );
}
const WarningMsgWithLifecycle = lifecycle({
  shouldComponentUpdate(nextProps) {
    const npCopy = _.cloneDeep(nextProps);
    const tpCopy = _.cloneDeep(this.props);

    if (!_.isEqual(npCopy, tpCopy)) return true;
    return false;
  },
})(WarningMsg);

WarningMsg.propTypes = {
  message: PropTypes.string.isRequired,
};
export default WarningMsgWithLifecycle;
