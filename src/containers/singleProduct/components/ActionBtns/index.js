import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';

function ActionBtns({ routerBack }) {
  return (
    <div className="product-page__action-btns">
      <button className="product-page__back-btn" target="_blank" onClick={routerBack}>
        <span className="flex-btn-parent">
          <FontAwesome name="angle-double-left" />&nbsp;
          <IntlMsg id="product.single.actions.back-btn" />
        </span>
      </button>
    </div>
  );
}
ActionBtns.propTypes = {
  routerBack: PropTypes.func.isRequired,
};
export default ActionBtns;
