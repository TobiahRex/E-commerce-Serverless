import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';

function ActionBtns({ routerBack, routerPush }) {
  return (
    <div className="main__back-btn">

      <button className="back-btn sweep-right" onClick={routerBack}>
        <span className="flex-btn-parent">
          <FontAwesome name="angle-double-left" />&nbsp;
          <IntlMsg id="product.single.actions.back-btn" />
        </span>
      </button>

      <button
        className="juices-btn sweep-right"
        data-slug="juices"
        onClick={routerPush}
      >
        <IntlMsg id="product.single.actions.juices" />
      </button>

    </div>
  );
}
ActionBtns.propTypes = {
  routerPush: PropTypes.func.isRequired,
  routerBack: PropTypes.func.isRequired,
};
export default ActionBtns;
