import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';

function ActionBtns({ routerBack, routerPush }) {
  return (
    <div className="main__back-btn">
      <button
        className="back-btn sweep-right"
        routerBack="goBack"
        onClick={routerBack}
      >
        <span className="flex-btn-parent">
          <FontAwesome name="angle-double-left" />
          {'\u00A0'}Back
        </span>
      </button>
      <button
        className="juices-btn sweep-right"
        data-tag="juices"
        onClick={routerPush}
      >Shop All Juices
      </button>
    </div>
  );
}
ActionBtns.propTypes = {
  routerPush: PropTypes.func.isRequired,
  routerBack: PropTypes.func.isRequired,
};
export default ActionBtns;
