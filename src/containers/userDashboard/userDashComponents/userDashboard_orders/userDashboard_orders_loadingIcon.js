import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

function LoadingIcon() {
  return (
    <div className="dashboard__loading-container">
      <div className="dashboard__loading-icon">
        <FontAwesome name="refresh" spin />
        <div className="loading-msg">
          <p>Loading Your Orders...</p>
        </div>
      </div>
    </div>
  );
}
const { objectOf, any } = PropTypes;
const propTypes = { location: objectOf(any).isRequired };
LoadingIcon.propTypes = propTypes;
export default LoadingIcon;
