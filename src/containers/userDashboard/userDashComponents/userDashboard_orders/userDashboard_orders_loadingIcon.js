import React from 'react';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  // location: PropTypes.objectOf(PropTypes.any).isRequired,
};

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
LoadingIcon.propTypes = propTypes;
export default LoadingIcon;
