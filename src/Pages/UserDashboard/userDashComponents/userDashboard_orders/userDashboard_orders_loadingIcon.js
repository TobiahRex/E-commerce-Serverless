import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  // location: PropTypes.objectOf(PropTypes.any).isRequired,
};

function LoadingIcon() {
  return (
    <div className="dashboard__loading-container">
      <div className="dashboard__loading-icon">
        <FontAwesome name="" />
        <div className="loading-msg">
          Loading Your Orders...
        </div>
      </div>
    </div>
  );
}
LoadingIcon.propTypes = propTypes;
export default LoadingIcon;
