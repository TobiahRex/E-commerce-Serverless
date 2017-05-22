import React from 'react';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';

export default function ActionBtns() {
  return (
    <div className="main__back-btn">
      <button
        className="back-btn sweep-right"
        onClick={browserHistory.goBack}
      >
        <span className="flex-btn-parent">
          <FontAwesome name="angle-double-left" />
          {'\u00A0'}Back
        </span>
      </button>
      <button
        className="juices-btn sweep-right"
        onClick={() => browserHistory.push('/juices')}
      >Shop All Juices
      </button>
    </div>
  );
}
