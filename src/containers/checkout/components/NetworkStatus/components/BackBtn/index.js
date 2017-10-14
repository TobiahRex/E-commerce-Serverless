import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';
import _ from 'lodash';
import { lifecycle } from 'recompose';
import './assets/styles/style.css';

function BackBtn({ routerBack }) {
  return (
    <div className="main-section__back-btn">
      <button
        className="back-btn__btn sweep-right"
        data-slug="/"
        type="button"
        onClick={routerBack}
      >
        <em className="btn__fa-text">
          <FontAwesome name="angle-double-left" />
          &nbsp;&nbsp;
        </em>
        <IntlMsg id="checkout.action-btn.back" />
      </button>
    </div>
  );
}
const BackBtnWithLifecycle = lifecycle({
  shouldComponentUpdate(nextProps) {
    const npCopy = _.cloneDeep(nextProps);
    const tpCopy = _.cloneDeep(this.props);

    if (!_.isEqual(npCopy, tpCopy)) return true;
    return false;
  },
})(BackBtn);
BackBtn.propTypes = {
  routerBack: PropTypes.func.isRequired,
};
export default BackBtnWithLifecycle;
